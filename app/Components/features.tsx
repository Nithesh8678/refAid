'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, DollarSign, Briefcase, Map } from 'lucide-react'

const features = [
  {
    title: "Digital Identity Wallets",
    description: "Secure and portable digital identities for refugees.",
    icon: Wallet
  },
  {
    title: "Transparent Donations",
    description: "Track your donations and see their impact in real-time.",
    icon: DollarSign
  },
  {
    title: "Job Matching",
    description: "Connect refugees with employment opportunities based on their skills.",
    icon: Briefcase
  },
  {
    title: "Resource Mapping",
    description: "Locate and access nearby aid resources and services.",
    icon: Map
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800 dark:text-white">
                    <feature.icon className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

