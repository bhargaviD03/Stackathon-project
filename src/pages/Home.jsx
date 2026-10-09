import React from 'react';
import HeroSlider from '../components/HeroSlider';
import FeatureBar from '../components/FeatureBar';
import ProductsSection from '../components/ProductsSection';
import OurApproach from '../components/OurApproach';
import TeamSection from '../components/TeamSection';
import StatsSection from '../components/StatsSection';
import GallerySection from '../components/GallerySection';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <FeatureBar />
      <ProductsSection />
      <OurApproach />
      <TeamSection />
      <StatsSection />
      <GallerySection />
    </>
  );
};

export default Home;