import React from 'react';
import { Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/yashagarwalm/",
      label: "LinkedIn"
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/yashagarwalm",
      label: "Instagram"
    },
    {
      icon: Youtube,
      url: "https://www.youtube.com/@PublicPolicyIndia",
      label: "YouTube"
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-yellow-300 via-green-300 to-teal-400 text-neutral-800 py-8 sm:py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-6 sm:space-x-8 mb-6 sm:mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:text-royal-blue transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <IconComponent size={28} className="sm:w-8 sm:h-8" />
                </a>
              );
            })}
          </div>
          
          <p className="text-neutral-700 font-inter text-sm sm:text-base">
            © 2025 Yash Agarwal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;