import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <Pricing />
      <CallToAction />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;