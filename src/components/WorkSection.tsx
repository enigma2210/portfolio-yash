import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const WorkSection: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver();

  return (
    <section id="work" className="min-h-screen py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-300 via-teal-400 to-yellow-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 via-teal-500/20 to-yellow-400/30"></div>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div 
          ref={elementRef}
          className={`relative z-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12 lg:mb-16 text-neutral-800">
            What exactly do I do?
          </h2>
          
          {/* Central Image - work-main.png (1280x764) - aspect ratio ~1.68:1 */}
          <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
            <div className="w-80 h-48 sm:w-96 sm:h-56 lg:w-[32rem] lg:h-[19rem] xl:w-[36rem] xl:h-[21rem] rounded-2xl shadow-large overflow-hidden">
              <img 
                src="/images/work-main.png" 
                alt="Work Main Image"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center text-neutral-500 font-inter font-medium text-sm sm:text-base hidden">
                Work Image
                <br />
                (1280x764)
              </div>
            </div>
          </div>

          <div className="w-full space-y-12 sm:space-y-16 lg:space-y-20">
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-lg sm:text-xl font-inter font-semibold text-neutral-800 mb-6 sm:mb-8">
                My work revolves around three key areas:
              </p>
            </div>

            {/* Tech Policy Section - tech-policy.png (1280x669) - aspect ratio ~1.91:1 */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 text-left">
                <h3 className="font-poppins text-2xl sm:text-3xl font-extrabold text-neutral-800">
                  Tech Policy & Internet Governance:
                </h3>
                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg font-inter leading-relaxed text-neutral-700 text-left">
                  <p>
                    I've always held full-time roles in this domain, working for organizations focused on solving emerging technology policy and Internet governance challenges in India and beyond.
                  </p>
                  
                  <p>
                    Currently, I serve as the Stakeholder Engagement Manager for South Asia at the{' '}
                    <a href="https://www.icann.org/" target="_blank" rel="noopener noreferrer" 
                       className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                      Internet Corporation for Assigned Names and Numbers (ICANN)
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>. My responsibilities include developing and maintaining an extensive network of key government, technical, and civil society stakeholders.
                  </p>
                  
                  <p>
                    This involves establishing a collaborative framework for stakeholder engagement that improves regional policy alignment and fosters a unified approach to Internet governance across the six countries in South Asia to enable a stable, secure, and unified global Internet for all.
                  </p>
                  
                  <p>
                    Before my current role at ICANN, I worked for Twitter India and South Asia (now X.com) for a couple of years in a policy and partnership role. I started at Twitter as their first-ever Public Policy Fellow from South Asia (designated as a Public Policy Coordinator) and was promoted to Public Policy Associate within eight months.
                  </p>
                  
                  <p>
                    Preceding my stint at Twitter, I worked as an Associate Consultant at{' '}
                    <a href="https://www.chase-advisors.com/" target="_blank" rel="noopener noreferrer" 
                       className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                      Chase Advisors
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>, an APAC-focused public policy advocacy and consulting firm working with clients across various sectors and focus areas.
                  </p>
                  
                  <p>
                    Earlier, I worked as a{' '}
                    <a href="https://prsindia.org/lamp" target="_blank" rel="noopener noreferrer" 
                       className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                      LAMP (Legislative Assistant to Member of Parliament)
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>{' '}
                    Fellow to a four-term State Cabinet Minister of Assam and current Member of Parliament. I was selected for a cohort of 50 from a pool of over 5,000 applicants.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end order-first lg:order-last">
                <div className="w-80 h-42 sm:w-96 sm:h-50 lg:w-[32rem] lg:h-[17rem] xl:w-[36rem] xl:h-[19rem] rounded-2xl shadow-large overflow-hidden">
                  <img 
                    src="/images/tech-policy.png" 
                    alt="Tech Policy & Internet Governance"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center text-neutral-500 font-inter font-medium text-sm sm:text-base hidden">
                    Tech Policy Image
                    <br />
                    (1280x669)
                  </div>
                </div>
              </div>
            </div>

            {/* Building Ecosystem Section - ppi-ecosystem.png (1280x1408) - aspect ratio ~0.91:1 */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center lg:justify-start order-first">
                <div className="w-80 h-88 sm:w-96 sm:h-[28rem] lg:w-[32rem] lg:h-[44rem] xl:w-[36rem] xl:h-[48rem] rounded-2xl shadow-large overflow-hidden">
                  <img 
                    src="/images/ppi-ecosystem.png" 
                    alt="Public Policy India Ecosystem"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center text-neutral-500 font-inter font-medium text-sm sm:text-base hidden">
                    PPI Image
                    <br />
                    (1280x1408)
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6 order-first lg:order-last text-left">
                <h3 className="font-poppins text-2xl sm:text-3xl font-extrabold text-neutral-800">
                  Building the Public Policy Ecosystem:
                </h3>
                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg font-inter leading-relaxed text-neutral-700 text-left">
                  <p>
                    I founded and lead{' '}
                    <a href="http://publicpolicyindia.com/" target="_blank" rel="noopener noreferrer" 
                       className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                      Public Policy India (PPI)
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>, the largest community-driven knowledge and engagement platform dedicated to building and shaping India's burgeoning Public Policy and Social Impact space. PPI's mission is to grow the entire public policy "pie" in India through content, community, careers, and capacity building.
                  </p>
                  
                  <p>
                    This initiative, which I founded over five years ago and currently lead, is the largest (with more than 100,000 members and growing) community-driven knowledge and engagement platform dedicated to building and shaping India's burgeoning Public Policy and Social Impact space.
                  </p>
                  
                  <p>
                    PPI's mission is to actively shape the public policy space in India through a range of engagements across its content, community, careers, and capacity-building verticals.
                  </p>
                  
                  <p>
                    <strong>A) Capacity Building - Proficy:</strong> Proficy is PPI's consulting arm, where we work with partner organizations to support them on strategy and communication mandates to help them better deliver on their missions.
                  </p>
                  
                  <p>
                    <strong>B) Community - The PolicySphere:</strong> We run local policy and social impact chapters across India's 20 largest cities to foster an ecosystem of awareness and opportunities. This includes frequent meet-ups, workshops, and more. Visit{' '}
                    <a href="http://linktr.ee/ppicommunities" target="_blank" rel="noopener noreferrer" 
                       className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                      The PolicySphere
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>{' '}
                    to learn more.
                  </p>
                  
                  <p>
                    <strong>C) Careers - Public Policy India:</strong> The parent platform focuses on helping people build meaningful careers through our job boards, newsletter, YouTube channel, public access databases, etc. Explore careers at{' '}
                    <a href="https://publicpolicyindia.com/careers/" target="_blank" rel="noopener noreferrer" 
                       className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                      Public Policy India
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Advisory Section - education-advisory.png (1280x695) - aspect ratio ~1.84:1 */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 text-left">
                <h3 className="font-poppins text-2xl sm:text-3xl font-extrabold text-neutral-800">
                  Education and Advisory role:
                </h3>
                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg font-inter leading-relaxed text-neutral-700 text-left">
                  <p>
                    I have the privilege of serving as a guest/visiting faculty at several institutions across India like{' '}
                    <a href="https://www.linkedin.com/posts/yashagarwalm_good-being-back-in-op-jindal-university-yesterday-activity-7309080368731631616-MjeR" target="_blank" rel="noopener noreferrer" 
                       className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                      Jindal University
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>,{' '}
                    <a href="https://www.linkedin.com/posts/yashagarwalm_so-good-to-be-at-tiss-in-mumbai-yesterday-activity-7287348200594710529-RI_7" target="_blank" rel="noopener noreferrer" 
                       className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                      TISS
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>,{' '}
                    <a href="https://www.linkedin.com/posts/yashagarwalm_always-the-best-being-back-in-ashoka-university-activity-7336606519054036993-i29T" target="_blank" rel="noopener noreferrer" 
                       className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                      Ashoka
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>,{' '}
                    <a href="https://christuniversity.in/" target="_blank" rel="noopener noreferrer" 
                       className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                      Christ
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>,{' '}
                    <a href="https://jmi.ac.in/" target="_blank" rel="noopener noreferrer" 
                       className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                      Jamia University
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>, and{' '}
                    <a href="https://www.linkedin.com/posts/yashagarwalm_taught-a-1-credit-module-for-the-first-time-activity-7276573519272988672-uAEy" target="_blank" rel="noopener noreferrer" 
                       className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                      Symbiosis International University
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>, among others. In this role, I train and prepare thousands of students to become India's future policymakers and more informed/engaged citizens.
                  </p>
                  
                  <p>
                    Skilled in communications, advocacy, strategy, and government relations, what fundamentally drives me is the immense potential of sound policymaking to be a force for social good.
                  </p>
                  
                  <p>
                    I've also had the experience of working with the Government of India, the National Institute of Advanced Studies, Pratham,{' '}
                    <a href="https://jaypanda.in/" target="_blank" rel="noopener noreferrer" 
                       className="text-royal-blue hover:text-green-600 transition-colors duration-300 relative group font-medium">
                      Mr. Baijayant 'Jay' Panda's
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>{' '}
                    Office (National Vice President of BJP), Teach For India, and other notable organizations.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end order-first lg:order-last">
                <div className="w-80 h-44 sm:w-96 sm:h-52 lg:w-[32rem] lg:h-[18rem] xl:w-[36rem] xl:h-[20rem] rounded-2xl shadow-large overflow-hidden">
                  <img 
                    src="/images/education-advisory.png" 
                    alt="Education & Advisory Roles"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center text-neutral-500 font-inter font-medium text-sm sm:text-base hidden">
                    Education Image
                    <br />
                    (1280x695)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center mt-16 space-y-6">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="https://drive.google.com/file/d/1pBp4VUH-lrx_olVcOITarFfdCscHNrdK/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold hover:bg-gold/90 text-neutral-800 font-inter font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold/25"
              >
                A copy of my Resume?
              </a>
              
              <a
                href="https://topmate.io/yashagarwal/page/QY9D1QfvA0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal hover:bg-teal/90 text-neutral-800 font-inter font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal/25"
              >
                Book a detailed 1:1 career chat?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;