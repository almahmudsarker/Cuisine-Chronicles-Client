import React from 'react';
import Image from "../assets/images/backgrounds/bg-1.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container } from 'react-bootstrap';
const LazyLoad = () => {
    return (
      <Container>
        <LazyLoadImage src={Image} width={600} height={400} alt="Image Alt" />
      </Container>
    );
};

export default LazyLoad;