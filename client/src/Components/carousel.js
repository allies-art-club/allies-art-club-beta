import React from 'react';
import {CarouselImage,CarouselContainer, Slide,ChevronWrapper,Arrow,NavClick,Figure,FigCaption,CaptionContent} from './Styled/carousel.styled.js';

const Carousel = (props) => {
    
    if(!props.imageIndices.length){
        for(var i = 0; i<props.carouselObj.length;i++){
            props.imageIndices.push(i-1);
            console.log('YEHHH',props.imageIndices)
        }

    }
    return(
        <CarouselContainer data-test="carouselContainer">

            <Slide>
                    {
                        props.carouselObj.map((photo,i)=>{
                            return(
                                <NavClick length={props.imageIndices.length-2}direction={props.direction} index={props.imageIndices[i]} exact to={photo.url}key={i-1}>
                                    <Figure>
                                        <CarouselImage   src={photo.src} alt={'photo'+i}/>
                                        <FigCaption><CaptionContent>{photo.caption}</CaptionContent></FigCaption>
                                    </Figure>
                                </NavClick>
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