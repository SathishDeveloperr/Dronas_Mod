import React from 'react';
import Navbar from './component/navbar';
import HeroSection from './component/HeroSection';
import FeatureSection from './component/FeatureSection';
import Workflow from './component/Workflow';
import Pricing from './component/Pricing';
import Testimonials from './component/Testimonials';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="" >
        <HeroSection />
      </div>
    </>
  );
}

export default App;


/*<FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer /> */