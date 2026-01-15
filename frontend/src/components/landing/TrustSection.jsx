import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TrustSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-secondary/20 text-secondary hover:bg-secondary/30">
            Conçu au Maroc 🇲🇦
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pensé pour toi
          </h2>
          <p className="text-lg text-foreground/60">
            Une application simple, pensée pour le quotidien marocain.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Ahmed M.",
              role: "Marrakech",
              text: "Tadbirek m'a vraiment aidé à comprendre mes dépenses. Maintenant je sais où va mon argent !",
            },
            {
              name: "Fatima B.",
              role: "Casablanca",
              text: "L'application est si facile à utiliser. J'ai enfin un budget qui marche pour moi.",
            },
            {
              name: "Karim K.",
              role: "Rabat",
              text: "Je recommande Tadbirek à tous mes amis. C'est vraiment utile et gratuit !",
            },
            {
              name: "Leila T.",
              role: "Fès",
              text: "Avec Tadbirek, gérer mon argent n'a jamais été aussi simple. Merci !",
            },
          ].map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-slide-up border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <p className="text-foreground/80 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
