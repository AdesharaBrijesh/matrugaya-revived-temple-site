
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ॐ</span>
              </div>
              <h3 className="text-xl font-bold">MatruGaya</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted guide for sacred rituals and spiritual services in the holy city of Gaya.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-orange-400 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-orange-400 cursor-pointer" />
              <Youtube className="w-5 h-5 hover:text-orange-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-orange-400">About Gaya</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-orange-400">Our Services</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-orange-400">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Pitra Paksha Rituals</li>
              <li>Pind Daan Ceremony</li>
              <li>Temple Visits</li>
              <li>Spiritual Guidance</li>
              <li>Accommodation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <span className="text-gray-300">Vishnupad Temple Area, Gaya, Bihar, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">info@matrugaya.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 MatruGaya. All rights reserved. | Serving with devotion since 1995
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
