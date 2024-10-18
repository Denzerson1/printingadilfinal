import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const LegalNotice = () => {
    return (
        <ScrollToTop>
            <Header />
            <div className="container mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold mb-6">Legal Notice (Impressum)</h1>
                <p>According to § 5 of the Austrian E-Commerce Act (ECG) and the Austrian Media Act (Mediengesetz).</p>

                <h2 className="text-2xl font-bold mt-6">Company Information</h2>
                <p>
                    <strong>Company Name:</strong> PrintingAdil <br />
                    <strong>Phone:</strong> +43 676 4249794<br />
                    <strong>Email:</strong> aakyel@bomo-cypap.com <br />
                    <strong>Website:</strong>  <br />
                </p>

                <h2 className="text-2xl font-bold mt-6">Legal Form</h2>
                <p>[Company Name] is a [legal form, e.g., "GmbH" (Limited Liability Company)] registered in the Austrian Commercial Register (Firmenbuch) under the following details:</p>
                <p>
                    <strong>Company Registration Number (Firmenbuchnummer):</strong> [Number] <br />
                    <strong>Commercial Court:</strong> [Court, e.g., Handelsgericht Wien] <br />
                </p>

                <h2 className="text-2xl font-bold mt-6">VAT Identification Number</h2>
                <p>VAT ID: ATU[Number]</p>

                <h2 className="text-2xl font-bold mt-6">Managing Director</h2>
                <p>[Full Name of the Managing Director]</p>

                <h2 className="text-2xl font-bold mt-6">Supervisory Authority</h2>
                <p>Responsible supervisory authority: [e.g., "Bezirkshauptmannschaft" (District Authority) or "Magistrat"]</p>

                <h2 className="text-2xl font-bold mt-6">Dispute Resolution</h2>
                <p>Consumers have the option of using the EU’s online dispute resolution platform (ODR) at <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>. We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board.</p>

                <h2 className="text-2xl font-bold mt-6">Content Responsibility</h2>
                <p>Responsible for the content in accordance with § 55 Abs. 2 of the Austrian Broadcasting Agreement (RStV): [Name, Address]</p>
            </div>
            <Footer />
        </ScrollToTop>
    );
};

export default LegalNotice;
