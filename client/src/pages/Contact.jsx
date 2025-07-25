import React from 'react';

const Contact = () => {
    return (
        <div className="mt-16 pb-16 max-w-4xl mx-auto px-4">
            <div className="flex flex-col items-end w-max mb-8">
                <p className="text-2xl font-medium uppercase">Contact Us</p>
                <div className="w-16 h-0.5 bg-primary rounded-full"></div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-10 border border-gray-300">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-2"><strong>Address: </strong> 123 College Lane, CCET Chandigarh Sec 26</p>
                <p className="text-gray-600 mb-2"><strong>Phone:</strong> +91-9876543210</p>
                <p className="text-gray-600 mb-4"><strong>Email:</strong> janviccet@gmail.com</p>
            </div>

            {/* Contact Form */}
            <form className="bg-white rounded-lg shadow-md p-6 border border-gray-300 space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Send Us a Message</h2>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Name</label>
                    <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Message</label>
                    <textarea rows="5" placeholder="Your message..." className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                </div>
                <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-all">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
