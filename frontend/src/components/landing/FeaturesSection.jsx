import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Layout, MapPin } from "lucide-react";

const features = [
  {
    icon: PieChart,
    title: "Suivi clair des dépenses",
    description:
      "Visualise facilement où va ton argent avec des graphiques intuitifs et détaillés.",
  },
  {
    icon: Layout,
    title: "Budget simple et organisé",
    description:
      "Classe tes dépenses sans effort et reste dans le contrôle de ton budget.",
  },
  {
    icon: MapPin,
    title: "Pensé pour le Maroc",
    description:
      "Adapté au quotidien marocain avec les devises et les pratiques locales.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Fonctionnalités puissantes
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Tout ce dont tu as besoin pour gérer ton argent comme un pro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer animate-slide-up border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/60 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
