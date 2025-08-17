import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const WhatDoYouDoSection: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver();

  return (
    <section id="what-do-you-do" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-teal-600/90"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={elementRef}
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Okay… but what exactly do you do?
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-2xl border border-white/20 mb-12">
            <div className="space-y-8 text-lg font-merriweather text-white leading-relaxed">
              <p className="text-xl font-semibold text-yellow-400">
                My work revolves around three key areas:
              </p>

              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-yellow-400 mb-4">
                    Tech Policy & Internet Governance:
                  </h3>
                  <div className="space-y-4 pl-4">
                    <p>
                      I've always held full-time roles in this domain, working for organizations focused on solving emerging technology policy and Internet governance challenges in India and beyond.
                    </p>
                    
                    <p>
                      Currently, I serve as the Stakeholder Engagement Manager for South Asia at the Internet Corporation for Assigned Names and Numbers (ICANN). My responsibilities include developing and maintaining an extensive network of key government, technical, and civil society stakeholders.
                    </p>
                    
                    <p>
                      This involves establishing a collaborative framework for stakeholder engagement that improves regional policy alignment and fosters a unified approach to Internet governance across the six countries in South Asia to enable a stable, secure, and unified global Internet for all.
                    </p>
                    
                    <p>
                      Before my current role at ICANN, I worked for Twitter India and South Asia (now X.com) for a couple of years in a policy and partnership role. I started at Twitter as their first-ever Public Policy Fellow from South Asia (designated as a Public Policy Coordinator) and was promoted to Public Policy Associate within eight months.
                    </p>
                    
                    <p>
                      Preceding my stint at Twitter, I worked as an Associate Consultant at Chase Advisors, an APAC-focused public policy advocacy and consulting firm working with clients across various sectors and focus areas.
                    </p>
                    
                    <p>
                      Earlier, I worked as a LAMP (Legislative Assistant to Member of Parliament) Fellow to a four-term State Cabinet Minister of Assam and current Member of Parliament. I was selected for a cohort of 50 from a pool of over 5,000 applicants.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-poppins font-bold text-yellow-400 mb-4">
                    Building the Public Policy Ecosystem:
                  </h3>
                  <div className="space-y-4 pl-4">
                    <p>
                      I founded and lead Public Policy India (PPI), the largest community-driven knowledge and engagement platform dedicated to building and shaping India's burgeoning Public Policy and Social Impact space. PPI's mission is to grow the entire public policy "pie" in India through content, community, careers, and capacity building.
                    </p>
                    
                    <p>
                      This initiative, which I founded over five years ago and currently lead, is the largest (with more than 100,000 members and growing) community-driven knowledge and engagement platform dedicated to building and shaping India's burgeoning Public Policy and Social Impact space.
                    </p>
                    
                    <p>
                      PPI's mission is to actively shape the public policy space in India through a range of engagements across its content, community, careers, and capacity-building verticals.
                    </p>
                    
                    <div className="space-y-3 mt-4">
                      <p>
                        <strong className="text-teal-300">A) Capacity Building – Proficy:</strong> Proficy is PPI's consulting arm, where we work with partner organizations to support them on strategy and communication mandates to help them better deliver on their missions.
                      </p>
                      
                      <p>
                        <strong className="text-teal-300">B) Community – The PolicySphere:</strong> We run local policy and social impact chapters across India's 20 largest cities to foster an ecosystem of awareness and opportunities. This includes frequent meet-ups, workshops, and more.
                      </p>
                      
                      <p>
                        <strong className="text-teal-300">C) Careers – Public Policy India:</strong> The parent platform focuses on helping people build meaningful careers through our job boards, newsletter, YouTube channel, public access databases, etc.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-poppins font-bold text-yellow-400 mb-4">
                    Training India's youth:
                  </h3>
                  <div className="space-y-4 pl-4">
                    <p>
                      I have the privilege of serving as a guest/visiting faculty at several institutions across India like Jindal University, TISS, Ashoka, Christ, and Symbiosis International University, among others. In this role, I train and prepare thousands of students to become India's future policymakers and more informed/engaged citizens.
                    </p>
                    
                    <p>
                      Skilled in communications, advocacy, strategy, and government relations, what fundamentally drives me is the immense potential of sound policymaking to be a force for social good.
                    </p>
                    
                    <p>
                      I've also had the experience of working with the Government of India, the National Institute of Advanced Studies, Pratham, Mr. Baijayant 'Jay' Panda's Office (National Vice President of BJP), Teach For India, and other notable organizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="https://drive.google.com/file/d/1pBp4VUH-lrx_olVcOITarFfdCscHNrdK/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-poppins font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/25"
              >
                A copy of my Resume?
              </a>
              
              <a
                href="https://topmate.io/yashagarwal/page/QY9D1QfvA0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-poppins font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/25"
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

export default WhatDoYouDoSection;