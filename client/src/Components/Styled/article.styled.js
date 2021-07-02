import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {boxGlow} from './theme/theme.js';
const ArticleWrapper=styled.div`
    display:flex;
    flex-direction:${props=>props.right?"row-reverse":"row"};
    align-items: center;
    margin:20px 0px;
    @media(min-width:768px){
        margin-bottom:60px;
    }
`
const TextContainer=styled.div`
    position:relative;
    width:55%;
    height: 80px;
    display:table-cell;
    vertical-align:middle;
    @media(min-width:421px){
        height:100px;
    }
    @media(min-width:768px){
        height: 150px;
    }
    @media(min-width:1025px){
        height: 200px;
    }
    @media(min-width:1300px){
        height: 250px;
    }
`
const TextWrap=styled.div`
    margin:auto;
    display:inline-flex;
    flex-direction: column;
    justify-content: space-evenly;
    height:74px;
    @media(min-width:421px){
        height:94px;
        margin:0 15px;
    }
    @media(min-width:768px){
        height: 144px;
    }
    @media(min-width:1025px){
        height: 194px;
    }
    @media(min-width:1300px){
        height: 244px;
    }
`
const ArticleTitle=styled.h2`
    text-align:center;
    font-size: 1rem;
    font-family: nickainley;
    font-weight: 100;
    margin:0;
    
    @media(min-width:320px){
        font-size: 1.3rem;
    }
    @media(min-width: 1025px){
        font-size: 2rem;
    }
    @media(min-width:1300px){
        font-size: 2.3rem;
    }
`
const ArticleLink = styled(NavLink)`
    text-decoration:none;
    color: black;
`
const ArticleSummary = styled.p`
    margin: 0;
    font-size:0.8rem;
    line-height: ${props=>props.largeHeading?"0.8rem":"1rem"};
`
const Figure=styled.figure`
    position:relative;
    width:45%;
    margin:0;
`
const ArticleImage=styled.img`
    width:80%;
    margin:auto;
    display:block;
    border-radius:50%;
    transition: 0.5s;
    &:hover {
        box-shadow: ${boxGlow};
    }
`
const PublishingDate=styled.figcaption`
    text-align: center;
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    width: 100%;
    text-align:center;
`
const RememberAllieHeading=styled.h2`
    
`
const ArticleDetailsWrapper=styled.div`
    position:absolute;
    bottom:-25px;
    @media(min-width:421px){
        bottom:-30px;
    }
    @media(min-width:768px){
        bottom:-50px;
    }
    display:flex;
    justify-content:space-between;
    width:100%;
`
const ArticleItem=styled.p`
    font-size:0.7rem;
    @media(min-width:768px){
        font-size:0.8rem;
    }
`
const Border = styled.img`
    position:absolute;
    top:${props=>props.top?"0":"auto"};
    bottom:${props=>props.top?"auto":"0"};
    width:90%;
    left: 50%;
    transform: translateX(-50%);
`
const BenefitWrapper = styled.figure`
    width:120px;
    margin:0;
    @media(min-width:421px){
        width:150px
    }
    @media(min-width: 768px){
        width:200px;
    }
    position: relative;
`
const Benefit=styled.figcaption`
    position:absolute;
    color:white;
    text-align: center;
    display:block;
    margin-bottom:10px;
    top:50%;
    left: 50%;
    transform:translate(-40%,-35%);
    width:100px;
    font-family: Teko;
    text-transform:uppercase;
    font-size:${props=>props.values?"30px":"14px"};
    line-height:${props=>props.values?"30px":"14px"};

    @media(min-width:421px){
        width:110px;
        font-size:${props=>props.values?"40px":"20px"};

    }
    line-height:${props=>props.values?"40px":"20px"};  
    @media(min-width: 768px){
        width:120px;
        font-weight:900;
    }
`
const ArticleList = styled.ul`
    list-style-type: ${props=> props.bullets?"auto":"none"};
`
const StickyNote= styled.img`
    width: 100%;

`
const BenefitText=styled.p`
    
`

export {ArticleWrapper,ArticleLink,TextContainer,TextWrap,ArticleTitle,ArticleSummary,Figure,ArticleImage,PublishingDate,RememberAllieHeading,ArticleDetailsWrapper,ArticleItem,Border,Benefit,ArticleList, BenefitText,BenefitWrapper,StickyNote}