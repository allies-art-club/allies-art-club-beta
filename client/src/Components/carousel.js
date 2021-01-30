import React from 'react';
import {CarouselImage,CarouselContainer, Slide,ChevronWrapper,Arrow} from './Styled/carousel.styled.js';

const Carousel = (props) => {
    return(
        <CarouselContainer>

            <Slide>
                    {
                        props.photos.map((photo,i)=>{
                            props.imageIndices.push(i-1);
                            console.log(i-1)
                            return(
                                <>
                                    <CarouselImage key={i-1} index={props.imageIndices[i]} direction={props.direction} src={props.photoLoc+photo} alt={'photo'+i}/>
                                </>
                            )
                        })
                    }
            
            </Slide>
            <ChevronWrapper>
                <Arrow onClick={()=>{props.carouselClick('left')}} direction={"left"} src={'../../../assets/carousel/arrow.png'} />
                <Arrow onClick={()=>{props.carouselClick('right')}} direction={"right"} src={'../../../assets/carousel/arrow.png'} />
            </ChevronWrapper>
        </CarouselContainer>
    )
}

export default Carousel;