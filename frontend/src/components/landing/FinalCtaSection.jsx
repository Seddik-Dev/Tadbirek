import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 animate-slide-up">
          Commence à mieux gérer ton argent dès aujourd'hui
        </h2>

        <p
          className="text-xl text-primary-foreground/80 mb-8 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Rejoins des milliers de marocains qui utilisent Tadbirek
        </p>

        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Button
            size="lg"
            className="rounded-full px-8 gap-2 group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Télécharger l'app
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
