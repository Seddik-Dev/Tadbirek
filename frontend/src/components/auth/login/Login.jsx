import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/landing/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
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
              Bienvenue
            </h1>
            <p className="text-slate-600 text-center mb-8">
              Connectez-vous à votre compte Tadbirek
            </p>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Adresse email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input
                    type="email"
                    placeholder="vous@exemple.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <Link
                  to="#"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Mot de passe oublié ?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
              >
                Se connecter
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">ou</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-slate-600">
              Vous n'avez pas de compte?{" "}
              <Link
                to="/signup"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                S'inscrire
              </Link>
            </p>
          </div>

          {/* Footer Info */}
          <p className="text-center text-slate-600 text-sm mt-6">
            En vous connectant, vous acceptez nos conditions d'utilisation
          </p>
        </div>
      </div>
    </div>
  );
}
