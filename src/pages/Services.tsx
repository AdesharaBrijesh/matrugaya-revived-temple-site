
import React from 'react';
import { Clock, Users, MapPin, CheckCircle, Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      title: "Complete Pitra Paksha Package",
      description: "Comprehensive 3-day ritual package including all ceremonies, accommodation, and meals",
      duration: "3 Days",
      price: "₹15,000",
      includes: [
        "Expert Pandit guidance",
        "All ritual materials",
        "3-star accommodation",
        "Traditional meals",
        "Temple visits",
        "Transportation"
      ],
      popular: true
    },
    {
      title: "Single Day Pind Daan",
      description: "Essential Pind Daan ceremony performed with traditional rituals",
      duration: "1 Day",
      price: "₹5,000",
      includes: [
        "Pind Daan ceremony",
        "Ritual materials",
        "Pandit services",
        "Temple offerings",
        "Basic meals"
      ]
    },
    {
      title: "Extended Spiritual Journey",
      description: "7-day comprehensive spiritual experience with multiple ceremonies",
      duration: "7 Days",
      price: "₹35,000",
      includes: [
        "Complete Pitra Paksha rituals",
        "Daily temple visits",
        "Spiritual guidance sessions",
        "Premium accommodation",
        "All meals included",
        "Local sightseeing",
        "Airport pickup/drop"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: "🏨",
      title: "Accommodation",
      description: "Comfortable stays near temples",
      price: "From ₹800/night"
    },
    {
      icon: "🚗",
      title: "Transportation",
      description: "Airport pickup and local travel",
      price: "From ₹1,500/day"
    },
    {
      icon: "🍽️",
      title: "Traditional Meals",
      description: "Authentic vegetarian cuisine",
      price: "From ₹200/meal"
    },
    {
      icon: "📿",
      title: "Ritual Materials",
      description: "All puja items and offerings",
      price: "From ₹500/set"
    }
  ];

  const ritualProcess = [
    {
      step: 1,
      title: "Consultation",
      description: "Initial discussion about your requirements and family traditions"
    },
    {
      step: 2,
      title: "Preparation",
      description: "Gathering all necessary materials and scheduling with experienced Pandits"
    },
    {
      step: 3,
      title: "Ritual Performance",
      description: "Authentic ceremonies performed according to Vedic traditions"
    },
    {
      step: 4,
      title: "Completion",
      description: "Final prayers and documentation of completed rituals"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Sacred Services</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Complete spiritual services for Pitra Paksha rituals and other ceremonies in Holy Gaya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                Book Now
              </Link>
              <a 
                href="tel:+919876543210" 
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Call for Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Service Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully designed packages to suit your spiritual needs and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg border-2 hover:shadow-xl transition-shadow ${service.popular ? 'border-orange-500' : 'border-gray-200'}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star size={16} className="mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock size={20} className="mr-2" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-3xl font-bold text-orange-600">
                      {service.price}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-800 mb-3">Package Includes:</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-600">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to="/contact" 
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      service.popular 
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-lg' 
                        : 'border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                    }`}
                  >
                    Book This Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Additional Services</h2>
            <p className="text-xl text-gray-600">
              Customize your spiritual journey with our additional offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-orange-600 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ritual Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Ritual Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding how we conduct authentic spiritual ceremonies with complete transparency
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ritualProcess.map((process, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Important Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Best Time to Visit</h3>
                <ul className="space-y-3 text-gray-600">
                  <li><strong>Pitra Paksha (September/October):</strong> Most auspicious period for ancestral rituals</li>
                  <li><strong>Gaya Ekadashi:</strong> Special day for performing rituals</li>
                  <li><strong>Other Times:</strong> Rituals can be performed year-round</li>
                  <li><strong>Advance Booking:</strong> Recommended during festival periods</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What to Bring</h3>
                <ul className="space-y-3 text-gray-600">
                  <li><strong>Documents:</strong> ID proof and family details</li>
                  <li><strong>Clothing:</strong> Traditional and comfortable attire</li>
                  <li><strong>Personal Items:</strong> Medicines and essentials</li>
                  <li><strong>Optional:</strong> Family photos for rituals</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Guarantee</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Authentic Vedic rituals performed correctly</li>
                  <li>✓ Experienced and knowledgeable Pandits</li>
                  <li>✓ Complete transparency in all services</li>
                  <li>✓ 24/7 support during your stay</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact for Booking</h3>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-600">
                    <Phone className="mr-2 text-orange-600" size={20} />
                    +91 9876543210
                  </p>
                  <p className="flex items-center text-gray-600">
                    <MapPin className="mr-2 text-orange-600" size={20} />
                    Vishnupad Temple Area, Gaya
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
