import React from 'react';
import ScrollProgressBar from './components/ScrollProgressBar';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import MediaSection from './components/MediaSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <MediaSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;