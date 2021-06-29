import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {theme} from './theme/theme.js';
const ArticleWrapper=styled.div`

display:flex;
flex-direction:${props=>props.right?"row-reverse":"row"};
align-items: center;
margin:20px 0px;
@media(min-width:768px){
    margin:40px 0px;
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
    border-top: 5px dashed ${theme.pink};
    border-bottom: 5px dashed ${theme.pink};
`
const TextWrap=styled.div`
    margin:auto;
    display:inline-block;
`
const ArticleTitle=styled.h2`
    text-align:center;
    font-size: 1.2rem;
    font-family: nickainley;
    font-weight: 100;
    margin:0;
    
    @media(min-width:320px){
        font-size: 1.6rem;
    }
    @media(min-width: 1025px){
        font-size: 2.5rem;
        margin:10px 0;
    }
    @media(min-width:1300px){
        font-size: 3rem;
    }
`
const ArticleLink = styled(NavLink)`
    text-decoration:none;
    color: black;
`
const ArticleSummary = styled.p`
    margin: 0;
    font-size:0.8rem;


`
const Figure=styled.figure`
    width:45%;
    margin:0;
`
const ArticleImage=styled.img`
    width:80%;
    margin:auto;
    display:block;
    border-radius:50%;
`
const PublishingDate=styled.figcaption`
    text-align: center;
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
const Benefit=styled.h3`
    background-color:${theme.pink};
    display:block;
    line-height: 40px;
    margin-bottom:10px;
    @media(min-width: 768px) and (max-width:1024px){
        line-height: 30px;
        font-size:18px;
    }
    @media(min-width: 768px){
        width: 25%;
    }
    text-align: center;
`
export {ArticleWrapper,ArticleLink,TextContainer,TextWrap,ArticleTitle,ArticleSummary,Figure,ArticleImage,PublishingDate,RememberAllieHeading,ArticleDetailsWrapper,ArticleItem,Benefit}