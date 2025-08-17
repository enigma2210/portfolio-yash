import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const WhoAreYouSection: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver();

  return (
    <section id="who-are-you" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div 
          ref={elementRef}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-center mb-16 text-blue-900">
            Okay…Who are you?
          </h2>
          
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-lg">
            <div className="space-y-6 text-lg font-merriweather text-gray-800 leading-relaxed">
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

export default WhoAreYouSection;