import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const HeroSection: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver();

  const mediaLogos = [
    {
      name: 'Hindustan Times',
      logo: '/logos/hindustan-times.jpg',
      alt: 'Hindustan Times Logo',
      scale: 'scale-300 sm:scale-350 lg:scale-400' // Extremely large scaling to fill frame
    },
    {
      name: 'Indian Express',
      logo: '/logos/indian-express.jpg', 
      alt: 'Indian Express Logo',
      scale: 'scale-300 sm:scale-350 lg:scale-400' // Extremely large scaling to fill frame
    },
    {
      name: 'The Mint',
      logo: '/logos/the-mint.png',
      alt: 'The Mint Logo',
      scale: 'scale-100' // Normal scaling
    },
    {
      name: 'The Wire',
      logo: '/logos/the-wire.png',
      alt: 'The Wire Logo',
      scale: 'scale-110 sm:scale-125 lg:scale-140' // Small scaling
    },
    {
      name: 'The Leaflet',
      logo: '/logos/the-leaflet.png',
      alt: 'The Leaflet Logo',
      scale: 'scale-110 sm:scale-125 lg:scale-140' // Small scaling
    },
    {
      name: 'NDTV',
      logo: '/logos/ndtv.png',
      alt: 'NDTV Logo',
      scale: 'scale-100' // Normal scaling
    }
  ];

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-yellow-200 via-green-300 to-teal-400 flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 via-green-400/30 to-teal-500/20"></div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div 
          ref={elementRef}
          className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-neutral-800">
              Hi :) I'm <span className="text-royal-blue">Yash</span>, the <br />
              <span className="text-royal-blue">"Public Policy"</span> guy!
            </h1>
            
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg font-inter leading-relaxed text-neutral-700 text-left">
              <p>
                I'm a Public Policy professional with 6+ years of experience in Public Affairs and Government Relations at{' '}
                <a href="https://www.icann.org/" target="_blank" rel="noopener noreferrer" 
                   className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                  ICANN
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </a>,{' '}
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" 
                   className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                  Twitter
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </a>{' '}
                (now X.com),{' '}
                <a href="https://www.chase-advisors.com/" target="_blank" rel="noopener noreferrer" 
                   className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                  Consulting
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </a>{' '}
                and the{' '}
                <a href="https://sansad.in/ls" target="_blank" rel="noopener noreferrer" 
                   className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                  Indian Parliament
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </a>.
              </p>
              
              <p>
                In parallel, I founded and lead{' '}
                <a href="https://publicpolicyindia.com/" target="_blank" rel="noopener noreferrer" 
                   className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                  Public Policy India
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </a>, a platform shaping India's policy and social impact sector via engagements across community, careers and capacity building.
              </p>

              <p>
                Beyond my professional roles, I volunteer as an educator, teaching at schools and{' '}
                <a href="https://www.linkedin.com/posts/yashagarwalm_always-the-best-being-back-in-ashoka-university-activity-7336606519054036993-i29T/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB6V9M8BQIRbO8-gVayFs8iKL0uM-6PznuM" 
                   target="_blank" rel="noopener noreferrer" 
                   className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                  universities across India
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </a>{' '}
                on a range of subjects focused on technology and governance. I also serve in an advisory role across consulting firms, development sector organisations as well as educational institutions.
              </p>
            </div>

            {/* Featured Media Section */}
            <div className="pt-6 sm:pt-8">
              <h3 className="font-poppins text-xl sm:text-2xl font-extrabold text-neutral-800 mb-4 sm:mb-6">As featured in:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                {mediaLogos.map((media, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 sm:p-4 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                    <div className="h-8 sm:h-10 lg:h-12 flex items-center justify-center">
                      <img 
                        src={media.logo}
                        alt={media.alt}
                        className={`max-w-full max-h-full object-contain transition-transform duration-300 ${media.scale}`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="text-neutral-600 font-inter font-medium text-xs sm:text-sm lg:text-base hidden">
                        {media.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-[32rem] lg:h-[40rem] xl:w-[36rem] xl:h-[44rem] rounded-2xl shadow-large overflow-hidden">
              <img 
                src="/images/hero-portrait.jpg" 
                alt="Yash Aggarwal Portrait"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center text-neutral-500 font-inter font-medium text-sm sm:text-base hidden">
                Portrait Image
                <br />
                (1280x1096)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;