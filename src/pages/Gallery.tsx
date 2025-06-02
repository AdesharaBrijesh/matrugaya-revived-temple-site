
import React, { useState } from 'react';
import { X, Play } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop",
      title: "Vishnupad Temple",
      category: "temples"
    },
    {
      src: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=600&fit=crop",
      title: "Sacred Ritual Ceremony",
      category: "rituals"
    },
    {
      src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop",
      title: "Temple Complex",
      category: "temples"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      title: "Peaceful Temple Grounds",
      category: "temples"
    },
    {
      src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=800&h=600&fit=crop",
      title: "Pilgrimage Journey",
      category: "pilgrimage"
    },
    {
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop",
      title: "Traditional Architecture",
      category: "temples"
    },
    {
      src: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=600&fit=crop",
      title: "Pind Daan Ceremony",
      category: "rituals"
    },
    {
      src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop",
      title: "Sacred Banyan Tree",
      category: "nature"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      title: "Temple Evening View",
      category: "temples"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'temples', name: 'Temples' },
    { id: 'rituals', name: 'Rituals' },
    { id: 'pilgrimage', name: 'Pilgrimage' },
    { id: 'nature', name: 'Sacred Places' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const testimonialVideos = [
    {
      thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
      title: "Family Experience - Sharma Family",
      duration: "3:45"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=300&fit=crop",
      title: "Complete Pitra Paksha Journey",
      duration: "5:20"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
      title: "Traditional Ritual Process",
      duration: "4:15"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Sacred <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Gallery</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Witness the divine beauty of Gaya's temples and the authentic spiritual ceremonies we conduct
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Photo Gallery</h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore the sacred places and rituals through our curated collection
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Video Testimonials</h2>
            <p className="text-xl text-gray-600">
              Hear from families who experienced our spiritual services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialVideos.map((video, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-white ml-1" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{video.title}</h3>
                  <p className="text-white/80 text-sm">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Virtual Temple Tour</h2>
            <p className="text-xl text-gray-600 mb-8">
              Take a virtual journey through the sacred temples of Gaya
            </p>
            
            <div className="relative bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-8 mb-8">
              <div className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Play className="mx-auto mb-4 text-gray-600" size={48} />
                  <p className="text-gray-600 font-semibold">360° Virtual Tour</p>
                  <p className="text-gray-500">Experience Vishnupad Temple</p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Start Virtual Tour
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Vishnupad Temple</h3>
                <p className="text-gray-600">Explore the main temple where sacred footprint of Lord Vishnu is preserved</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Falgu River</h3>
                <p className="text-gray-600">View the sacred river where ritual baths and ceremonies are performed</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Akshayavat</h3>
                <p className="text-gray-600">See the immortal banyan tree of great spiritual significance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
