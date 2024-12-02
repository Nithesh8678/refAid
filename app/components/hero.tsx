"use client";

import { ConnectButton } from "./wallet/connect-button";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-800 dark:to-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Empowering Refugees, One Block at a Time
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            RefAid connects donors and refugees through blockchain, ensuring
            transparency, dignity, and efficiency in aid distribution.
          </p>
          <ConnectButton />
        </div>
      </div>
    </section>
  );
} 