"use client";

import React from "react";
import { Smile, Eye, Hand } from "lucide-react";

const benefits = [
  {
    icon: Smile,
    title: "Moins de stress",
    description: "à la fin du mois",
  },
  {
    icon: Eye,
    title: "Meilleure visibilité",
    description: "financière",
  },
  {
    icon: Hand,
    title: "Plus de contrôle",
    description: "sur ton argent",
  },
];

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Les avantages Tadbirek
          </h2>
          <p className="text-lg text-foreground/60">
            Ce que tu gagneras en utilisant Tadbirek
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground/60 text-lg">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
