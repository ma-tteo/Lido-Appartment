import { useState, useEffect } from "react";
import { Star, MessageCircle, Loader2, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { db } from "@/lib/firebase";
import { collection, addDoc, query, where, getDocs, serverTimestamp, orderBy } from "firebase/firestore";
import { useToast } from "@/components/ui/use-toast";

// Define the structure of a review
interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

// Validation schema for the review form
const formSchema = z.object({
  name: z.string().min(2, { message: "Il nome deve essere di almeno 2 caratteri." }).max(50),
  rating: z.coerce.number().min(1, { message: "Seleziona una valutazione." }).max(5),
  comment: z.string().min(10, { message: "Il commento deve essere di almeno 10 caratteri." }).max(500),
  improvement: z.string().max(500).optional(), // Private feedback field
});

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      rating: 0,
      comment: "",
      improvement: "",
    },
  });

  // Fetch approved reviews from Firestore
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsCollection = collection(db, "reviews");
        const q = query(reviewsCollection, where("status", "==", "approved"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedReviews = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt.toDate(),
        })) as Review[];
        setReviews(fetchedReviews);
      } catch (err) {
        console.error(err);
        setError("Impossibile caricare le recensioni. Riprova più tardi.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await addDoc(collection(db, "reviews"), {
        name: values.name,
        rating: values.rating,
        comment: values.comment,
        improvement: values.improvement, // Save the private feedback
        status: "approved",
        createdAt: serverTimestamp(),
      });
      
      toast({
        title: "Recensione Inviata!",
        description: "Grazie per aver condiviso la tua esperienza.",
      });
      form.reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: "Errore",
        description: "Non è stato possibile inviare la recensione. Riprova.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 bg-sand-warm/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Dicono di Noi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leggi le esperienze dei nostri ospiti e lascia la tua recensione.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reviews List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Recensioni Recenti</h3>
            {isLoading && (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-ocean-blue" />
                <p className="ml-2">Caricamento recensioni...</p>
              </div>
            )}
            {error && <p className="text-destructive">{error}</p>}
            {!isLoading && !error && reviews.length === 0 && (
              <p className="text-muted-foreground">Non ci sono ancora recensioni. Sii il primo a lasciarne una!</p>
            )}
            {reviews.map((review) => (
              <Card key={review.id} className="elegant-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{review.name}</CardTitle>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{review.createdAt.toLocaleDateString("it-IT")}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Review Form */}
          <div>
            <Card className="elegant-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-6 w-6" />
                  Lascia la Tua Recensione
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Il Tuo Nome</FormLabel>
                          <FormControl>
                            <Input placeholder="Mario Rossi" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="rating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Valutazione</FormLabel>
                          <FormControl>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-8 w-8 cursor-pointer transition-colors ${
                                    star <= (field.value || 0)
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300 hover:text-yellow-300"
                                  }`}
                                  onClick={() => field.onChange(star)}
                                />
                              ))}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="comment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Commento Pubblico</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Come è stata la tua esperienza?"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="improvement"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cosa potremmo migliorare? (Privato)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Qualsiasi suggerimento è ben accetto! Questo campo non sarà visibile pubblicamente."
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
                      {form.formState.isSubmitting ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="mr-2 h-4 w-4" />
                      )}
                      Invia Recensione
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
