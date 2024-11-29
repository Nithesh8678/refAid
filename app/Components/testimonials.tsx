'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah M.",
    role: "Refugee",
    content: "RefAid helped me find a job and rebuild my life in a new country. I'm grateful for the support and opportunities it provided.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "John D.",
    role: "Donor",
    content: "I love how transparent RefAid is. I can see exactly how my donations are making a difference in people's lives.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Emma L.",
    role: "NGO Partner",
    content: "RefAid has revolutionized how we distribute aid. It's more efficient and dignified for the refugees we serve.",
    avatar: "/placeholder.svg?height=40&width=40"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Stories of Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="dark:bg-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Avatar className="mr-2">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

