import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, User, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/landing/Navbar";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log("Signup attempt with:", formData);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-slate-900 text-center mb-2">
              Créer un compte
            </h1>
            <p className="text-slate-600 text-center mb-8">
              Rejoignez Tadbirek et gérez vos finances
            </p>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Nom complet
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Votre nom"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Adresse email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="vous@exemple.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Confirmer le mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-5 h-5 border-slate-300 rounded text-blue-600 focus:ring-blue-500 mt-0.5"
                  required
                />
                <label htmlFor="terms" className="text-sm text-slate-600">
                  J'accepte les{" "}
                  <Link
                    to="#"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    conditions d'utilisation
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
              >
                Créer mon compte
              </Button>
            </form>

            {/* Security Info */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700">
                Vos données sont sécurisées et cryptées
              </p>
            </div>

            {/* Login Link */}
            <p className="text-center text-slate-600 text-sm mt-6">
              Vous avez déjà un compte?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
