import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-3 text-primary">Our Commitment to Your Privacy</h2>
                <p className="text-muted-foreground text-lg">
                  At IX Support, we respect your privacy and are committed to protecting your personal information. 
                  This policy explains how we collect, use, and safeguard your data when you use our repair and 
                  support services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information necessary to provide repair and support services effectively:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-blue-600 mb-2">Personal Information</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Full name and contact details</li>
                      <li>• Email address and phone number</li>
                      <li>• Billing and shipping address</li>
                      <li>• Emergency contact information</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-green-600 mb-2">Device Information</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Make, model, and serial numbers</li>
                      <li>• IMEI and device identifiers</li>
                      <li>• Issue descriptions and symptoms</li>
                      <li>• Device condition and photos</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-purple-600 mb-2">Service Data</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Repair history and service notes</li>
                      <li>• Diagnostic logs and test results</li>
                      <li>• Parts used and warranty information</li>
                      <li>• Service ratings and feedback</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-orange-600 mb-2">Technical Data</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Remote support session logs</li>
                      <li>• Screen recordings (with consent)</li>
                      <li>• System diagnostics and error logs</li>
                      <li>• Website usage and analytics</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold mb-2">Primary Service Purposes</h3>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Provide repair and technical support services</li>
                      <li>Communicate about service status and updates</li>
                      <li>Process payments and manage billing</li>
                      <li>Fulfill warranty obligations and claims</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className="font-semibold mb-2">Operational Purposes</h3>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Improve service quality and customer experience</li>
                      <li>Maintain accurate service records</li>
                      <li>Comply with legal and regulatory requirements</li>
                      <li>Resolve disputes and provide customer support</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold mb-2">Marketing & Communication (Optional)</h3>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Send service updates and important notifications</li>
                      <li>Share promotional offers and new services (with consent)</li>
                      <li>Conduct customer satisfaction surveys</li>
                      <li>Provide relevant tips and device care information</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Data Sharing & Disclosure</h2>
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-4">
                  <p className="font-semibold text-accent mb-2">We Never Sell Your Personal Information</p>
                  <p className="text-muted-foreground text-sm">
                    Your privacy is not for sale. We do not sell, rent, or trade your personal information 
                    to third parties for their marketing purposes.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold mb-3">We may share data only in these limited circumstances:</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Service Providers</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Payment processors</li>
                        <li>• Shipping and logistics</li>
                        <li>• Cloud infrastructure</li>
                        <li>• Customer support tools</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Legal Requirements</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Court orders</li>
                        <li>• Government requests</li>
                        <li>• Legal compliance</li>
                        <li>• Fraud prevention</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Business Changes</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Mergers or acquisitions</li>
                        <li>• Asset transfers</li>
                        <li>• Business restructuring</li>
                        <li>• Bankruptcy proceedings</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We implement comprehensive security measures to protect your personal information:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                      <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">Technical Safeguards</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• AES-256 encryption for data at rest</li>
                        <li>• TLS 1.3 encryption for data in transit</li>
                        <li>• Multi-factor authentication</li>
                        <li>• Regular security audits and penetration testing</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Physical Security</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Secured repair facilities with access controls</li>
                        <li>• Locked storage for devices and data</li>
                        <li>• Surveillance and alarm systems</li>
                        <li>• Background-checked employees</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-muted/10 border border-muted/30 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Important Note:</strong> While we implement industry-leading security measures, 
                      no method of transmission over the internet or electronic storage is 100% secure. 
                      We continuously monitor and improve our security practices.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Your Privacy Rights</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    You have important rights regarding your personal information:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Access & Control</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <strong className="text-sm">Access:</strong>
                            <p className="text-sm text-muted-foreground">Request a copy of your personal information</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <strong className="text-sm">Correct:</strong>
                            <p className="text-sm text-muted-foreground">Update inaccurate or incomplete information</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <strong className="text-sm">Delete:</strong>
                            <p className="text-sm text-muted-foreground">Request deletion of your personal information</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">Communication & Data</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                          <div>
                            <strong className="text-sm">Opt-out:</strong>
                            <p className="text-sm text-muted-foreground">Unsubscribe from marketing communications</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                          <div>
                            <strong className="text-sm">Portability:</strong>
                            <p className="text-sm text-muted-foreground">Receive your data in a portable format</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                          <div>
                            <strong className="text-sm">Withdraw:</strong>
                            <p className="text-sm text-muted-foreground">Withdraw consent for data processing</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We retain personal information only as long as necessary for legitimate business purposes:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Service Records</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>7 years</strong>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        For warranty claims, legal compliance, and quality assurance
                      </p>
                    </div>
                    
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Payment Data</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>5 years</strong>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        For tax records and financial auditing requirements
                      </p>
                    </div>
                    
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Marketing Data</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Until opt-out</strong>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Deleted immediately upon unsubscribe request
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
                <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                  <h3 className="font-semibold text-destructive mb-2">Under 18 Protection</h3>
                  <p className="text-muted-foreground text-sm">
                    Our services are intended for adults (18+). We do not knowingly collect personal 
                    information from children under 18. If we discover we have collected such information, 
                    we will delete it immediately. Parents who believe their child has provided us with 
                    personal information should contact us immediately.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
                <p className="text-muted-foreground mb-4">
                  Your information may be transferred to and processed in countries outside your residence. 
                  We ensure appropriate safeguards are in place:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Adequacy decisions by regulatory authorities</li>
                  <li>Standard contractual clauses with service providers</li>
                  <li>Binding corporate rules and certification schemes</li>
                  <li>Your explicit consent when required</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Contact Our Privacy Team</h2>
                <div className="bg-card border border-border rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    Have questions about your privacy or need to exercise your rights?
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Direct Contact</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Email:</strong> privacy@ixsupport.com<br />
                        <strong>Phone:</strong> 1-800-IX-SUPPORT<br />
                        <strong>Hours:</strong> Mon-Fri, 9am-6pm EST
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Response Time</h4>
                      <p className="text-sm text-muted-foreground">
                        We respond to privacy requests within <strong>30 days</strong> of receipt. 
                        Complex requests may require additional time, and we'll keep you informed.
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

export default Privacy;
