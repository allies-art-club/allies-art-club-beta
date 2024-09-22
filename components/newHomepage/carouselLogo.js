import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { CarouselContainer, CarouselWrapper, CarouselItem } from "../Styled/carouselLogo.styled.js";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(5); // Start at the first original image
  const imagesPerPage = 5;
  const transitionDuration = 500; // Transition duration in milliseconds
  const carouselRef = useRef();

  // Client-side fetching of the images inside useEffect
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/assets/partnersLogo/imageList.json');
        const imageList = await response.json();
        const imageUrls = imageList.map(img => `/assets/partnersLogo/${img}`);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 3000); // Rotate every 3 seconds

      return () => clearInterval(interval);
    }
  }, [images]);

  useEffect(() => {
    if (currentIndex === images.length + imagesPerPage) {
      // If we have reached the end of cloned items, reset to the first original image
      setTimeout(() => {
        carouselRef.current.style.transition = "none"; // Disable transition
        setCurrentIndex(imagesPerPage); // Reset to the first original image
      }, transitionDuration);
    } else if (currentIndex === 0) {
      // If we have reached the cloned end, reset to the last original image
      setTimeout(() => {
        carouselRef.current.style.transition = "none"; // Disable transition
        setCurrentIndex(images.length); // Reset to the last original image
      }, transitionDuration);
    }

    if (carouselRef.current) {
      setTimeout(() => {
        carouselRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`; // Re-enable transition
      }, 20); // Small delay to ensure transition is applied
    }
  }, [currentIndex, images.length]);

  // Clone first and last 5 images
  const clonedImages = [
    ...images.slice(-imagesPerPage), // Clone the last 5 images at the start
    ...images,
    ...images.slice(0, imagesPerPage), // Clone the first 5 images at the end
  ];

  return (
    <CarouselContainer id="containerCarousel">
      <CarouselWrapper
        ref={carouselRef}
        style={{ transform: `translateX(-${(currentIndex * (100 / imagesPerPage))}%)` }} // Calculate the transform percentage based on the current index
      >
        {clonedImages.map((src, index) => (
          <CarouselItem key={index}>
            <Image
              src={src}
              alt={`Slide ${index}`}
              width={600}
              height={400}
              layout="responsive"
            />
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
