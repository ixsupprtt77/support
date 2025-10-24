import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Users, Clock, Award } from "lucide-react";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ target, duration = 2 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const StatsSection = () => {
  const stats = [
    { icon: Users, value: 15000, suffix: "+", label: "Happy Customers", color: "text-primary" },
    { icon: TrendingUp, value: 98, suffix: "%", label: "Success Rate", color: "text-secondary" },
    { icon: Clock, value: 2, suffix: "hrs", label: "Avg Response Time", color: "text-primary" },
    { icon: Award, value: 50, suffix: "+", label: "Expert Technicians", color: "text-secondary" },
  ];

  return (
    <section className="pt-8 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-10 right-20 w-20 h-20 bg-secondary/20 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity 
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-muted-foreground">
            Numbers that speak for our excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -15, scale: 1.08, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-border relative overflow-hidden">
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-4 ${stat.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon size={32} />
                </motion.div>
                
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color} relative`}>
                  <AnimatedNumber target={stat.value} />
                  {stat.suffix}
                </div>
                
                <div className="text-sm text-muted-foreground font-medium relative">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
