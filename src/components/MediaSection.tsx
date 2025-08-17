import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const MediaSection: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver();

  const videoItems = [
    {
      title: "Conversation with Hindustan Times and LiveMint on Policy, careers, skills and this emerging space at large!",
      url: "https://www.youtube.com/watch?v=Go_lSQVqVl0&t=12s",
      embedId: "Go_lSQVqVl0"
    },
    {
      title: "In conversation with Vikram Chandra (Starting at 22 min mark!)",
      url: "https://www.youtube.com/watch?v=kJLzwDXpuZA",
      embedId: "kJLzwDXpuZA"
    },
    {
      title: "In conversation with Barkha Dutt",
      url: "https://www.youtube.com/watch?v=aTEP_qnix1I",
      embedId: "aTEP_qnix1I"
    },
    {
      title: "In conversation with Nidhi Razdan on NDTV.",
      url: "https://www.youtube.com/watch?v=9m73bTpYzbU",
      embedId: "9m73bTpYzbU"
    }
  ];

  const articleItems = [
    {
      title: "The changing landscape of Social Media and online identities",
      url: "https://indianexpress.com/article/opinion/columns/meta-paid-verification-twitter-big-tech-model-challenges-8458633/",
      publication: "Indian Express"
    },
    {
      title: "A series of Essays on Law and Policy-Making in India",
      url: "https://theleaflet.in/author/yash-agarwal",
      publication: "The Leaflet"
    }
  ];

  return (
    <section id="media" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div 
          ref={elementRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12 lg:mb-16 text-neutral-900">
            Media appearances + Publications
          </h2>
          
          {/* Video Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {videoItems.map((video, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300 hover:scale-105">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-t-2xl"
                  ></iframe>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-inter font-semibold text-base sm:text-lg text-neutral-900 mb-3">
                    {video.title}
                  </h3>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-royal-blue hover:text-teal font-medium transition-colors duration-300 relative group text-sm sm:text-base"
                  >
                    Watch on YouTube
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {articleItems.map((article, index) => (
              <div key={index} className="bg-gradient-to-br from-light-blue to-neutral-50 rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center h-16 sm:h-20 mb-4 sm:mb-6 bg-white rounded-lg shadow-soft">
                  <div className="text-royal-blue font-inter font-bold text-base sm:text-lg">
                    {article.publication}
                  </div>
                </div>
                <h3 className="font-inter font-semibold text-lg sm:text-xl text-neutral-900 mb-4">
                  {article.title}
                </h3>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-royal-blue hover:bg-royal-blue/90 text-white font-inter font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-royal-blue/25 text-sm sm:text-base"
                >
                  Read Article
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;