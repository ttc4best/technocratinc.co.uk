import Breadcrumbs from '../components/Breadcrumbs';

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="pt-24 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Terms of Service
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
              <h2 className="text-3xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Technocrat Inc ("Company", "we", "us", or "our") concerning your access to and use of our website and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">2. Services</h2>
              <p className="text-gray-300 leading-relaxed">
                Technocrat Inc provides digital technology services including but not limited to web development, mobile application development, cloud integration, AI services, data science, and SEO services. The specific scope, deliverables, timeline, and pricing for any project will be outlined in a separate service agreement or statement of work.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">3. User Obligations</h2>
              <p className="text-gray-300 leading-relaxed mb-2">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly notify us of any unauthorized use of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Not interfere with or disrupt our services or servers</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">4. Intellectual Property Rights</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Our Intellectual Property</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Unless otherwise indicated, all content on our website and in our marketing materials, including text, graphics, logos, images, and software, is the property of Technocrat Inc and is protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Client Work Product</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Upon full payment, clients receive full ownership rights to the deliverables created specifically for their project, including source code, designs, and documentation, as outlined in the project agreement. We retain the right to use the work in our portfolio unless otherwise agreed.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">5. Payment Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-2">
                Payment terms will be specified in your project agreement. Generally:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Payment schedules are typically milestone-based</li>
                <li>Invoices are due within 14 days unless otherwise specified</li>
                <li>Late payments may incur interest charges</li>
                <li>Work may be paused if payments are significantly overdue</li>
                <li>All fees are in British Pounds (GBP) unless otherwise stated</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">6. Project Scope and Changes</h2>
              <p className="text-gray-300 leading-relaxed">
                The scope of work for each project is defined in a separate agreement. Any changes to the scope ("scope creep") will be documented and may result in additional fees and timeline adjustments. We will notify you of any proposed changes before proceeding.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">7. Warranties and Disclaimers</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Our Warranties</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We warrant that services will be performed in a professional manner consistent with industry standards. We typically provide a 30-90 day warranty period for bug fixes on delivered work.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Disclaimer</h3>
                  <p className="text-gray-300 leading-relaxed">
                    EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL TECHNOCRAT INC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICES IN QUESTION.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">9. Confidentiality</h2>
              <p className="text-gray-300 leading-relaxed">
                Both parties agree to maintain confidentiality of any proprietary or confidential information disclosed during the course of the project. This obligation continues for a period of 2 years after project completion or as otherwise specified in a separate non-disclosure agreement.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">10. Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-2">
                Either party may terminate a project under the following conditions:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>For convenience with 14 days written notice</li>
                <li>Immediately for material breach that remains uncured after 7 days notice</li>
                <li>Upon termination, client pays for work completed to date</li>
                <li>We may retain any prepayments as outlined in the project agreement</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">11. Indemnification</h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to indemnify and hold harmless Technocrat Inc from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">12. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">13. Modifications to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">14. Force Majeure</h2>
              <p className="text-gray-300 leading-relaxed">
                Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including acts of God, war, terrorism, riots, pandemic, fire, flood, or governmental actions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">15. Severability</h2>
              <p className="text-gray-300 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">16. Entire Agreement</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms, together with any project-specific agreements, constitute the entire agreement between you and Technocrat Inc regarding the use of our services and supersede all prior agreements and understandings.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">17. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
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
