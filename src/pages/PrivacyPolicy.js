import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <ScrollToTop>
            <Header />
            <div className="container mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

                <p>At PrintingAdil, we take the protection of your personal data seriously. This Privacy Policy outlines how we collect, use, and protect your information in accordance with the General Data Protection Regulation (GDPR) and Austrian privacy laws.</p>

                <h2 className="text-2xl font-bold mt-6">1. Data Controller</h2>
                <p>The data controller responsible for the processing of your personal data is [Company Name], located at [Address], Austria. You can contact us at [Email] or [Phone Number] for any questions regarding data protection.</p>

                <h2 className="text-2xl font-bold mt-6">2. Data Collection</h2>
                <p>We collect personal data that you provide directly, such as your name, address, email, and payment information when placing an order. Additionally, we may collect data automatically through cookies and similar tracking technologies when you visit our website.</p>

                <h2 className="text-2xl font-bold mt-6">3. Legal Basis for Processing</h2>
                <p>We process your personal data in accordance with Article 6 of the GDPR, particularly for the performance of a contract (e.g., processing orders), compliance with legal obligations (e.g., tax reporting), or based on your consent for marketing communications.</p>

                <h2 className="text-2xl font-bold mt-6">4. Data Usage</h2>
                <p>Your personal data is used to process and fulfill your orders, manage customer service inquiries, and send marketing communications if you have given consent. We do not sell or share your personal data with third parties unless required by law or necessary for order fulfillment (e.g., shipping companies).</p>

                <h2 className="text-2xl font-bold mt-6">5. Data Retention</h2>
                <p>We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, or as required by Austrian law (e.g., retention periods for tax and accounting records).</p>

                <h2 className="text-2xl font-bold mt-6">6. Data Subject Rights</h2>
                <p>Under the GDPR, you have the right to access, rectify, erase, or restrict the processing of your personal data. You also have the right to object to processing or request data portability. To exercise these rights, please contact us at [Contact Email].</p>

                <h2 className="text-2xl font-bold mt-6">7. Cookies</h2>
                <p>Our website uses cookies to improve user experience and analyze website traffic. You can manage your cookie preferences through your browser settings. For more information, see our Cookie Policy.</p>

                <h2 className="text-2xl font-bold mt-6">8. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to ensure the security of your personal data. However, no data transmission over the internet can be guaranteed as 100% secure. We strive to protect your data, but you transmit it at your own risk.</p>

                <h2 className="text-2xl font-bold mt-6">9. Changes to the Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date. We encourage you to review this page periodically for any updates.</p>

                <h2 className="text-2xl font-bold mt-6">10. Contact Information</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at aakyel@bomo-cypap.com or +43 676 4249794.</p>
            </div>
            <Footer />
        </ScrollToTop>
    );
};

export default PrivacyPolicy;
