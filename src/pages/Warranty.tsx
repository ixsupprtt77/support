import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Warranty = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Warranty & Returns</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              {/* Warranty Overview */}
              <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h2 className="text-3xl font-semibold mb-4 text-primary">90-Day Limited Warranty</h2>
                <p className="text-muted-foreground text-lg">
                  All repairs performed by IX Support include a comprehensive 90-day warranty covering 
                  parts and labor for the specific repair performed. This warranty ensures your peace 
                  of mind and demonstrates our confidence in our work quality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">What's Covered</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-green-600 mb-2">✓ Hardware Repairs</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Screen and display replacements</li>
                      <li>• Battery installations and power issues</li>
                      <li>• Camera and speaker replacements</li>
                      <li>• Charging port and connector repairs</li>
                      <li>• Button and switch replacements</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-green-600 mb-2">✓ Software Services</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Operating system troubleshooting</li>
                      <li>• Software diagnostics and fixes</li>
                      <li>• Performance optimization</li>
                      <li>• Virus and malware removal</li>
                      <li>• Data recovery attempts</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Warranty Exclusions</h2>
                <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                  <h3 className="font-semibold text-destructive mb-3">✗ Not Covered Under Warranty</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Physical Damage:</strong> New drops, impacts, or accidental damage after repair completion</li>
                    <li><strong>Liquid Damage:</strong> Water, spills, or moisture damage occurring after service</li>
                    <li><strong>User Modifications:</strong> Jailbreaking, rooting, custom firmware, or unauthorized repairs</li>
                    <li><strong>Third-Party Interference:</strong> Repairs or modifications by other service providers</li>
                    <li><strong>Normal Wear:</strong> Battery degradation, cosmetic wear, or age-related component failure</li>
                    <li><strong>Unrelated Issues:</strong> Problems not directly related to the original repair</li>
                    <li><strong>Software Updates:</strong> Issues caused by OS updates or app installations after service</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold mb-2">30-Day Satisfaction Guarantee</h3>
                    <p className="text-muted-foreground">
                      If you're not satisfied with our repair service, contact us within 30 days. 
                      We'll work to resolve the issue or provide a refund for qualifying situations.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Refund Conditions</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Original repair fails within warranty period</li>
                        <li>• Device not repaired as promised</li>
                        <li>• Service cancelled before completion</li>
                        <li>• Parts defective upon installation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Refund Process</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Contact customer service immediately</li>
                        <li>• Return device for inspection</li>
                        <li>• Refund processed within 5-7 business days</li>
                        <li>• Original parts may be reinstalled</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Device Collection Policy</h2>
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                  <p className="text-muted-foreground mb-3">
                    <strong>Important:</strong> Devices must be collected within 30 days of repair completion.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                    <li>Days 1-30: Free storage</li>
                    <li>Days 31-60: $5/day storage fee</li>
                    <li>After 60 days: Device may be disposed of or sold to recover costs</li>
                    <li>All storage fees must be paid before device release</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Making a Warranty Claim</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    To claim warranty service, you'll need:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-card border border-border rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-2">1</div>
                      <h4 className="font-semibold mb-1">Original Receipt</h4>
                      <p className="text-xs text-muted-foreground">Proof of service and warranty start date</p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-2">2</div>
                      <h4 className="font-semibold mb-1">Device & Issue</h4>
                      <p className="text-xs text-muted-foreground">Bring device with problem description</p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-2">3</div>
                      <h4 className="font-semibold mb-1">Contact Us</h4>
                      <p className="text-xs text-muted-foreground">Call or visit within warranty period</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Parts Quality Guarantee</h2>
                <p className="text-muted-foreground mb-4">
                  We use only high-quality replacement parts from trusted suppliers:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">OEM-Quality Parts</h4>
                      <p className="text-sm text-muted-foreground">Original Equipment Manufacturer specifications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Quality Tested</h4>
                      <p className="text-sm text-muted-foreground">All parts tested before installation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Compatibility Verified</h4>
                      <p className="text-sm text-muted-foreground">Ensured compatibility with your device model</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Performance Guaranteed</h4>
                      <p className="text-sm text-muted-foreground">Meet or exceed original specifications</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact for Warranty Service</h2>
                <div className="bg-card border border-border rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    Need warranty service or have questions about coverage?
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Customer Service</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Phone:</strong> 1-800-IX-SUPPORT<br />
                        <strong>Email:</strong> warranty@ixsupport.com<br />
                        <strong>Hours:</strong> Mon-Sat, 9am-7pm EST
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Online Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Submit warranty claims and track status through our customer portal or contact form.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Warranty;
