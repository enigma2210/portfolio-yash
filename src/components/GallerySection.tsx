import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const GallerySection: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver();

  const galleryImages = [
    { id: 1, src: '/images/gallery-1.jpg', alt: 'Gallery image 1' },
    { id: 2, src: '/images/gallery-2.jpg', alt: 'Gallery image 2' },
    { id: 3, src: '/images/gallery-3.jpg', alt: 'Gallery image 3' },
    { id: 4, src: '/images/gallery-4.jpg', alt: 'Gallery image 4' },
    { id: 5, src: '/images/gallery-5.jpg', alt: 'Gallery image 5' },
    { id: 6, src: '/images/gallery-6.jpg', alt: 'Gallery image 6' }
  ];

  return (
    <section id="gallery" className="min-h-screen py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-400 via-green-400 to-yellow-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 via-green-500/20 to-yellow-300/30"></div>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div 
          ref={elementRef}
          className={`relative z-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12 lg:mb-16 text-neutral-800">
            Gallery
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className={`rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 aspect-square overflow-hidden ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center text-neutral-500 font-inter font-medium text-xs sm:text-sm lg:text-base hidden">
                  Gallery Image {image.id}
                  <br />
                  (1280x1096)
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;