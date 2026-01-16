import React from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom"; // or use Next.js Link if using Next.js
import { Badge } from "@/components/ui/badge";

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Background elements matching your HeroSection */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
                T
              </div>
              <span className="font-bold text-xl text-foreground">
                Tadbirek
              </span>
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link to="/">
                <Home size={18} className="mr-2" />
                Retour à l'accueil
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Error badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            <Search size={14} className="mr-2" />
            Page introuvable
          </Badge>

          {/* Main error display */}
          <div className="mb-10">
            <h1 className="text-8xl sm:text-9xl font-bold text-primary mb-4 animate-pulse">
              404
            </h1>
            <div className="relative inline-block">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 relative z-10">
                Oups ! Cette page s'est égarée
              </h2>
              <div className="absolute -bottom-1 left-0 w-full h-2 bg-primary/20 rounded-full"></div>
            </div>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-6">
              Il semble que la page que vous recherchez ait pris une pause
              budgétaire. Peut-être qu'elle est en train de faire ses comptes ?
            </p>
          </div>

          {/* Illustration */}
          <div className="relative w-64 h-64 mx-auto mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-3xl transform -rotate-3"></div>
            <div className="absolute inset-4 bg-white/90 rounded-2xl flex flex-col items-center justify-center p-6 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Compass size={32} className="text-primary" />
              </div>
              <div className="text-sm text-foreground/70">
                <div className="font-semibold text-primary mb-1">
                  Page perdue
                </div>
                <div>Solde: 0 résultats</div>
              </div>
            </div>
          </div>

          {/* Suggested actions */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Essayez plutôt ces pages populaires :
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { name: "Accueil", path: "/", emoji: "🏠" },
                { name: "Fonctionnalités", path: "/#features", emoji: "✨" },
                {
                  name: "Comment ça marche",
                  path: "/#how-it-works",
                  emoji: "📱",
                },
                { name: "Avantages", path: "/#benefits", emoji: "💰" },
              ].map((item) => (
                <Button
                  key={item.name}
                  asChild
                  variant="outline"
                  className="h-auto py-4 hover:scale-105 transition-transform border-border/50"
                >
                  <Link to={item.path}>
                    <span className="text-2xl mb-2 block">{item.emoji}</span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Primary CTA */}
          <div className="space-y-6">
            <Button asChild size="lg" className="rounded-lg px-8 gap-2 group">
              <Link to="/">
                Retour à l'accueil
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </Button>

            <div className="text-sm text-foreground/50">
              <p>Vous pensez qu'il s'agit d'une erreur ?</p>
              <Button variant="link" className="text-primary">
                Contactez notre support
              </Button>
            </div>
          </div>

          {/* Fun fact */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="inline-flex items-center gap-2 text-foreground/40 text-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>
                Saviez-vous ? 94% des utilisateurs de Tadbirek voient leur
                budget s'améliorer en 30 jours
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer matching your theme */}
      <footer className="bg-muted/50 border-t border-border mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>
              © {new Date().getFullYear()} Tadbirek. Maîtrise ton argent,
              simplement.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-foreground/40">
                Error 404 • Page Not Found
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
