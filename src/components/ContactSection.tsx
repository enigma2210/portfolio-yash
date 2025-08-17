import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ContactSection: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver();

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div 
          ref={elementRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12 lg:mb-16 text-neutral-900">
            Let's Chat
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg font-inter leading-relaxed text-neutral-700 text-left">
              <p>
                I'm always excited to connect with fellow policy enthusiasts, students exploring careers in public policy, 
                professionals working in the social impact space, or anyone interested in meaningful conversations about 
                governance, technology policy, and India's development journey.
              </p>
              
              <p>
                Whether you're looking for career guidance, want to collaborate on policy initiatives, or simply want to 
                discuss the latest developments in tech policy and governance, I'd love to hear from you!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10">
                <a
                  href="mailto:yashcontactemail@gmail.com"
                  className="inline-block bg-gold hover:bg-gold/90 text-neutral-800 font-inter font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold/25 text-center text-sm sm:text-base"
                >
                  Send me an Email
                </a>
                
                <a
                  href="https://www.linkedin.com/in/yashagarwalm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal hover:bg-teal/90 text-neutral-800 font-inter font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal/25 text-center text-sm sm:text-base"
                >
                  LinkedIn DMs
                </a>
              </div>
            </div>

            {/* Image - contact-image.jpg (1280x849) - aspect ratio ~1.51:1 */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="w-80 h-53 sm:w-96 sm:h-64 lg:w-[32rem] lg:h-[21rem] xl:w-[36rem] xl:h-[24rem] rounded-2xl shadow-large overflow-hidden">
                <img 
                  src="/images/contact-image.jpg" 
                  alt="Contact Image"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center text-neutral-500 font-inter font-medium text-sm sm:text-base hidden">
                  Contact Image
                  <br />
                  (1280x849)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;