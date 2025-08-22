import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Facebook,
  Youtube,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const openMapDirections = () => {
    window.open("https://maps.app.goo.gl/skJwniXMhs9B5ieRA", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-blue-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Get in touch with Abugida Robotics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section: Map and Information */}
          <div className="space-y-8">
            {/* Map Section */}
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
                <MapPin className="mr-2 text-blue-500" />
                Our Location
              </h2>

              {/* Embedded Google Map */}
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.233389456206!2d38.76394927482029!3d9.041253291061785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>

              <button
                onClick={openMapDirections}
                className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:bg-blue-700 flex items-center justify-center"
              >
                <MapPin className="mr-2" size={20} />
                Get Directions
              </button>
            </div>

            {/* Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Working Hours */}
              <div className="rounded-2xl p-6 shadow-xl bg-white dark:bg-gray-800">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
                  <Clock className="mr-2 text-blue-500" />
                  Working Hours
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <div className="flex flex-col">
                    <span className="font-semibold">Monday - Saturday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-red-500">Closed</span>
                  </div>
                </div>
              </div>

              {/* Contact & Social Media */}
              <div className="rounded-2xl p-6 shadow-xl bg-white dark:bg-gray-800">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
                  <Phone className="mr-2 text-blue-500" />
                  Get In Touch
                </h3>

                {/* Phone Number */}
                <div className="mb-6 p-3 rounded-lg bg-blue-50 dark:bg-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-700 dark:text-blue-300">
                      +1 (555) 123-ROBO
                    </span>
                    <button className="p-2 rounded-full bg-blue-100 dark:bg-blue-600 text-blue-600 dark:text-white hover:bg-blue-200 dark:hover:bg-blue-500 transition-colors">
                      <Phone size={16} />
                    </button>
                  </div>
                </div>

                {/* Social Media Links */}
                <div>
                  <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">
                    Follow Us
                  </h4>
                  <div className="flex gap-3">
                    {[
                      {
                        icon: Facebook,
                        label: "Facebook",
                        color: "bg-blue-500 hover:bg-blue-600",
                      },
                      {
                        icon: Youtube,
                        label: "YouTube",
                        color: "bg-red-500 hover:bg-red-600",
                      },
                      {
                        icon: Linkedin,
                        label: "LinkedIn",
                        color: "bg-blue-700 hover:bg-blue-800",
                      },
                      {
                        icon: MessageCircle,
                        label: "WhatsApp",
                        color: "bg-green-500 hover:bg-green-600",
                      },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`flex items-center justify-center p-3 rounded-full text-white transition-all duration-300 ${social.color}`}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="rounded-2xl p-8 shadow-xl bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-gray-800 dark:text-white">
              <Mail className="mr-2 text-blue-500" />
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300"
                  placeholder="Type your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>

            {/* Additional Contact Info */}
            <div className="mt-8 p-4 rounded-lg bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>Prefer direct contact?</strong> Call us at{" "}
                <span className="font-semibold">+1 (555) 123-ROBO</span> or
                email{" "}
                <span className="font-semibold">
                  contact@abugidarobotics.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
