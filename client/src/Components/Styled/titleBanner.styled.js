import styled from 'styled-components';
const TitleWrapper = styled.div`
    width:100%;
    @media(min-width:768px){
        width:100%;
    }
    display:inline-flex;
    flex-wrap: wrap;
    align-items: start;
    padding:0;
    margin-bottom: 1rem;
    justify-content: ${props=>props.sideSrc1||props.sideSrc2?"auto":"center"};
`

const SideImage = styled.img`
    width:60%;
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
    margin:auto;
    position:relative;
`

const ImageTitle=styled.h1`
    position:${props=>props.centreSrc?"relative":"static"};
    font-weight:100;
    width:100%;
    font-size: ${props=>props.sideSrc1||props.sideSrc2?"1.4rem":"2.5rem"};
    font-family: nickainley;
    @media(min-width:320px){

        font-size: ${props=>props.sideSrc1||props.sideSrc2?"2rem":"3rem"};
    }
    @media(min-width:421px){

    font-size: ${props=>props.sideSrc1&&props.sideSrc2?"2.5rem":"4rem"};
    }
    @media(min-width: 768px){
        font-size: 2.5rem;
    }
    @media(min-width: 1025px){
        font-size: 3rem;
    }
    @media(min-width:1300px){
        font-size: 3.5rem;
    }
    margin:0;
    text-align:center;
`


export {TitleWrapper,SideImage,SideImageWrapper,CentreImage,CentreImageWrapper,ImageTitle};