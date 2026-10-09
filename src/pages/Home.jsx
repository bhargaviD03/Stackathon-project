import React from 'react';
import HeroSlider from '../components/HeroSlider';
import FeatureBar from '../components/FeatureBar';
import ProductsSection from '../components/ProductsSection';
import FooterBanner from '../components/Footer';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <FeatureBar />
      <ProductsSection />
    </>
  );
};

export default Home;