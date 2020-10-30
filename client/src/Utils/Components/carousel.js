import React from 'react';
import image1 from '../../assets/smiling-face.png';
import image2 from '../../assets/smiley.jpg';
import image3 from '../../assets/grinning-face-with-smiling-eyes.png';
import image4 from '../../assets/smiling-face-with-open-mouth.png';
import './component.css';
import {CarouselImage,CarouselContainer, Slide} from './Styled/styled.js'
const Carousel = (props) => {
    return(
        <CarouselContainer>
            <Slide>
                <CarouselImage index={props.imageIndices[0]} direction={props.direction} src={image1} alt='smile'/>
                <CarouselImage index={props.imageIndices[1]} direction={props.direction} src={image2} alt='smile'/>
                <CarouselImage index={props.imageIndices[2]} direction={props.direction} src={image3} alt='smile'/>
                <CarouselImage index={props.imageIndices[3]} direction={props.direction} src={image4} alt='smile'/>
            </Slide>
            <div className="chevron-wrapper">
                <div className="left-arrow" onClick={()=>{props.carouselClick('left')}}>
                    
                </div>
                <div className="right-arrow" onClick={()=>{props.carouselClick('right')}}>

                </div>
            </div>
            {/* <div className="curtains">
                <div className="left-curtain">

                </div>
                <div className="right-curtain">

                </div>
            </div> */}
        </CarouselContainer>
    )
}

export default Carousel;