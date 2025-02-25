import React from 'react';
import HeaderCont from '../components/HeaderCont';
import Navigation from '../components/Navigation';
import Service from '../components/Skill';
import AboutSection from '../components/AboutSection';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeaderCont />
      <div className='z-50 sticky top-0'>
        <Navigation />
      </div>
      <div>
      <HeroSection/>
      <AboutSection />
      <Service />
      <Works />
      <Contact />
     
      </div>
      <Footer />
    </div>
  );
};

export default Home;
