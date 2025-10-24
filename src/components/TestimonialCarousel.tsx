import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "Fixed my laptop screen in under 2 hours. Professional, fast, and affordable. Highly recommend!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Remote Worker",
      content: "The remote support team helped me set up cloud storage and fix my VPN issues in minutes. Lifesavers!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Student",
      content: "Recovered all my thesis data from a broken hard drive. Can't thank them enough for the quick turnaround.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Photographer",
      content: "Battery replacement was seamless. My phone works like new again. Clear pricing and warranty too.",
      rating: 5,
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground">
            Real experiences from real people
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="fill-primary text-primary" size={24} />
                  ))}
                </div>
                
                <p className="text-lg text-muted-foreground mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div>
                  <p className="font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full"
            >
              <a href="/contact"><ChevronLeft size={20} /></a>
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full"
            >
              <a href="/contact"><ChevronRight size={20} /></a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
