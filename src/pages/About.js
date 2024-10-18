import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const products = [
    "Heat Transfer Papers",
    "Direct-to-Film (DTF) Prints",
    "Silicone Transfers",
    "Serigraph (Silkscreen) Printing",
    "Custom Label Printing",
    "Promotional Products",
];

const About = () => {
    return (
        <ScrollToTop>
            <section className="">
                <Header />

                <div className="container mx-auto px-6 lg:px-20 py-12">
                    <h2 className="text-3xl font-bold text-center">About PrintingAdil</h2>
                    <div className="bg-white py-12">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col lg:flex-row items-start">
                                {/* Video Section */}
                                <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
                                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                                        <iframe
                                            src="https://drive.google.com/file/d/18GevCK1zQUaEqUAofMcjYWAM06XaNUVY/preview"
                                            title="About PrintingAdil"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="absolute top-0 left-0 w-full h-full rounded shadow-lg"
                                        ></iframe>
                                    </div>
                                </div>


                                {/* Rich Text Section */}
                                <div className="lg:w-1/2 w-full lg:pl-8">
                                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                                        PrintingAdil: Your Partner in Innovation
                                    </h2>
                                    <p className="text-gray-700 mb-4">
                                        At <span className="font-bold">PrintingAdil</span>, we believe that every design tells a story, and our job is to help bring that story to life. With years of expertise and a passion for what we do, we are dedicated to offering solutions that empower businesses, brands, and creators. From cutting-edge printing technologies to environmentally conscious practices, we are your trusted partner in making every print perfect.
                                    </p>
                                    <p className="text-gray-700 mb-4">
                                        As part of the Artsan family, a renowned Turkish company that has led the transfer paper industry since 1985, PrintingAdil leverages decades of experience and innovation. We take pride in our heritage, but our focus remains on the future—constantly exploring new ways to serve our clients better with faster turnaround times, durable materials, and eco-friendly alternatives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-800 text-lg leading-relaxed space-y-6">
                        {/* What Sets Us Apart */}
                        <p>
                            <span className="font-bold">Why choose PrintingAdil?</span> Because we believe in combining creativity with state-of-the-art printing techniques. We don’t just follow trends; we set them. Whether it's a high-quality silicone transfer for sportswear or a unique serigraph print with glitter effects, we bring your ideas to life with unmatched detail and craftsmanship. Every project is an opportunity to push the boundaries of what's possible.
                        </p>

                        <h3 className="text-xl font-bold mt-6 mb-4">Our Product Range</h3>
                        <p className="text-gray-700 mb-4">
                            At <span className="font-bold">PrintingAdil</span>, we offer a diverse range of products and services designed to meet various printing needs:
                        </p>
                        <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
                            {products.map((product, index) => (
                                <li key={index}>
                                    <strong>{product}:</strong> {getProductDescription(product)}
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-700">
                            Whether you're looking for vibrant and durable prints for your fashion line, unique promotional items, or high-quality transfer papers for your own printing needs, PrintingAdil is here to support you with reliable and innovative solutions.
                        </p>

                        {/* Customer Satisfaction */}
                        <p>
                            We understand that customer satisfaction is at the core of any business. That's why at PrintingAdil, we provide full-service support from the initial design phase to final production and delivery. Our dedicated team is here to assist you at every step, ensuring your experience is smooth and stress-free.
                        </p>

                        {/* Looking Ahead */}
                        <p>
                            As we look to the future, we are committed to continuing our growth, staying on top of the latest industry trends, and offering our clients innovative solutions. We are excited to expand our range of printing services, invest in new technologies, and explore new ways to serve our customers better.
                        </p>

                        {/* Closing Statement */}
                        <p className="font-bold text-center">
                            Choose PrintingAdil for quality, innovation, and reliability. Together, let's create something amazing!
                        </p>
                    </div>
                </div>
                <Footer />
            </section>
        </ScrollToTop>
    );
};

// Helper function to return product descriptions
const getProductDescription = (product) => {
    switch (product) {
        case "Heat Transfer Papers":
            return "Our high-quality heat transfer papers are perfect for vibrant and long-lasting designs on a variety of textiles, including cotton, polyester, and blended fabrics.";
        case "Direct-to-Film (DTF) Prints":
            return "A versatile solution that allows for detailed, full-color designs on both light and dark garments. DTF is known for its durability and vivid results.";
        case "Silicone Transfers":
            return "Ideal for sportswear and athletic apparel, our silicone transfers provide a smooth, flexible finish that is both durable and resistant to wear.";
        case "Serigraph (Silkscreen) Printing":
            return "A classic method known for its sharp, vibrant prints, perfect for larger orders where consistency is key. Our serigraph services can include special effects like glitter, metallics, and more.";
        case "Custom Label Printing":
            return "We create custom labels for branding, including neck labels and care tags, ensuring that every detail of your product reflects your brand identity.";
        case "Promotional Products":
            return "From custom T-shirts to branded merchandise like tote bags and hats, we help businesses create impactful promotional items that make lasting impressions.";
        default:
            return "";
    }
};

export default About;
