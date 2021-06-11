import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const ArticleWrapper=styled.div`

display:flex;
flex-direction:${props=>props.right?"row-reverse":"row"};
`
const TextWrap=styled.div`
    width:50%;
`
const ArticleTitle=styled.h2`
    text-align:center;
`
const ArticleLink = styled(NavLink)`
    text-decoration:none;
    color: black;
`
const ArticleSummary = styled.p`

`
const Figure=styled.figure`
    width:50%;
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
export {ArticleWrapper,ArticleLink,TextWrap,ArticleTitle,ArticleSummary,Figure,ArticleImage,PublishingDate,RememberAllieHeading}