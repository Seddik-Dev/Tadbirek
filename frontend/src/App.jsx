import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/landing/Navbar";
import { Footer } from "./components/landing/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
