import React from 'react';
import { ORGANIZATION_NAME, EMAIL } from '../constants';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 animate-fade-in min-h-screen bg-white dark:bg-black transition-colors duration-200">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-black dark:text-white">Privacy Policy</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">1. Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {ORGANIZATION_NAME} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the site includes:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Personal Data</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Personally identifiable information, such as your name, email address, phone number, and mailing address, that you voluntarily give to us when you make a donation or contact us.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Derivative Data</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Information our servers automatically collect when you access the site, such as your IP address, browser type, operating system, access times, and the pages you have viewed.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Financial Data</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you make a donation. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">3. Use of Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Process your donations and send you receipts</li>
              <li>Send you newsletters, updates, and other communications</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">4. Disclosure of Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">By Law or to Protect Rights</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Third-Party Service Providers</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, and customer service.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ministry Partners</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We may share your information with trusted ministry partners who assist us in operating our website, conducting our ministry, or serving you, so long as those parties agree to keep this information confidential.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">5. Security of Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">6. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>The right to access – You have the right to request copies of your personal data</li>
              <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate</li>
              <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions</li>
              <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data</li>
              <li>The right to object to processing – You have the right to object to our processing of your personal data</li>
              <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We may use cookies, web beacons, tracking pixels, and other tracking technologies on the site to help customize the site and improve your experience. When you access the site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">8. Children's Privacy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">10. Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at <a href={`mailto:${EMAIL}`} className="text-black underline">{EMAIL}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

