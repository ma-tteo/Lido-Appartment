import { Card, CardContent } from "@/components/ui/card";
import { 
  Waves, 
  TreePine, 
  Castle, 
  Mountain, 
  Camera, 
  Calendar,
  Wine,
  MapPin
} from "lucide-react";

const NearbyAttractions = () => {
  const attractions = [
    {
      icon: <Waves className="h-6 w-6" />,
      title: "Spiaggia & Lungomare",
      description: "Lunghi quasi 4 km di sabbia fine, mare pulito e poco profondo: perfetto per famiglie e bimbi. Riceve la Bandiera Blu e Verde per qualità e servizi. L'elegante lungomare alberato e pista ciclabile, parte del Corridoio Verde Adriatico, collega Tortoreto a paesi vicini come Alba Adriatica e Giulianova.",
      image: "/lovable-uploads/7d13597f-a72b-428d-a17d-bbc3f57b6a5a.png"
    },
    {
      icon: <Waves className="h-6 w-6" />,
      title: "Divertimento & Relax", 
      description: "Acquapark Onda Blu, scivoli, piscine con onde, aree gioco per tutte le età. Sport acquatici: kayak, wakeboard, surf, giri in barca. Spiagge attrezzate e libere.",
      image: "/lovable-uploads/ae8f14b2-86ae-40b1-9ac0-3558a0688045.png"
    },
    {
      icon: <Castle className="h-6 w-6" />,
      title: "Borgo medievale – Tortoreto Alto",
      description: "Storia vera: Torre dell'Orologio, chiese (Madonna della Misericordia del 1348, Sant'Agostino), belvedere con vista mozzafiato su mare e colline. Atmosfera unica: affreschi, archi antichi, suggestioni che spaccano.",
      image: "/lovable-uploads/aa652193-7622-4337-ac76-e4cb69b06413.png"
    },
    {
      icon: <Mountain className="h-6 w-6" />,
      title: "Natura & Trekking",
      description: "Gole del Salinello: pareti rocciose, cascate, sentieri immersi nella natura selvaggia. Riserva del Borsacchio: costa tranquilla, verde protetto, nidificazione tartarughe e uccelli. Montagna dei Fiori e Cascata della Morricana: montagna spettacolare, trekking invernale/estivo, panorami incredibili.",
      image: "/lovable-uploads/cfc52529-83c4-4f76-bc3b-2acd19e7ca98.png"
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Borghi & Cultura",
      description: "Civitella del Tronto: fortezza borbonica imponente e borgo storico, ~30 km. Atri: uno dei borghi più belli d'Italia, con centro medievale e paesaggi straordinari. Notaresco, Castelbasso: borghi unici, profumi locali, scorci autentici della vita abruzzese."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Eventi & Sagre",
      description: "Palio del Barone: rievocazione medievale ad agosto, costumi, giochi storici, festa pura. Sagre: prodotti tipici, sagra della vongola, aperitivi in spiaggia, serate con dj set."
    },
    {
      icon: <Wine className="h-6 w-6" />,
      title: "Enogastronomia & Strada del Vino", 
      description: "Passeggi nei vigneti della Val Vibrata (Alba Adriatica, Controguerra, Torano...), degustazioni nei locali, tradizione tremenda."
    }
  ];

  return (
    <section className="py-16 bg-gradient-shore">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-ocean mb-4">
              Cosa fare vicino a casa
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fatti un'idea rapida e hi-light deciso. Dico le fighe, senza sbrodoli.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="elegant-shadow hover-lift overflow-hidden">
                {attraction.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-ocean-blue/10 rounded-lg flex items-center justify-center text-ocean-blue">
                      {attraction.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-deep-ocean mb-3">
                        {attraction.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {attraction.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Summary */}
          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl p-8 elegant-shadow">
            <h3 className="text-2xl font-serif font-bold text-deep-ocean mb-6 text-center">
              In sintesi, a Tortoreto Lido trovi:
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ocean-blue flex-shrink-0" />
                <span>Spiaggia & passeggiate: sabbia fine + mare pulito + lungomare alberato + pista ciclabile fino a Giulianova</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ocean-blue flex-shrink-0" />
                <span>Divertimento in acqua: Onda Blu, sport acquatici, relax</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ocean-blue flex-shrink-0" />
                <span>Storia e panorami: Tortoreto Alto, Torre, chiese, belvedere</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ocean-blue flex-shrink-0" />
                <span>Natura & trekking: Gole del Salinello, Riserva del Borsacchio, Montagna dei Fiori</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ocean-blue flex-shrink-0" />
                <span>Borghi da esplorare: Civitella del Tronto (fortezza), Atri, Notaresco, Castelbasso</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ocean-blue flex-shrink-0" />
                <span>Eventi e sagre: Palio del Barone, sagre cibo, aperitivi e dj set in spiaggia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyAttractions;