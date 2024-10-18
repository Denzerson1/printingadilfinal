import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
    return (
        <ScrollToTop>
            <Header />
            <div className="container mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
                <p>Last updated: [Date]</p>

                <p>Welcome to [Company Name]. By accessing or using our website and services (collectively, the "Services"), you agree to be bound by these Terms of Service. Please read these terms carefully before using our Services.</p>

                <h2 className="text-2xl font-bold mt-6">1. Acceptance of Terms</h2>
                <p>By accessing or using the Services, you agree to these Terms of Service. If you do not agree, you must stop using the Services immediately. These Terms are governed by Austrian law, particularly the Austrian Consumer Protection Act ("Konsumentenschutzgesetz") and the Austrian Civil Code ("ABGB").</p>

                <h2 className="text-2xl font-bold mt-6">2. Account Registration</h2>
                <p>To access certain features of our Services, you may need to create an account. You are responsible for keeping your account information confidential. Any activity that occurs under your account is your responsibility. If you notice unauthorized access to your account, inform us immediately. [Company Name] is not liable for damages resulting from unauthorized access.</p>

                <h2 className="text-2xl font-bold mt-6">3. Orders and Payments</h2>
                <p>All prices are displayed in EUR and include VAT (Value Added Tax), unless otherwise stated. By placing an order, you agree to pay the listed price. Full payment must be received before production begins. Payments can be made via bank transfer, credit card, or other accepted methods.</p>
                <p>Once your order is submitted, you are responsible for ensuring that all details are correct. After the production process begins, changes or cancellations may not be possible. In accordance with Austrian consumer law, custom-made products are exempt from the right of withdrawal (Widerrufsrecht).</p>

                <h2 className="text-2xl font-bold mt-6">4. Production and Delivery</h2>
                <p>Production times and delivery dates are estimates and may vary. We will inform you of any significant delays. Shipping is carried out by third-party carriers, and once the order is handed over to the carrier, the risk of loss or damage passes to you.</p>

                <h2 className="text-2xl font-bold mt-6">5. Returns and Warranty</h2>
                <p>Due to the custom nature of our products, returns are not accepted unless the product is defective. If you receive a defective or incorrect product, please notify us within 14 days of receipt. Austrian law guarantees a 2-year warranty (Gewährleistungspflicht) for defects, during which time we will repair or replace defective items.</p>

                <h2 className="text-2xl font-bold mt-6">6. Intellectual Property</h2>
                <p>All content on this website, including but not limited to logos, designs, images, and text, is protected by Austrian copyright law and other intellectual property laws. You may not reproduce, modify, or distribute any content without our express permission.</p>

                <h2 className="text-2xl font-bold mt-6">7. Limitation of Liability</h2>
                <p>To the extent permitted by Austrian law, [Company Name] shall not be liable for any indirect or consequential damages arising from the use or inability to use our Services, except for damages caused by willful misconduct or gross negligence.</p>

                <h2 className="text-2xl font-bold mt-6">8. Governing Law and Jurisdiction</h2>
                <p>These Terms are governed by the laws of Austria. Any disputes arising from or related to these Terms or the use of our Services shall be resolved by the competent courts in [City], Austria.</p>

                <h2 className="text-2xl font-bold mt-6">9. Changes to Terms</h2>
                <p>We reserve the right to amend these Terms of Service at any time. Changes will be effective when posted on this page. Continued use of the Services after such changes will constitute acceptance of the revised terms.</p>

                <h2 className="text-2xl font-bold mt-6">10. Contact Information</h2>
                <p>If you have any questions about these Terms of Service, please contact us at aakyel@bomo-cypap.com or +43 676 4249794.</p>
            </div>
            <Footer />
        </ScrollToTop>
    );
};

export default TermsOfService;
