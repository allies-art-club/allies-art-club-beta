import styled from 'styled-components';


//Headings
const HeadingMain = styled.h1`

`
const SubHeading = styled.h2`

`
//Page Navigation
const PageNavWrap = styled.nav`

`
const PageNavList = styled.ul`

`
const PageNavItem = styled.li`

`
//Main page elements
const Section = styled.section`

`
const SubSection = styled.div`

`
const Paragraph = styled.p`

`
//Carousel elements
const CarouselContainer =styled.div`
    width: 80%;
    border: 2px solid yellow;
    margin:auto;
`
const Slide = styled.div`
    width: 50%;
    margin: auto;
    overflow:hidden;
    height: 400px;
    position: relative;
`
const CarouselImage = styled.img`
    position: absolute;
    width: 100%;
    border-radius: 50%;
    left: ${props=>{
        return props.index*100;
    }
    }%;
    transition-duration: ${props=>{
        if((props.direction==='left'&& props.index===-1)||(props.direction==='right'&&props.index===2)){
            return 'none';
        }
        else{
            return '0.5s'
        }
    }};
`


export {HeadingMain,SubHeading,PageNavWrap,PageNavList,PageNavItem,Section,SubSection,Paragraph,CarouselImage,CarouselContainer,Slide,};