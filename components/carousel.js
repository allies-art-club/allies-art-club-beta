"use client";

import React, { useState, useEffect } from "react";
import {
  CarouselImage,
  CarouselContainer,
  Slide,
  ChevronWrapper,
  Arrow,
  NavClick,
  Figure,
  FigCaption,
  CaptionContent,
  ZoomedImage,
  ZoomOverlay,
} from "./Styled/carousel.styled.js";

const Carousel = (props) => {
  const [zoomedIndex, setZoomedIndex] = useState(null); // State to track zoomed image index

  useEffect(() => {
    const interval = setInterval(() => {
      props.carouselClick("right");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Reset image indices if they are not set correctly
  if (
    !props.imageIndices.length ||
    props.imageIndices.length !== props.carouselObj.length
  ) {
    props.imageIndices.splice(0, props.imageIndices.length);
    for (var i = 0; i < props.carouselObj.length; i++) {
      props.imageIndices.push(i - 1);
    }
  }

  const handleImageClick = (index) => {
    setZoomedIndex(index); // Set the zoomed image index
  };

  const handleCloseZoom = () => {
    setZoomedIndex(null); // Reset zoomed image index
  };

  return (
    <>
      <CarouselContainer data-test="carouselContainer">
        <Slide $square={props.square}>
          {props.carouselObj.map((photo, i) => (
            <NavClick
              $square={props.square}
              $length={props.imageIndices.length - 2}
              $direction={props.direction}
              $index={props.imageIndices[i]}
              href={photo.url}
              key={i}
              onClick={() => handleImageClick(i)} // Set image click handler
            >
              <Figure $square={props.square}>
                <picture style={{ margin: "auto" }}>
                  <source
                    media="(max-width:480px)"
                    srcSet={`${photo.src}-small.${photo.fileType} 1x, ${
                      photo.src + "-2x." + photo.fileType + " 2x"
                    }`}
                  />
                  <source
                    media="(min-width:481px) and (max-width:767px)"
                    srcSet={`${photo.src}-medium.${photo.fileType} 1x, ${
                      photo.src + "-2x." + photo.fileType + " 2x"
                    }`}
                  />
                  <source
                    media="(min-width:768px)"
                    srcSet={`${photo.src}-large.${photo.fileType} 1x, ${photo.src}-2x.${photo.fileType} 2x`}
                  />
                  <CarouselImage
                    $square={props.square}
                    src={photo.src + "-large." + photo.fileType}
                    srcSet={`${photo.src + "-small." + photo.fileType} 180w,${
                      photo.src + "-medium." + photo.fileType
                    } 260w, ${photo.src + "-large." + photo.fileType} 400w`}
                    alt={"photo" + i}
                  />
                </picture>
                <FigCaption $square={props.square}>
                  <CaptionContent>{photo.caption}</CaptionContent>
                </FigCaption>
              </Figure>
            </NavClick>
          ))}
        </Slide>
        <ChevronWrapper $square={props.square}>
          <Arrow
            onClick={() => {
              props.carouselClick("left");
            }}
            $direction={"left"}
            src={"../../../assets/carousel/arrow.png"}
            alt="scroll left"
          />
          <Arrow
            onClick={() => {
              props.carouselClick("right");
            }}
            $direction={"right"}
            src={"../../../assets/carousel/arrow.png"}
            alt="scroll right"
          />
        </ChevronWrapper>
      </CarouselContainer>

      {/* Full-Screen Zoom Overlay */}
      {zoomedIndex !== null && (
        <ZoomOverlay onClick={handleCloseZoom}>
          <ZoomedImage>
            <img
              src={
                props.carouselObj[zoomedIndex].src +
                "-large." +
                props.carouselObj[zoomedIndex].fileType
              }
              alt={`zoomed-${zoomedIndex}`}
            />
          </ZoomedImage>
        </ZoomOverlay>
      )}
    </>
  );
};

export default Carousel;
