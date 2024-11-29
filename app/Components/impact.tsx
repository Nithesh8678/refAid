"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Users, DollarSign, Briefcase } from "lucide-react";

const impactData = [
  {
    title: "Lives Impacted",
    value: "10,000+",
    icon: Users,
  },
  {
    title: "Donations Raised",
    value: "$5M+",
    icon: DollarSign,
  },
  {
    title: "Jobs Matched",
    value: "2,500+",
    icon: Briefcase,
  },
];

export function Impact() {
  return (
    <section
      id="impact"
      className="py-20 bg-blue-600 dark:bg-blue-800 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400">
                <CardHeader>
                  <CardBody className="flex items-center justify-center">
                    <item.icon className="w-8 h-8 mr-2" />
                    {item.title}
                  </CardBody>
                </CardHeader>
                <CardBody>
                  <p className="text-4xl font-bold text-center">{item.value}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
