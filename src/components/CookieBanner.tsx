import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-card border-2 border-primary/20 rounded-lg shadow-2xl p-6">
            <button
              onClick={handleDecline}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
            >
              <X size={20} />
            </button>
            
            <h3 className="font-semibold text-lg mb-2">Cookie Notice</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.{" "}
              <a href="/cookies" className="text-primary hover:underline">
                Learn more
              </a>
            </p>
            
            <div className="flex gap-2">
              <Button onClick={handleAccept} size="sm" className="flex-1">
                Accept
              </Button>
              <Button onClick={handleDecline} variant="outline" size="sm" className="flex-1">
                Decline
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
