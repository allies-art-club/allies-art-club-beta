"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  CarouselContainer,
  CarouselTrack,
  CarouselSlide,
  CarouselImage,
  IndicatorContainer,
  Indicator,
} from "./Styled/carouselAboutUs.styled.js";

const CarouselAboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState([]);

  // Fetch metadata from metadata.json
  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch("/assets/carouselAboutUsPics/metadata.json"); // Correct path to metadata
        const data = await response.json();
        setImages(data); // Set the images from the metadata
      } catch (error) {
        console.error("Error fetching metadata:", error);
      }
    };

    fetchMetadata();
  }, []);

  // Automatic image slider
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // 3-second interval for automatic sliding
      return () => clearInterval(interval);
    }
  }, [images]);

  if (images.length === 0) {
    return <div>Loading...</div>; // Display loading message while images load
  }

  return (
    <CarouselContainer>
      <CarouselTrack activeIndex={activeIndex}>
        {images.map((image, index) => (
          <CarouselSlide key={index}>
            <CarouselImage>
              <Image
                src={image.src} // Use the image path from metadata
                alt={image.alt}
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "0", // Make the image circular
                }}
              />
            </CarouselImage>
          </CarouselSlide>
        ))}
      </CarouselTrack>
      <IndicatorContainer>
        {images.map((_, index) => (
          <Indicator
            key={index}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </IndicatorContainer>
    </CarouselContainer>
  );
};

export default CarouselAboutUs;





