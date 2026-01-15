import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side: Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge
              variant="secondary"
              className="w-fit px-3 py-1 text-blue-700 bg-blue-100"
            >
              Nouveau au Maroc
            </Badge>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold leading-tight text-foreground text-balance">
                Gère tes finances
                <br />
                <span className="text-blue-600">simplement</span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-lg leading-relaxed">
                Tadbirek te permet de suivre tes dépenses, d'épargner
                intelligemment et de prendre le contrôle de ton argent en toute
                sécurité.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-lg px-8 gap-2 group hover:scale-105 transition-transform shadow-md bg-blue-600"
              >
                Commencer gratuitement
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col gap-3 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-primary flex-shrink-0" />
                <p className="text-sm text-foreground/70">
                  10,000+ utilisateurs actifs
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-primary flex-shrink-0" />
                <p className="text-sm text-foreground/70">
                  Banque cryptée et 100% sécurisée
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-primary flex-shrink-0" />
                <p className="text-sm text-foreground/70">
                  Aucune commission ni frais cachés
                </p>
              </div>
            </div>
          </div>

          {/* Right side: App mockup */}
          <div className="relative h-full min-h-96 flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-primary/10">
                {/* Phone notch */}
                <div className="bg-foreground h-8 rounded-b-3xl mx-auto w-40 flex items-center justify-center">
                  <div className="text-white text-xs font-semibold">9:41</div>
                </div>

                {/* App content */}
                <div className="bg-background p-6 space-y-6">
                  {/* Balance card */}
                  <div className="bg-gradient-to-br from-bg-black to-primary/80 rounded-2xl p-6 text-white space-y-4 bg-blue-600">
                    <p className="text-white/80 text-sm font-medium">
                      Solde disponible
                    </p>
                    <h2 className="text-4xl font-bold">4,250 DH</h2>
                    <div className="flex justify-between text-white/70 text-xs">
                      <span>**** **** **** 4829</span>
                      <span>12/28</span>
                    </div>
                  </div>

                  {/* Quick actions */}
                  <div className="grid grid-cols-3 gap-3">
                    <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-muted transition-colors">
                      <div className="w-10 h-10  rounded-lg flex items-center justify-center text-primary text-lg bg-blue-100">
                        ➕
                      </div>
                      <span className="text-xs text-foreground/70">
                        Virement
                      </span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-muted transition-colors">
                      <div className="w-10 h-10  rounded-lg flex items-center justify-center text-secondary text-lg bg-blue-100">
                        📊
                      </div>
                      <span className="text-xs text-foreground/70">
                        Statistiques
                      </span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-muted transition-colors">
                      <div className="w-10 h-10  rounded-lg flex items-center justify-center text-accent text-lg bg-blue-100">
                        ⚙️
                      </div>
                      <span className="text-xs text-foreground/70">
                        Paramètres
                      </span>
                    </button>
                  </div>

                  {/* Recent transactions */}
                  <div className="space-y-2">
                    <p className="text-xs text-foreground/60 font-medium">
                      TRANSACTIONS RÉCENTES
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-200 rounded-lg" />
                          <div>
                            <p className="text-sm font-medium">
                              Marjane Supermarché
                            </p>
                            <p className="text-xs text-foreground/60">
                              Aujourd'hui
                            </p>
                          </div>
                        </div>
                        <p className="text-sm font-semibold  text-red-500">
                          -250 DH
                        </p>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center  gap-3">
                          <div className="w-8 h-8 bg-green-200  rounded-lg" />
                          <div>
                            <p className="text-sm font-medium">
                              Salaire mensuel
                            </p>
                            <p className="text-xs text-foreground/60">Hier</p>
                          </div>
                        </div>
                        <p className="text-sm font-semibold  text-green-500">
                          +8,500 DH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
