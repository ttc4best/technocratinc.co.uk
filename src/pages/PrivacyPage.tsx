import Breadcrumbs from '../components/Breadcrumbs';

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="pt-24 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>

      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 space-y-8">

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Technocrat Inc ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Personal Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you contact us, request information about our services, or engage with us in any other way. This may include:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 ml-4">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Company name and position</li>
                    <li>Project requirements and preferences</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device. We may also collect information about your browsing behavior, such as pages viewed and links clicked.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-2">
                We use the information we collect in the following ways:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you information about our services</li>
                <li>To improve our website and services</li>
                <li>To personalize your experience</li>
                <li>To analyze website usage and trends</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">4. Disclosure of Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-2">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, sale, or acquisition</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or to protect our rights</li>
                <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">5. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">6. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">7. Your Rights (GDPR)</h2>
              <p className="text-gray-300 leading-relaxed mb-2">
                If you are a resident of the European Economic Area (EEA), you have certain data protection rights:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>The right to access, update, or delete your personal information</li>
                <li>The right to rectification of inaccurate information</li>
                <li>The right to object to processing of your personal information</li>
                <li>The right to restriction of processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">9. Third-Party Links</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">10. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">12. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> <a href="mailto:hire@technocratinc.co.uk" className="text-purple-400 hover:text-purple-300">hire@technocratinc.co.uk</a></p>
                <p><strong>Phone:</strong> <a href="tel:+447778798248" className="text-purple-400 hover:text-purple-300">07778 798248</a></p>
                <p><strong>Address:</strong> United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
