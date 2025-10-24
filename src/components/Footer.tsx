import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Warranty & Returns", href: "/warranty" },
    { label: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">IX Support</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Fast repairs, secure remote help, and clear warranty — without manufacturer affiliation.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@ixsupport.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>1-800-IX-SUPPORT</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Independent Service Provider</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Get Support
                </a>
              </li>
              <li>
                <a href="/warranty" className="text-muted-foreground hover:text-primary transition-colors">
                  Warranty Info
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <div className="space-y-3">
              <div>
                <a 
                  href="/contact" 
                  className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Book Repair
                </a>
              </div>
              <div>
                <a 
                  href="/contact" 
                  className="inline-block border border-border px-4 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                >
                  Remote Support
                </a>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Fast quotes • Expert service<br />
                90-day warranty included
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold text-center text-foreground">
              ⚠️ INDEPENDENCE NOTICE: We are an independent repair & support provider, not affiliated with, endorsed by, or sponsored by any device manufacturer or brand. All trademarks are property of their respective owners.
            </p>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} IX Support. All rights reserved. Independent, reliable, and privacy-focused — your tech, your way.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
