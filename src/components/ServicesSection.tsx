import { Smartphone, Laptop, Cloud, HardDrive, Headset, Wrench } from "lucide-react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Smartphone & Tablet",
      description: "Screen repairs, battery replacement, and diagnostics for all mobile devices.",
    },
    {
      icon: Laptop,
      title: "Laptop & Desktop",
      description: "Hardware upgrades, component replacement, and system optimization.",
    },
    {
      icon: Cloud,
      title: "Cloud Support",
      description: "Cloud storage setup, backup solutions, sync issues, and file recovery.",
    },
    {
      icon: HardDrive,
      title: "Data & Software",
      description: "Data recovery, OS installation, virus removal, and cloud migration.",
    },
    {
      icon: Headset,
      title: "Remote Support",
      description: "Live tech support via screen share for software, internet, and cloud issues.",
    },
    {
      icon: Wrench,
      title: "Refurbishment",
      description: "Professional cleaning, testing, and restoration of pre-owned devices.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Complete Device Care & Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From hardware fixes to remote troubleshooting, we've got every tech need covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
