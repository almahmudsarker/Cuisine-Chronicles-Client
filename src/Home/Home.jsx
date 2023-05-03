import React from 'react';
import './Home.css'
import Slider from '../pages/Slider';
import LazyLoad from '../pages/LazyLoad';
import Section from '../pages/Sections/Section';
import ChefSection from '../pages/ChefSection/ChefSection';
const Home = () => {
    return (
      <>
        <Slider></Slider>
        <ChefSection></ChefSection>
        <Section></Section>
      </>
    );
};

export default Home;