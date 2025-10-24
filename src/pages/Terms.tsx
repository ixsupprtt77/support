import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-3 text-primary">Agreement Overview</h2>
                <p className="text-muted-foreground text-lg">
                  These Terms of Service govern your use of IX Support's repair and technical support services. 
                  By using our services, you agree to these terms. Please read them carefully before proceeding 
                  with any service request.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Service Scope & Independence</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    IX Support provides independent device repair, remote technical support, data recovery, 
                    and related services. We specialize in:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Hardware Services</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Screen and display repairs</li>
                        <li>• Battery replacements</li>
                        <li>• Component repairs and replacements</li>
                        <li>• Water damage restoration</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Software Services</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Remote technical support</li>
                        <li>• Data recovery and migration</li>
                        <li>• Software troubleshooting</li>
                        <li>• Performance optimization</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                    <p className="text-muted-foreground text-sm">
                      <strong>Service Standard:</strong> All services are provided "as is" with professional 
                      care and skill, backed by our 90-day warranty on completed repairs.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Quotes, Pricing & Payment</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Pricing Policy</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span className="text-sm">All quotes are estimates based on initial diagnostics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span className="text-sm">Final costs may change upon full device inspection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span className="text-sm">You'll be notified of any price changes before work proceeds</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span className="text-sm">Diagnostic fees disclosed upfront and may apply</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">Payment Terms</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                          <span className="text-sm">Payment required before device release</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                          <span className="text-sm">Multiple payment methods accepted</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                          <span className="text-sm">Payment plans available for major repairs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                          <span className="text-sm">All transactions securely processed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Customer Responsibilities</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    To ensure the best service experience, customers agree to:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                      <h3 className="font-semibold text-destructive mb-2">⚠️ Critical Requirements</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li><strong>Data Backup:</strong> You must backup your data before service. We are not responsible for data loss during repairs.</li>
                        <li><strong>Device Preparation:</strong> Remove passwords, PINs, locks, and disable Find My Device/Anti-theft features.</li>
                        <li><strong>Accurate Information:</strong> Provide truthful details about device issues, history, and previous repairs.</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <h3 className="font-semibold text-primary mb-2">📋 Service Requirements</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li><strong>Timely Collection:</strong> Pick up repaired devices within 30 days of completion.</li>
                        <li><strong>Payment:</strong> Pay in full before device release unless alternative arrangements are made.</li>
                        <li><strong>Cooperation:</strong> Work with our technicians to diagnose and resolve issues effectively.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-muted/10 border border-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Storage Policy</h3>
                    <p className="text-sm text-muted-foreground">
                      Devices not collected within 30 days incur storage fees. After 60 days, unclaimed 
                      devices may be disposed of or sold to recover costs. All storage fees must be paid 
                      before device release.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Warranty & Service Guarantee</h2>
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">90-Day Warranty Coverage</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      We provide comprehensive warranty coverage on parts and labor for all completed repairs.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-green-600">✓ Warranty Includes</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Defective parts or components</li>
                        <li>• Workmanship issues</li>
                        <li>• Repair-related malfunctions</li>
                        <li>• Installation problems</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-destructive">✗ Warranty Excludes</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• New physical or liquid damage</li>
                        <li>• Third-party modifications</li>
                        <li>• Normal wear and aging</li>
                        <li>• Unrelated device issues</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Liability Limitations</h2>
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold mb-2">Important Legal Notice</h3>
                  <p className="text-sm text-muted-foreground">
                    To the maximum extent permitted by law, IX Support's liability is limited as follows:
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-4 border-destructive pl-4">
                      <h4 className="font-semibold mb-2">We Are Not Liable For:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Data loss or corruption</li>
                        <li>• Lost profits or business interruption</li>
                        <li>• Consequential or indirect damages</li>
                        <li>• Delays due to parts availability</li>
                        <li>• Software compatibility issues</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Maximum Liability:</h4>
                      <p className="text-sm text-muted-foreground">
                        Our total liability for any claim is limited to the amount you paid for the 
                        specific service in question. This limitation applies regardless of the 
                        cause of action or theory of liability.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Independence Notice</h2>
                <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
                  <h3 className="font-bold text-accent mb-3">⚠️ IMPORTANT INDEPENDENCE DISCLOSURE</h3>
                  <p className="text-muted-foreground mb-3">
                    <strong>IX Support is an independent repair and support provider.</strong> We are NOT 
                    affiliated with, endorsed by, authorized by, or sponsored by Apple, Samsung, Google, 
                    Microsoft, or any other device manufacturer.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use of manufacturer names is for descriptive purposes only</li>
                    <li>• All trademarks are property of their respective owners</li>
                    <li>• Repairs may void manufacturer warranties</li>
                    <li>• We provide our own independent warranty coverage</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Cancellation & Refund Policy</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Before Work Starts</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Full refund available</strong>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Minus any diagnostic fees already incurred
                      </p>
                    </div>
                    
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Work in Progress</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Partial refund possible</strong>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        May incur restocking fees for ordered parts
                      </p>
                    </div>
                    
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Completed Repairs</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Case-by-case evaluation</strong>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Based on warranty terms and circumstances
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/10 border border-muted/30 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Remote Support:</strong> Sessions are non-refundable once started due to 
                      the immediate nature of the service provided.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Dispute Resolution</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold mb-2">Preferred Resolution Process</h3>
                    <ol className="text-sm text-muted-foreground space-y-1">
                      <li>1. Contact our customer service team directly</li>
                      <li>2. Allow 14 days for internal resolution attempts</li>
                      <li>3. Escalate to management if needed</li>
                      <li>4. Consider mediation through neutral third party</li>
                    </ol>
                  </div>
                  
                  <div className="bg-muted/10 border border-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Binding Arbitration</h3>
                    <p className="text-sm text-muted-foreground">
                      Any disputes that cannot be resolved through our customer service process will be 
                      resolved through binding arbitration in accordance with applicable local laws. 
                      By using our services, you waive the right to a jury trial or participation in 
                      class action lawsuits.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We reserve the right to modify these terms at any time to reflect changes in our 
                    services, legal requirements, or business practices.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">How You'll Be Notified</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Email to registered customers</li>
                        <li>• Website banner notifications</li>
                        <li>• Updated "Last modified" date</li>
                        <li>• Social media announcements</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Your Options</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Review changes within 30 days</li>
                        <li>• Continue using services (acceptance)</li>
                        <li>• Discontinue use if you disagree</li>
                        <li>• Contact us with questions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
                <div className="bg-card border border-border rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    Questions about these terms or need legal clarification?
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Legal Department</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Email:</strong> legal@ixsupport.com<br />
                        <strong>Phone:</strong> 1-800-IX-SUPPORT<br />
                        <strong>Subject Line:</strong> Terms of Service Inquiry
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Customer Service</h4>
                      <p className="text-sm text-muted-foreground">
                        For general service questions, contact our customer support team. 
                        They can help clarify how these terms apply to your specific situation.
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

export default Terms;
