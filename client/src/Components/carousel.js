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
                                        <picture>
                                            <source media="(max-width:480px)" srcSet={`${photo.src}-small.png, ${photo.src+"-large.png 2x"}`} />
                                            <source media="(min-width:481px) and (max-width:767px)" srcSet={`${photo.src}-medium.png, ${photo.src+'-large.png 2x'}`}/>
                                            <source media="(min-width:768px)" srcSet={photo.src+"-large.png"} />
                                            <CarouselImage   src={photo.src+"-large.png"} srcSet={`${photo.src+"-small.png"} 180w,${photo.src+"-medium.png"} 260w, ${photo.src+"-large.png"} 400w`}alt={'photo'+i}/>
                                        </picture>
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