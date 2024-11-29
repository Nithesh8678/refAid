'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: "UNHCR", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Red Cross", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Polygon", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Ethereum Foundation", logo: "/placeholder.svg?height=60&width=120" },
  { name: "World Food Programme", logo: "/placeholder.svg?height=60&width=120" },
  { name: "UNICEF", logo: "/placeholder.svg?height=60&width=120" }
]

export function Partners() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="max-w-full h-auto filter dark:invert"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

