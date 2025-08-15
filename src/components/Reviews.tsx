import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, User, Calendar, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// import { supabase } from "@/integrations/supabase/client";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  stay_period?: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "1",
      name: "Marco R.",
      rating: 5,
      comment: "Appartamento fantastico, posizione perfetta a 400m dalla spiaggia. Cucina super attrezzata e balcone spazioso. Tortoreto Lido è una perla, mare pulitissimo!",
      date: "2024-08-15",
      stay_period: "Agosto 2024"
    },
    {
      id: "2", 
      name: "Francesca M.",
      rating: 5,
      comment: "Vacanza meravigliosa! L'appartamento ha tutto quello che serve, molto pulito e accogliente. La zona è tranquilla e la spiaggia vicinissima. Consigliatissimo!",
      date: "2024-07-22",
      stay_period: "Luglio 2024"
    },
    {
      id: "3",
      name: "Alessandro T.",
      rating: 4,
      comment: "Ottimo appartamento per famiglie, due camere comode e balcone grande. Parcheggio facile da trovare. Mare bellissimo e spiagge ben attrezzate.",
      date: "2024-06-18",
      stay_period: "Giugno 2024"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: '',
    stay_period: ''
  });

  const { toast } = useToast();

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add to local state for demo
    const newId = Date.now().toString();
    setReviews(prev => [{
      id: newId,
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0],
      stay_period: newReview.stay_period
    }, ...prev]);

    setNewReview({ name: '', rating: 5, comment: '', stay_period: '' });
    setShowForm(false);
    
    toast({
      title: "Recensione pubblicata!",
      description: "Grazie per aver condiviso la tua esperienza.",
    });
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
            onClick={interactive && onRatingChange ? () => onRatingChange(star) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-sand-warm/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-ocean mb-4">
              Recensioni degli Ospiti
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                {renderStars(Math.round(averageRating))}
                <span className="text-2xl font-bold text-deep-ocean">
                  {averageRating.toFixed(1)}
                </span>
              </div>
              <div className="text-muted-foreground">
                ({reviews.length} recensioni)
              </div>
            </div>
            <Button 
              variant="hero" 
              onClick={() => setShowForm(!showForm)}
              className="mb-8"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Scrivi una Recensione
            </Button>
          </div>

          {/* New Review Form */}
          {showForm && (
            <Card className="mb-8 elegant-shadow">
              <CardHeader>
                <CardTitle>Condividi la tua esperienza</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="reviewName">Nome *</Label>
                      <Input
                        id="reviewName"
                        value={newReview.name}
                        onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Il tuo nome"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="stayPeriod">Periodo soggiorno</Label>
                      <Input
                        id="stayPeriod"
                        value={newReview.stay_period}
                        onChange={(e) => setNewReview(prev => ({ ...prev, stay_period: e.target.value }))}
                        placeholder="es. Agosto 2024"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Valutazione *</Label>
                    <div className="mt-2">
                      {renderStars(newReview.rating, true, (rating) => 
                        setNewReview(prev => ({ ...prev, rating }))
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="reviewComment">Commento *</Label>
                    <Textarea
                      id="reviewComment"
                      value={newReview.comment}
                      onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                      placeholder="Racconta la tua esperienza..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button type="submit" variant="hero">
                      Pubblica Recensione
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                      Annulla
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Reviews List */}
          <div className="grid gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="elegant-shadow hover-lift">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-ocean-blue/10 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-ocean-blue" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-deep-ocean">{review.name}</h3>
                          {review.stay_period && (
                            <p className="text-sm text-muted-foreground">{review.stay_period}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {renderStars(review.rating)}
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {new Date(review.date).toLocaleDateString('it-IT')}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;