import React from 'react';
import { ORGANIZATION_NAME } from '../constants';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="pt-24 animate-fade-in min-h-screen bg-white">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">Terms & Conditions</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using the {ORGANIZATION_NAME} website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Permission is granted to temporarily access the materials on {ORGANIZATION_NAME}'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Donations and Contributions</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All donations and contributions made through this website are voluntary and non-refundable unless otherwise stated. By making a donation, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Your donation is a gift to {ORGANIZATION_NAME}</li>
              <li>Donations are used to support the ministry's mission and operations</li>
              <li>You will receive a receipt for tax purposes if applicable</li>
              <li>All donations are final unless a refund is explicitly requested and approved</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Privacy and Data Protection</h2>
            <p className="text-gray-600 leading-relaxed">
              Your privacy is important to us. We collect and use personal information in accordance with our Privacy Policy. By using this website, you consent to the collection and use of information as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property of {ORGANIZATION_NAME} or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The materials on {ORGANIZATION_NAME}'s website are provided on an 'as is' basis. {ORGANIZATION_NAME} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Limitations</h2>
            <p className="text-gray-600 leading-relaxed">
              In no event shall {ORGANIZATION_NAME} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {ORGANIZATION_NAME}'s website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Revisions and Errata</h2>
            <p className="text-gray-600 leading-relaxed">
              The materials appearing on {ORGANIZATION_NAME}'s website could include technical, typographical, or photographic errors. {ORGANIZATION_NAME} does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Links</h2>
            <p className="text-gray-600 leading-relaxed">
              {ORGANIZATION_NAME} has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by {ORGANIZATION_NAME} of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Modifications</h2>
            <p className="text-gray-600 leading-relaxed">
              {ORGANIZATION_NAME} may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms & Conditions, please contact us through our website or by using the contact information provided in the footer.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;


