import React from 'react';
import { ORGANIZATION_NAME, EMAIL, PHONE } from '../constants';

const RefundPolicy: React.FC = () => {
  const primaryPhone = PHONE.split(',')[0].trim();
  const primaryPhoneTel = primaryPhone.replace(/[^0-9+]/g, '');

  return (
    <div className="pt-24 animate-fade-in min-h-screen bg-white dark:bg-black transition-colors duration-200">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-black dark:text-white">Refund Policy</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">1. General Policy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {ORGANIZATION_NAME} is a faith-based ministry organization that relies on the generous contributions of donors to fulfill our mission. All donations and contributions made through our website are considered final and non-refundable, as they are used immediately to support our ministry operations, programs, and outreach efforts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">2. Donation Refunds</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              While donations are generally non-refundable, we understand that mistakes can happen. Refund requests will be considered on a case-by-case basis under the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Accidental duplicate donations made within 24 hours</li>
              <li>Technical errors resulting in incorrect donation amounts</li>
              <li>Unauthorized transactions made using your payment method</li>
              <li>Donations made in error due to website malfunction</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Refund requests must be submitted within 30 days of the original donation date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">3. Processing Refunds</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If your refund request is approved, we will process the refund to the original payment method used for the donation. Please note:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Refunds may take 5-10 business days to appear in your account</li>
              <li>The refund will be processed in the same currency as the original donation</li>
              <li>Any processing fees charged by payment processors may not be refundable</li>
              <li>You will receive a confirmation email once the refund has been processed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">4. Recurring Donations</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For recurring donations (monthly, quarterly, or annual):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>You may cancel your recurring donation at any time by contacting us directly</li>
              <li>Cancellation will stop future donations but will not refund past donations</li>
              <li>Past donations are considered final and non-refundable unless they meet the criteria outlined in Section 2</li>
              <li>You will receive a confirmation email when your recurring donation is cancelled</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">5. Tax-Deductible Donations</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              If you receive a tax receipt for your donation and later request a refund, you may be required to return the tax receipt or notify the appropriate tax authorities. We recommend consulting with a tax professional if you have questions about the tax implications of a refunded donation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">6. How to Request a Refund</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To request a refund, please contact us using one of the following methods:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Email: <a href={`mailto:${EMAIL}`} className="text-black underline">{EMAIL}</a></li>
              <li>Phone: <a href={`tel:${primaryPhoneTel}`} className="text-black underline">{primaryPhone}</a></li>
              <li>Include the following information in your request:
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Your full name</li>
                  <li>Date of donation</li>
                  <li>Donation amount</li>
                  <li>Transaction ID or receipt number</li>
                  <li>Reason for refund request</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">7. Processing Time</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We will review your refund request within 5-7 business days. You will be notified via email of the decision. If approved, the refund will be processed within 5-10 business days, depending on your payment method and financial institution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">8. Disputes</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              If you are not satisfied with our refund decision, you may contact us to discuss your concerns. We are committed to resolving all matters fairly and in accordance with our mission and values.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">9. Changes to This Policy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to this page. We encourage you to review this policy periodically to stay informed about our refund practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">10. Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              If you have any questions about this Refund Policy, please contact us at <a href={`mailto:${EMAIL}`} className="text-black underline">{EMAIL}</a> or call us at <a href={`tel:${primaryPhoneTel}`} className="text-black underline">{primaryPhone}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;

