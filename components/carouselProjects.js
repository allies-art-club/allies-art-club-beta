"use client";


import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Modal, ModalImage, Image } from "./Styled/carouselProjects.styled.js";

const CarouselProjects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        // Fetch the image metadata
        fetch('/assets/carouselProjects/metadata.json')
            .then(response => response.json())
            .then(data => setImageList(data))
            .catch(error => console.error('Error loading image metadata:', error));
    }, []);

    // Settings for the carousel
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Enable automatic sliding
      autoplaySpeed: 2000, // Delay between slides (in milliseconds)
      rtl: false, // Left-to-right scrolling
    };

    const handleImageClick = (src) => {
      setSelectedImage(src);
      setModalOpen(true);
    };

    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Slider {...settings}>
          {imageList.map((src, index) => (
            <div key={index}>
              <Image
                src={src}
                alt={`carousel-image-${index}`}
                onClick={() => handleImageClick(src)}
              />
            </div>
          ))}
        </Slider>

        {modalOpen && (
          <Modal onClick={() => setModalOpen(false)}>
            <ModalImage src={selectedImage} alt="modal" />
          </Modal>
        )}
      </div>
    );
};

export default CarouselProjects;
