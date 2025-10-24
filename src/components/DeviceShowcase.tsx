import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DeviceShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const devices = [
    {
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&h=600&fit=crop&q=80",
      title: "Smartphone Repairs",
      description: "Expert screen replacements & battery fixes",
      delay: 0.1,
    },
    {
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=600&fit=crop&q=80",
      title: "Smartwatch Support",
      description: "Setup, sync & troubleshooting services",
      delay: 0.2,
    },
    {
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=600&fit=crop&q=80",
      title: "Mobile Device Services",
      description: "All models supported with quality parts",
      delay: 0.3,
    },
    {
      image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500&h=600&fit=crop&q=80",
      title: "Tablet Repairs",
      description: "All tablet brands and models supported",
      delay: 0.4,
    },
    {
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=600&fit=crop&q=80",
      title: "Laptop Support",
      description: "Hardware upgrades & software solutions",
      delay: 0.5,
    },
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=600&fit=crop&q=80",
      title: "Remote Assistance",
      description: "Video call support for all your devices",
      delay: 0.6,
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=600&fit=crop&q=80",
      title: "Computer Setup",
      description: "Complete system installation & configuration",
      delay: 0.7,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20 mb-4">
              Device Support
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              We Support
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {" "}All Your Devices
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From smartphones to laptops, we provide comprehensive repair and support services
            </p>
          </motion.div>

          {/* Device Grid - Image Layout Style */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Left Column - Large Card */}
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.9 }}
              animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ delay: 0.1, duration: 0.8, type: "spring", stiffness: 80 }}
              whileHover={{ scale: 1.02, y: -8, transition: { duration: 0.3 } }}
              className="lg:row-span-3 group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-[500px] lg:h-full overflow-hidden">
                <img
                  src={devices[0].image}
                  alt={devices[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {devices[0].title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {devices[0].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Middle Column - 3 Cards Stacked */}
            {devices.slice(1, 4).map((device, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.7, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -5, rotate: 1, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={device.image}
                    alt={device.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {device.title}
                    </h3>
                    <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {device.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Right Column - 3 Cards Stacked */}
            {devices.slice(4, 7).map((device, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -5, rotate: -1, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={device.image}
                    alt={device.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {device.title}
                    </h3>
                    <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {device.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ...removed bottom CTA... */}
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
