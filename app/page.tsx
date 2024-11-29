"use client";

import { useState, useEffect } from "react";
import { Header } from "./Components/header";
import { Hero } from "./Components/hero";
import { Features } from "./Components/features";
import { HowItWorks } from "./Components/how-it-works";
import { Impact } from "./Components/impact";
import { Testimonials } from "./Components/testimonials";
import { Partners } from "./Components/partners";
import { Footer } from "./Components/footer";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-50"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Impact />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
