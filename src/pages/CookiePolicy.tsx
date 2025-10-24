import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-3 text-primary">What Are Cookies?</h2>
                <p className="text-muted-foreground">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences, 
                  analyzing how you use our site, and enabling certain functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-green-600 mb-2">Essential Cookies</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Required for basic website functionality. These cannot be disabled.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Session management and user authentication</li>
                      <li>• Shopping cart and booking system functionality</li>
                      <li>• Security and fraud prevention</li>
                      <li>• Load balancing and site performance</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-blue-600 mb-2">Functional Cookies</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Remember your preferences to enhance your experience.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Language and region preferences</li>
                      <li>• Theme and display settings</li>
                      <li>• Recently viewed services</li>
                      <li>• Form data retention</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-orange-600 mb-2">Analytics Cookies</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Help us understand how visitors interact with our website.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Page views and user behavior tracking</li>
                      <li>• Performance monitoring and optimization</li>
                      <li>• Error reporting and debugging</li>
                      <li>• A/B testing and feature rollouts</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-purple-600 mb-2">Marketing Cookies</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Used to deliver relevant advertisements and track campaign effectiveness.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Targeted advertising and retargeting</li>
                      <li>• Social media integration</li>
                      <li>• Campaign performance measurement</li>
                      <li>• Cross-platform user tracking</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  We work with trusted third-party services that may place cookies on your device:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold mb-2">Analytics Services</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Google Analytics</li>
                      <li>• Hotjar or similar heatmap tools</li>
                      <li>• Performance monitoring services</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className="font-semibold mb-2">Service Providers</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Payment processors (Stripe, PayPal)</li>
                      <li>• Live chat and support tools</li>
                      <li>• Email marketing platforms</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold mb-2">Social Media</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Facebook Pixel</li>
                      <li>• Google Ads conversion tracking</li>
                      <li>• Social sharing buttons</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-muted pl-4">
                    <h3 className="font-semibold mb-2">Content Delivery</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• CDN providers</li>
                      <li>• Font and asset hosting</li>
                      <li>• Video streaming services</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Cookie Consent & Control</h2>
                
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 mb-4">
                  <h3 className="font-semibold mb-3">Your Consent Choices</h3>
                  <p className="text-muted-foreground mb-3">
                    When you first visit our site, you'll see a cookie banner allowing you to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Accept all cookies for the full experience</li>
                    <li>Reject non-essential cookies (analytics and marketing)</li>
                    <li>Customize your preferences by cookie category</li>
                    <li>Learn more about each type of cookie we use</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Browser Controls</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      You can control cookies through your browser settings:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Block all cookies (may break functionality)</li>
                      <li>• Block third-party cookies only</li>
                      <li>• Clear cookies and browsing data</li>
                      <li>• Set preferences for specific sites</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">Opt-Out Tools</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Additional tools to control tracking:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Google Analytics opt-out browser add-on</li>
                      <li>• Network Advertising Initiative opt-out</li>
                      <li>• Digital Advertising Alliance opt-out</li>
                      <li>• Browser "Do Not Track" settings</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Cookie Retention</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Session Cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Temporary cookies that expire when you close your browser. Used for essential 
                        functionality like maintaining your login status during a visit.
                      </p>
                    </div>
                    
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Persistent Cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Stored on your device for a set period (typically 30 days to 2 years). 
                        Used for preferences, analytics, and marketing purposes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/10 border border-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Automatic Cleanup</h3>
                    <p className="text-sm text-muted-foreground">
                      We regularly review and clean up unnecessary cookies. Most cookies expire 
                      automatically after their intended purpose is fulfilled or after a maximum 
                      of 24 months.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Impact of Disabling Cookies</h2>
                <div className="space-y-4">
                  <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                    <h3 className="font-semibold text-destructive mb-2">Limited Functionality</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Disabling cookies may affect your experience:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• You may need to re-enter information on each visit</li>
                      <li>• Personalized features won't work properly</li>
                      <li>• Some website functions may be unavailable</li>
                      <li>• You may see less relevant content and advertisements</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <h3 className="font-semibold text-primary mb-2">Alternative Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      We strive to provide core functionality even with limited cookies. Essential 
                      services like booking repairs and accessing customer support will remain available.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
                <p className="text-muted-foreground mb-4">
                  We may update this Cookie Policy periodically to reflect changes in our practices, 
                  technology, or legal requirements. We'll notify you of significant changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Updating the "Last updated" date at the top of this policy</li>
                  <li>Displaying a notice on our website</li>
                  <li>Sending an email to registered customers (for major changes)</li>
                  <li>Requesting fresh consent when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <div className="bg-card border border-border rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    Questions about our use of cookies or need help managing your preferences?
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Privacy Team</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Email:</strong> privacy@ixsupport.com<br />
                        <strong>Phone:</strong> 1-800-IX-SUPPORT<br />
                        <strong>Subject:</strong> Cookie Policy Inquiry
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Cookie Preferences</h4>
                      <p className="text-sm text-muted-foreground">
                        You can update your cookie preferences at any time by clicking the 
                        "Cookie Settings" link in our website footer.
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

export default CookiePolicy;