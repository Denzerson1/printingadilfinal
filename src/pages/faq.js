import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const faqData = [
        {
            question: 'What is DTF (Direct-to-Film) Transfer?',
            answer:
                'DTF Transfer is a printing method where a design is printed on a special film and then transferred to fabric using heat. It can be applied to various fabrics such as cotton, polyester, nylon, and blends.',
        },
        {
            question: 'What kind of fabrics can DTF be used on?',
            answer:
                'DTF can be used on almost any fabric, including cotton, polyester, blends, and even treated leather, making it versatile for different applications.',
        },
        {
            question: 'What are Serigraph (Silkscreen) Transfers?',
            answer:
                'Serigraph transfers, also known as silkscreen transfers, involve applying ink through a stencil (or screen) onto the substrate. The ink only passes through certain areas to form your design.',
        },
        {
            question: 'What are the benefits of Serigraph transfers?',
            answer:
                'Serigraph transfers offer durable, vibrant prints, and can accommodate special effects such as puffy, glitter, reflective, and more. They are ideal for large batches and mass production.',
        },
        {
            question: 'What is a Silicone Transfer?',
            answer:
                'Silicone Transfers use silicone-based inks to create raised designs with a 3D effect. They are commonly used in high-end, athletic, or outdoor clothing, offering a flexible and durable finish.',
        },
        {
            question: 'How does the order process work?',
            answer:
                'Once you choose your desired transfer type, you can place an order through our website. Upload your design, select the type of fabric, and choose additional options like color and effects. Our team will review your order and send you a confirmation. Production begins as soon as your design is approved.',
        },
        {
            question: 'What is the delivery time for orders?',
            answer:
                'Typically, orders take 3-5 business days for production. Standard delivery times range from 5-7 business days depending on your location. We also offer expedited shipping for urgent orders.',
        },
        {
            question: 'Can I get a sample before placing a large order?',
            answer:
                'Yes, we offer sample production for most transfer types. Simply choose the sample option when placing your order. Once you approve the sample, we can move forward with full production.',
        },
        {
            question: 'What payment methods do you accept?',
            answer:
                'We accept all major credit cards, PayPal, and bank transfers. Payment is required upfront for all orders. For large orders, we may offer flexible payment terms based on approval.',
        },
        {
            question: 'What should I do if my order arrives damaged or incorrect?',
            answer:
                'If your order arrives damaged or incorrect, please contact our support team immediately. We will work with you to resolve the issue, whether it’s through a replacement or a refund.',
        },
    ];

    return (
        <ScrollToTop>
            <section className="">
                <Header />
                <div className="container mx-auto px-6 lg:px-20 pb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 pt-10">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-300 pb-4"
                            >
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full text-left text-xl font-medium text-indigo-900 hover:text-indigo-600 focus:outline-none flex justify-between items-center py-4"
                                >
                                    {item.question}
                                    <span className={`transform ${openQuestion === index ? 'rotate-180' : ''} transition-transform duration-300`}>
                                        {openQuestion === index ? '-' : '+'}
                                    </span>
                                </button>
                                {openQuestion === index && (
                                    <div className="text-gray-700 text-base mt-2 transition-opacity duration-300">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </section>
        </ScrollToTop>
    );
};

export default FAQ;
