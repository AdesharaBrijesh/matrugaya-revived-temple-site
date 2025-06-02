
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="text-orange-600" size={24} />,
      title: "Phone Numbers",
      details: ["+91 9876543210", "+91 8765432109"],
      description: "Available 24/7 for emergency assistance"
    },
    {
      icon: <Mail className="text-orange-600" size={24} />,
      title: "Email Addresses",
      details: ["info@matrugaya.com", "bookings@matrugaya.com"],
      description: "We respond within 2 hours"
    },
    {
      icon: <MapPin className="text-orange-600" size={24} />,
      title: "Location",
      details: ["Vishnupad Temple Area", "Gaya, Bihar 823001, India"],
      description: "Near main temple complex"
    },
    {
      icon: <Clock className="text-orange-600" size={24} />,
      title: "Operating Hours",
      details: ["24/7 Available", "Peak Season: Sep-Oct"],
      description: "Always here to serve you"
    }
  ];

  const services = [
    "Complete Pitra Paksha Package",
    "Single Day Pind Daan",
    "Extended Spiritual Journey",
    "Accommodation Only",
    "Transportation Only",
    "Custom Package"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Us</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Ready to begin your spiritual journey? Get in touch with our experienced team for guidance and bookings
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you plan your spiritual journey to Gaya. Reach out to us through any of these channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-700 font-medium">{detail}</p>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Book Your Consultation</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
                  <h4 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h4>
                  <p className="text-gray-600">Your message has been sent successfully. We'll contact you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Required *</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Preferred Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Additional Requirements</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Tell us about your specific requirements, number of family members, any special needs, etc."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2" size={20} />
                  </button>
                </form>
              )}
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Find Us</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="mx-auto text-gray-500 mb-2" size={48} />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Vishnupad Temple Area, Gaya</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Address:</strong> Near Vishnupad Temple, Gaya, Bihar 823001</p>
                  <p><strong>Landmark:</strong> Main temple complex area</p>
                  <p><strong>Parking:</strong> Available nearby</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="mb-6">For urgent bookings or emergency support during your spiritual journey</p>
                <div className="space-y-4">
                  <a 
                    href="tel:+919876543210" 
                    className="flex items-center p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <Phone className="mr-3" size={20} />
                    <span>Call Now: +91 9876543210</span>
                  </a>
                  <a 
                    href="https://wa.me/919876543210" 
                    className="flex items-center p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <Send className="mr-3" size={20} />
                    <span>WhatsApp: +91 9876543210</span>
                  </a>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked</h3>
                <div className="space-y-3">
                  <details className="cursor-pointer">
                    <summary className="font-medium text-gray-700 hover:text-orange-600">What documents do I need to bring?</summary>
                    <p className="text-gray-600 mt-2 pl-4">ID proof, family details for rituals, and any specific religious items if preferred.</p>
                  </details>
                  <details className="cursor-pointer">
                    <summary className="font-medium text-gray-700 hover:text-orange-600">How far in advance should I book?</summary>
                    <p className="text-gray-600 mt-2 pl-4">We recommend booking 1-2 weeks in advance, especially during Pitra Paksha season.</p>
                  </details>
                  <details className="cursor-pointer">
                    <summary className="font-medium text-gray-700 hover:text-orange-600">Do you provide accommodation?</summary>
                    <p className="text-gray-600 mt-2 pl-4">Yes, we arrange comfortable accommodation near the temple complex as part of our packages.</p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
