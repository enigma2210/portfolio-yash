import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AboutSection: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver();

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div 
          ref={elementRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12 lg:mb-16 text-neutral-900">
            Who am I?
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center lg:justify-start order-first">
              <div className="w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-[32rem] lg:h-[40rem] xl:w-[36rem] xl:h-[44rem] rounded-2xl shadow-large overflow-hidden">
                <img 
                  src="/images/about-portrait.jpg" 
                  alt="Yash Aggarwal About Portrait"
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

            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg font-inter leading-relaxed text-neutral-700 order-first lg:order-last text-left">
              <p>
                I'm usually the most optimistic and "doer" person in the room.
              </p>
              
              <p>
                Since starting university, I've always worked on a range of projects and initiatives. Guided by the enduring belief that the only thing I know is that I don't know much, my journey has been shaped by starting, persisting with, and building a wide variety of projects, platforms, and engagements. All of this is driven by the broader goal of accelerating learning and impact outcomes for myself and those around me!
              </p>
              
              <p>
                Simply put, I have years of experience, but more importantly, a wealth of "experiences per year!" My friends tell me I can strike up a conversation with anyone, and I consider that a superpower.
              </p>
              
              <p>
                I'm deeply passionate about policymaking in India and the broader landscape of governance and growth in the region. Policy choices matter immensely, as their outcomes directly impact the prosperity and quality of life for millions of households. I wear multiple hats, all aimed at building, shaping, and contributing to India's burgeoning public policy and social impact landscape for years to come.
              </p>
              
              <p>
                I'm 27, born and raised in Calcutta, and fluent in English, Hindi, and Bangla.
              </p>
              
              <p>
                When I'm not at work, you'll mostly find me reading, playing tennis, brewing coffee ☕️, traveling, or exploring the hundreds of unique experiences New Delhi offers on the weekends!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;