"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { UserPlus, FileText, HandHeart, Rocket } from "lucide-react";

const steps = [
  {
    title: "Register",
    description: "Create a secure digital identity on the RefAid platform.",
    icon: UserPlus,
  },
  {
    title: "Post Needs",
    description: "Share your specific needs or skills with the community.",
    icon: FileText,
  },
  {
    title: "Receive Support",
    description: "Connect with donors or employers who can help.",
    icon: HandHeart,
  },
  {
    title: "Build Independence",
    description: "Use the resources and opportunities to establish a new life.",
    icon: Rocket,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="dark:bg-gray-700">
                <CardHeader className="flex items-center text-gray-800 dark:text-white">
                  <step.icon className="w-6 h-6 mr-2 text-green-500 dark:text-green-400" />
                  {step.title}
                </CardHeader>
                <CardBody>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </CardBody>
                <div className="p-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
