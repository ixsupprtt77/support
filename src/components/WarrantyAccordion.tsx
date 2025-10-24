import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Lock, FileText } from "lucide-react";

const WarrantyAccordion = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Your Questions Answered</h2>
          <p className="text-xl text-muted-foreground">
            Transparency matters. Here's what you need to know.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="warranty" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="text-primary" size={20} />
                  </div>
                  <span className="font-semibold text-lg">Warranty & Coverage</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 text-muted-foreground">
                <p className="mb-3">
                  All repairs come with a <strong>90-day warranty</strong> covering parts and labor. 
                  If the same issue occurs within this period, we'll fix it free of charge.
                </p>
                <p className="mb-3">
                  <strong>What's covered:</strong> Screen replacements, battery installations, charging ports, 
                  camera modules, and software fixes.
                </p>
                <p>
                  <strong>What's not covered:</strong> Accidental damage after repair, liquid damage, 
                  or issues unrelated to the original repair.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="privacy" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Lock className="text-secondary" size={20} />
                  </div>
                  <span className="font-semibold text-lg">Privacy & Data Handling</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 text-muted-foreground">
                <p className="mb-3">
                  We take your privacy seriously. All devices are handled in a secure facility with 
                  strict access controls.
                </p>
                <p className="mb-3">
                  <strong>For remote support:</strong> Sessions are end-to-end encrypted. We never 
                  store screenshots or recordings unless explicitly requested for documentation.
                </p>
                <p>
                  <strong>For hardware repairs:</strong> We recommend backing up your data before 
                  service. We do not access personal files unless necessary for diagnostics (with your permission).
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="independence" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FileText className="text-accent" size={20} />
                  </div>
                  <span className="font-semibold text-lg">Independence & Compliance</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 text-muted-foreground">
                <p className="mb-3">
                  IX Support is an <strong>independent service provider</strong>. We are not affiliated 
                  with, endorsed by, or sponsored by any device manufacturer.
                </p>
                <p className="mb-3">
                  <strong>Quality parts:</strong> We use OEM-equivalent or manufacturer-approved parts 
                  whenever possible. All parts meet industry quality standards.
                </p>
                <p>
                  <strong>Compliance:</strong> We follow all local consumer protection laws and maintain 
                  business liability insurance for your peace of mind.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WarrantyAccordion;
