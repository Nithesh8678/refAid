"use client";

import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";

export function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-800 dark:to-green-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Empowering Refugees, One Block at a Time
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            RefAid connects donors and refugees through blockchain, ensuring
            transparency, dignity, and efficiency in aid distribution.
          </p>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:text-white"
          >
            Join Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
