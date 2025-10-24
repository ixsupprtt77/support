import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Smartphone, Wifi, Shield, Cloud, Wrench, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  {
    icon: Smartphone,
    title: "Mobile Devices",
    description: "Smartphones & tablets repair and troubleshooting",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Wifi,
    title: "Network & Internet",
    description: "WiFi setup, router configuration, and connectivity issues",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Data Recovery",
    description: "Secure data backup and recovery solutions",
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: Cloud,
    title: "Cloud Support",
    description: "Remote cloud services and setup assistance",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Wrench,
    title: "Hardware Fixes",
    description: "Component replacement and upgrades",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: HelpCircle,
    title: "Tech Guidance",
    description: "One-on-one tech support and training",
    gradient: "from-pink-500 to-rose-500"
  }
];

const SupportCategories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete Support
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From quick fixes to complex repairs, we've got you covered across all device types
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -15, scale: 1.05, transition: { duration: 0.3 } }}
              className="group perspective-1000"
            >
              <Card className="p-8 h-full relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Floating Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} mb-6 relative z-10`}
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon className="text-white" size={32} />
                </motion.div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors relative z-10">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground relative z-10">
                  {category.description}
                </p>

                {/* Decorative Element */}
                <motion.div
                  className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportCategories;
