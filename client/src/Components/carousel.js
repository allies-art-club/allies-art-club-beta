import React,{Fragment} from 'react';
import {CarouselImage,CarouselContainer, Slide,ChevronWrapper,Arrow} from './Styled/carousel.styled.js';

const Carousel = (props) => {
    return(
        <CarouselContainer data-test="carouselContainer">

            <Slide>
                    {
                        props.photos.map((photo,i)=>{
                            props.imageIndices.push(i-1);
                            console.log(i-1)
                            return(
                                <Fragment key={i-1}>
                                    <CarouselImage index={props.imageIndices[i]} direction={props.direction} src={props.photoLoc+photo} alt={'photo'+i}/>
                                </Fragment>
                            )
                        })
                    }
            
            </Slide>
            <ChevronWrapper>
                <Arrow onClick={()=>{props.carouselClick('left')}} direction={"left"} src={'../../../assets/carousel/arrow.png'} alt="scroll left" />
                <Arrow onClick={()=>{props.carouselClick('right')}} direction={"right"} src={'../../../assets/carousel/arrow.png'} alt="scroll right"/>
            </ChevronWrapper>
        </CarouselContainer>
    )
}

export default Carousel;