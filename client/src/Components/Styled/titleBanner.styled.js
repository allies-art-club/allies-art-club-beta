import styled from 'styled-components';
const TitleWrapper = styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    align-items: start;
`

const SideImage = styled.img`
    width:70%;
    display:block;
    margin:auto;
`
const SideImageWrapper=styled.div`
    width:22%;
`
const CentreImage = styled.img`
    width:100%
`
const CentreImageWrapper=styled.div`
    width:56%;
    margin:0;
    position:relative;
`

const ImageTitle=styled.h1`
    position:absolute;
    top:120%;
    font-weight:100;
    width:100%;
    font-size: 1rem;
    font-family: nickainley;
    @media(min-width:320px){
        font-size: 1.5rem;
    }
    @media(min-width:421px){
        font-size: 2rem;
    }
    @media(min-width: 768px){
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