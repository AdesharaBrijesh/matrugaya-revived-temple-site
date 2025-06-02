
import React from 'react';
import { Clock, Users, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Holy Gaya</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Discover the sacred significance of Gaya, one of Hinduism's most important pilgrimage destinations, 
              where devotees perform ancestral rituals for spiritual liberation.
            </p>
          </div>
        </div>
      </section>

      {/* Gaya Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">The Sacred City of Gaya</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Gaya is one of the most sacred places in Hinduism, located in the state of Bihar, India. 
                This ancient city holds immense religious significance as the place where Lord Buddha 
                attained enlightenment and where Hindus perform Pitra Paksha rituals for their ancestors.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                According to Hindu scriptures, performing rituals in Gaya ensures that the souls of 
                ancestors attain moksha (liberation). The city is home to the famous Vishnupad Temple, 
                where Lord Vishnu's footprint is preserved.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-orange-600">2500+</h3>
                  <p className="text-gray-600">Years of History</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-orange-600">48</h3>
                  <p className="text-gray-600">Sacred Temples</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop" 
                alt="Sacred Temple in Gaya"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-xl text-gray-600">
                Serving devotees with dedication and authenticity since 1995
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Founded on Faith</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  MatruGaya was established in 1995 by Pandit Ramesh Sharma, a learned scholar 
                  of Vedic traditions who dedicated his life to helping devotees perform authentic 
                  rituals in the sacred city of Gaya.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Over the years, we have grown into a trusted name, serving thousands of families 
                  from across India and around the world. Our commitment to authenticity, 
                  transparency, and devotional service has made us the preferred choice for 
                  spiritual ceremonies in Gaya.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="text-orange-600" size={24} />
                    <div>
                      <h4 className="font-semibold">25+ Years</h4>
                      <p className="text-sm text-gray-600">Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="text-orange-600" size={24} />
                    <div>
                      <h4 className="font-semibold">10,000+</h4>
                      <p className="text-sm text-gray-600">Families Served</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="text-orange-600" size={24} />
                    <div>
                      <h4 className="font-semibold">100%</h4>
                      <p className="text-sm text-gray-600">Authentic Rituals</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="text-orange-600" size={24} />
                    <div>
                      <h4 className="font-semibold">24/7</h4>
                      <p className="text-sm text-gray-600">Support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=500&h=400&fit=crop" 
                  alt="Traditional Ritual"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our service to devotees and their spiritual journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Devotion</h3>
              <p className="text-gray-600 leading-relaxed">
                We approach every ritual with pure devotion and respect for ancient traditions, 
                ensuring the spiritual sanctity of each ceremony.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">
                All our rituals are performed according to authentic Vedic scriptures and 
                traditions passed down through generations of learned scholars.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Service</h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to providing compassionate service, guiding each family 
                through their spiritual journey with care and understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Places */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Sacred Places in Gaya</h2>
            <p className="text-xl text-gray-600">
              Discover the most important spiritual destinations where rituals are performed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Vishnupad Temple</h3>
              <p className="text-gray-600 mb-4">
                The most important temple in Gaya, housing the sacred footprint of Lord Vishnu. 
                This is the primary location for Pind Daan ceremonies.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Sacred footprint of Lord Vishnu</li>
                <li>• Main site for Pitra Paksha rituals</li>
                <li>• Ancient temple with rich history</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Falgu River</h3>
              <p className="text-gray-600 mb-4">
                Sacred river where devotees perform ritualistic baths and offer prayers 
                as part of the Pitra Paksha ceremonies.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Holy river for ritual baths</li>
                <li>• Part of ancestral ceremonies</li>
                <li>• Spiritual purification site</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Bodh Gaya</h3>
              <p className="text-gray-600 mb-4">
                Located nearby, this is where Buddha attained enlightenment under the Bodhi tree. 
                An important pilgrimage site for both Hindus and Buddhists.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Buddha's enlightenment site</li>
                <li>• Mahabodhi Temple complex</li>
                <li>• UNESCO World Heritage Site</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Akshayavat</h3>
              <p className="text-gray-600 mb-4">
                The immortal banyan tree where Lord Rama is believed to have offered 
                Pind Daan for his father Dasharatha.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Sacred immortal tree</li>
                <li>• Associated with Lord Rama</li>
                <li>• Historical ritual significance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
