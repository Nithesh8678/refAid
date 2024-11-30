"use client";

import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { HowItWorks } from "./components/how-it-works";
import { Impact } from "./components/impact";
import { Testimonials } from "./components/testimonials";
import { Partners } from "./components/partners";
import { Footer } from "./components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
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
