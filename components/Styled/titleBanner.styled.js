import styled from 'styled-components';
const TitleWrapper = styled.div`
    width:100%;
    @media(min-width:768px){
        width:${props=>props.$sideSrc1&&props.$sideSrc2?"calc(100% + 80px + 2rem)":"100%"};
        transform:${props=>props.$sideSrc1&&props.$sideSrc2?"translateX(calc(-40px - 1rem))":"none"};
    }
    display:inline-flex;
    flex-wrap: wrap;
    align-items: start;
    padding:0;
    margin-bottom: 1rem;
    justify-content: ${props=>props.$sideSrc1||props.$sideSrc2?"auto":"center"};
`

const SideImage = styled.img`
    width:${props=>props.$shootingStar?"50":"60"}%;
    transform:translateY(1rem);
    display:block;
    margin-left:${props=>props.$right?"auto":"0"};
    margin-right:${props=>props.$right?"0":"auto"};
    @media(min-width:768px){
        margin:auto;
    }

`
const SideImageWrapper=styled.div`
    width:${props=>props.$sideSrc1&&props.$sideSrc2?"22%":"28%"};
`
const CentreImage = styled.img`
    display:block;
    margin:auto;
    width:${props=>props.$sideSrc1&&props.$sideSrc2?"100%":"56%"};

`
const RibbonImage = styled.img`
    display:block;
    margin:auto;
    width:100%;
`
const CentreImageWrapper=styled.div`
    width:${props=>props.$sideSrc1&&props.$sideSrc2?"56%":"100%"};
    margin:auto;
    position:relative;
`

const ImageTitle=styled.h1`
    position:${props=>props.$centreSrc?"relative":"static"}
    width:100%;
    font-size: 1.1rem;
    font-family:  "--font-arial-nova-cond-bold";
    font-weight: 800;
    @media(min-width:320px){
        font-size: 1.3rem;
    }

    @media(min-width:481px){
        font-size: 1.9rem;
    }
    @media(min-width: 1025px){
        font-size: 2.5rem;
    }
    margin:0;
    text-align:center;
`

export {TitleWrapper,SideImage,SideImageWrapper,CentreImage,RibbonImage,CentreImageWrapper,ImageTitle};