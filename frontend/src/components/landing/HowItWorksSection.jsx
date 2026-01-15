import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Plus,
    title: "Ajoute tes dépenses",
    description:
      "Ajoute tes dépenses en quelques secondes directement depuis ton téléphone.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Organisation automatique",
    description:
      "L'application les organise automatiquement par catégories intelligentes.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Analyse et contrôle",
    description:
      "Analyse tes dépenses et prends le contrôle de ton argent avec des insights.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-700">
            Comment ça marche
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Trois étapes simples
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Commence à gérer ton budget en moins d'une minute
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector lines (hidden on mobile) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Card className="h-full border-border/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                          {step.number}
                        </div>
                      </div>
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/60 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
