import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Users, Award, Zap, Monitor, Smartphone, Laptop, CheckCircle } from "lucide-react";
import { useState } from "react";

const StatCard = ({ icon: Icon, number, label, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon className="text-primary" size={24} />
        <span className="text-2xl font-bold text-foreground">{number}</span>
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
};

const ServiceIcon = ({ icon: Icon, label, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center gap-2 p-4 bg-card/60 rounded-lg border border-border/40 hover:bg-card/80 transition-colors"
    >
      <Icon className="text-primary" size={32} />
      <span className="text-xs font-medium text-center">{label}</span>
    </motion.div>
  );
};

const Hero = () => {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <section className="relative overflow-hidden pt-10 pb-0 bg-gradient-to-br from-background via-secondary/5 to-background">
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto pt-8 lg:pt-12 pb-16">
          
          {/* Bento Box / Card Grid Layout */}
          <div className="grid lg:grid-cols-6 gap-4">
            
            {/* Main Headline Card - Spans 4 columns, 3 rows */}
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="lg:col-span-4 lg:row-span-3 bg-gradient-to-br from-primary/10 via-card to-secondary/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-border/50 flex flex-col justify-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-sm font-medium text-primary border border-primary/30 mb-6 w-fit">
                <Zap size={16} />
                Professional Device Support
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Trusted{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                   Support
                </span>
                <br />
                Partner
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Expert repairs, remote troubleshooting, and comprehensive support for all your devices. Fast, reliable, and transparent.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg text-lg px-8 py-6 rounded-xl"
                  asChild
                >
                  <a href="/contact">Get Started</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-xl border-2"
                  asChild
                >
                  <a href="/contact">Learn More</a>
                </Button>
              </div>
            </motion.div>

            {/* Stats Card 1 - Top Right */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
              className="lg:col-span-2 lg:row-span-2 bg-card/80 backdrop-blur-sm rounded-3xl p-6 border border-border/50 flex flex-col justify-center items-center text-center hover:shadow-xl transition-shadow"
            >
              <Users className="text-primary mb-4" size={48} />
              <p className="text-4xl font-bold mb-2">120K+</p>
              <p className="text-muted-foreground">Active Monthly Users</p>
            </motion.div>

            {/* Image Card - Horizontal Rectangle */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 80 }}
              whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
              className="lg:col-span-2 lg:row-span-2 bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop&q=80" 
                alt="Professional Tech Support" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-4 left-4 right-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-white">Live Support Available</span>
                </div>
                <div className="flex gap-2">
                  <ServiceIcon icon={Smartphone} label="Mobile" delay={1} />
                  <ServiceIcon icon={Laptop} label="Laptop" delay={1.1} />
                  <ServiceIcon icon={Monitor} label="Desktop" delay={1.2} />
                </div>
              </motion.div>
            </motion.div>

            {/* Feature Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -80, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.08, x: 10, transition: { duration: 0.3 } }}
              className="lg:col-span-2 lg:row-span-1 bg-card/80 backdrop-blur-sm rounded-3xl p-6 border border-border/50 flex items-center gap-4 hover:shadow-xl transition-shadow"
            >
              <div className="p-3 bg-green-500/10 rounded-xl">
                <CheckCircle className="text-green-500" size={28} />
              </div>
              <div>
                <h3 className="font-bold mb-1">24/7 Available</h3>
                <p className="text-sm text-muted-foreground">Round-the-clock support</p>
              </div>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.08, x: -10, transition: { duration: 0.3 } }}
              className="lg:col-span-2 lg:row-span-1 bg-card/80 backdrop-blur-sm rounded-3xl p-6 border border-border/50 flex items-center gap-4 hover:shadow-xl transition-shadow"
            >
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <CheckCircle className="text-blue-500" size={28} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Fast Repairs</h3>
                <p className="text-sm text-muted-foreground">Most within 24 hours</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
