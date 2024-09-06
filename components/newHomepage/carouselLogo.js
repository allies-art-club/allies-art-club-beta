import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CarouselContainer, CarouselWrapper, CarouselItem } from "../Styled/carouselLogo.styled.js";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 5;

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/assets/partnersLogo/imageList.json');
      const imageList = await response.json();
      const imageUrls = imageList.map(img => `/assets/partnersLogo/${img}`);
      setImages(imageUrls);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => {
          // Calculate the next index, wrapping around if needed
          const newIndex = (prevIndex + 1) % Math.ceil(images.length / imagesPerPage);
          return newIndex;
        });
      }, 3000); // Change every 3 seconds

      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <CarouselContainer id="containerCarousel">
      <CarouselWrapper
        style={{ transform: `translateX(-${currentIndex * 20}%)` }} // Move by 20% for each set of 5 images
      >
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <Image
              src={src}
              alt={`Slide ${index}`}
              width={800}
              height={600}
              layout="responsive"
            />
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
