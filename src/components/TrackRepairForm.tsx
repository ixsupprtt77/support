import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Package } from "lucide-react";

const TrackRepairForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="track-repair" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Package className="text-white" size={32} />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-center mb-2">
              Track My Repair
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Enter your Job ID and email to check your repair status
            </p>

            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Job ID
                </label>
                <Input
                  placeholder="e.g., IX-2024-12345"
                  className="focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                size="lg"
              >
                Track Status
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TrackRepairForm;
