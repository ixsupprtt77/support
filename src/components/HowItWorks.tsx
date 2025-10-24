import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, Calendar, Wrench, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Describe Your Issue",
      description: "Tell us what's wrong with your device or what support you need.",
    },
    {
      icon: Calendar,
      title: "Get a Quote & Book",
      description: "Receive an instant estimate and schedule your repair or remote session.",
    },
    {
      icon: Wrench,
      title: "We Fix or Guide You",
      description: "Drop off your device or connect remotely for live tech support.",
    },
    {
      icon: CheckCircle,
      title: "Back to Working",
      description: "Pick up your repaired device or resolve your issue on the spot.",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section id="how-it-works" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Simple, fast, and transparent from start to finish.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <step.icon className="text-white" size={32} />
                </motion.div>
                <div className="text-2xl font-bold text-primary mb-2">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
