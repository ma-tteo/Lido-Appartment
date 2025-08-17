import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import livingRoom from "@/assets/Galleria Fotografica1.JPG";
import bedroom from "@/assets/Galleria Fotografica2.jpg";
import secondBedroom from "@/assets/Galleria Fotografica3.JPG";
import bathroom from "@/assets/Galleria Fotografica4.JPG";
import balconyView from "@/assets/Galleria Fotografica5.JPG";
import beachView from "@/assets/Galleria Fotografica6.JPG";

const images = [
  { src: livingRoom, alt: "Soggiorno con cucina attrezzata", title: "Soggiorno" },
  { src: bedroom, alt: "Camera matrimoniale", title: "Camera Matrimoniale" },
  { src: secondBedroom, alt: "Cameretta con due letti singoli", title: "Cameretta" },
  { src: bathroom, alt: "Bagno moderno", title: "Bagno" },
  { src: balconyView, alt: "Vista dal balcone", title: "Vista Balcone" },
  { src: beachView, alt: "Spiaggia di Tortoreto Lido", title: "La Spiaggia" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Galleria Fotografica
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Esplora il comfort e la bellezza del nostro appartamento e della zona di Tortoreto Lido
          </p>
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <Dialog key={index} open={isOpen && selectedImage === index} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <div 
                  className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer hover-lift"
                  onClick={() => {
                    setSelectedImage(index);
                    setIsOpen(true);
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                <div className="relative w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Navigation buttons */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                  
                  {/* Close button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                  
                  {/* Image counter */}
                  <div className="absolute top-4 left-4">
                    <span className="text-white bg-black/50 px-3 py-1 rounded text-sm">
                      {selectedImage + 1} / {images.length}
                    </span>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;