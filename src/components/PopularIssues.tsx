import { motion } from "framer-motion";
import { useState } from "react";

const PopularIssues = () => {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

  const issues = [
    "Cracked Screen",
    "Battery Drain",
    "Won't Turn On",
    "Water Damage",
    "Slow Performance",
    "Virus Removal",
    "Data Recovery",
    "WiFi Issues",
    "Sound Problems",
    "Charging Port",
    "Camera Issues",
    "Storage Full",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Common Issues We Fix</h2>
          <p className="text-xl text-muted-foreground">
            Select your problem to get started
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {issues.map((issue, index) => (
            <motion.button
              key={issue}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedIssue(issue)}
              className={`px-6 py-3 rounded-full font-medium transition-all relative overflow-hidden ${
                selectedIssue === issue
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  : "bg-card border-2 border-border hover:border-primary text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {selectedIssue === issue && (
                <motion.div
                  layoutId="ripple"
                  className="absolute inset-0 bg-white/20"
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{issue}</span>
            </motion.button>
          ))}
        </div>

        {selectedIssue && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <p className="text-lg text-muted-foreground mb-4">
              Selected: <span className="font-semibold text-primary">{selectedIssue}</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold shadow-lg"
            >
              Get Quote for {selectedIssue}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PopularIssues;
