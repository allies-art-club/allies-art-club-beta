import styled from 'styled-components';
const TitleWrapper = styled.div`
    margin-left:-10px;
    width:${props=>(props.sideSrc1&&props.sideSrc2)?"calc(100% + 10px)":"calc(56% + 10px)"};
    @media(min-width:768px){
        margin-left:-60px;
        width:${props=>(props.sideSrc1&&props.sideSrc2)?"calc(100% + 120px)":"calc(56% + 60px)"};
    }
    display:inline-flex;
    flex-wrap: wrap;
    align-items: start;
    padding:0;
`

const SideImage = styled.img`
    width:70%;
    display:block;
    margin:auto;
`
const SideImageWrapper=styled.div`
    width:${props=>props.sideSrc1&&props.sideSrc2?"22%":"28%"};
`
const CentreImage = styled.img`
    width:100%
`
const CentreImageWrapper=styled.div`
    width:${props=>props.sideSrc1&&props.sideSrc2?"56%":(props.sideSrc1||props.sideSrc2)?"72%":"100%"};
    margin:0;
    position:relative;
`

const ImageTitle=styled.h1`
    position:${props=>props.centreSrc?"absolute":"static"};
    top:120%;
    font-weight:100;
    width:100%;
    text-align:center;
    font-size: 1.4rem;
    font-family: nickainley;
    @media(min-width:320px){
        font-size: 2rem;
    }
    @media(min-width:421px){
        font-size: 2.5rem;
    }
    @media(min-width: 1025px){
        font-size: 3rem;
    }
    @media(min-width:1300px){
        font-size: 4rem;
    }
    margin:0;
    text-align:center;
`


export {TitleWrapper,SideImage,SideImageWrapper,CentreImage,CentreImageWrapper,ImageTitle};