import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 border-2">
            <Link to="/">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
                T
              </div>
              <span className="font-bold text-xl text-foreground">
                Tadbirek
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {}
          <div className="hidden md:flex gap-8">
            <a
              href="#features"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Fonctionnalités
            </a>
            <a
              href="#how-it-works"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Comment ça marche
            </a>
            <a
              href="#benefits"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Avantages
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-4">
            <Button variant="ghost" size="sm">
              <Link to="/login">Se connecter</Link>
            </Button>
            <Button size="sm" className="rounded-full">
              <Link to="/signup">Commencer gratuitement</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-slide-up">
            <a
              href="#features"
              className="block text-foreground/70 hover:text-foreground transition-colors"
            >
              Fonctionnalités
            </a>
            <a
              href="#how-it-works"
              className="block text-foreground/70 hover:text-foreground transition-colors"
            >
              Comment ça marche
            </a>
            <a
              href="#benefits"
              className="block text-foreground/70 hover:text-foreground transition-colors"
            >
              Avantages
            </a>
            <Button size="sm" className="w-full rounded-full">
              Commencer gratuitement
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
