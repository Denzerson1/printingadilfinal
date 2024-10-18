// src/components/ContactForm.js

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_h2sqmjm", // Replace with your EmailJS service ID
                "template_a8qczmq", // Replace with your EmailJS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                "oAbcfl7LTqi_GbPqX" // Replace with your EmailJS user ID (or public key)
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setFormStatus("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (err) => {
                    console.log("FAILED...", err);
                    setFormStatus("Failed to send the message. Please try again.");
                }
            );
    };

    return (
        <ScrollToTop>
            <Header />
            <div className="flex justify-center items-center pt-24">
                <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg mb-24">
                    <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="5"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                        >
                            Send Message
                        </button>
                    </form>
                    {formStatus && <p className="mt-4 text-center text-green-500">{formStatus}</p>}
                </div>
            </div>
            <Footer />
        </ScrollToTop>
    );
};

export default ContactForm;
