import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
const ImageWrapper = styled.div`
    width:100%;
    margin:auto;
    position:relative;
    clear:both;

`
const ImageText=styled.p`

    left:50%;
    color:white;
    position:absolute;
    width:80%;
    text-align:center;
    top: 11%;
    transform:translate(-52%,5%);
    font-size:7px;
    @media(min-width:360px){
        font-size:10px;
    }
    @media(min-width:421px){
        font-size: 12px;
    }
    @media(min-width:540px){
        font-size:16px;
    }
    @media(min-width:660px){
        font-size:20px;
    }
    @media(min-width:768px){
        font-size: 13px
    }
    @media(min-width:870px){
        font-size: 16px;
    }
    @media(min-width:970px){
        font-size: 18px;
    }
    @media(min-width:1070px){
        font-size: 20px;
    }
    @media(min-width:1170px){
        font-size: 22px;
    }
    @media(min-width:1270px){
        font-size: 24px;
    }
    @media(min-width:1370px){
        font-size: 26px;
    }
    @media(min-width:1470px ){
        top:15%;
    }
`
const DonationWrapper = styled.div`
    display: flex;
    margin-bottom: 200px;
`
const DonateLink = styled(NavLink)`
    position:relative;
    width:60%;
    
`
const DonateImage = styled.img`
    width:100%;
`
const DonateParagraphWrapper=styled.div`
    width:40%;
`
const DonateParagraph = styled.p`
    width:100%;
`
const BannerTextImg = styled.object`
    position: absolute;
    left: 10%;
    width:80%;
    top: 10%;
`
const BannerTextOverlay = styled.div`
position: absolute;
left: 10%;
width:80%;
height: calc(100vw * 0.7 * 0.6 * 0.33332769556);
top: 10%;
z-index:2;
`
const DonateBannerStars = styled.img`
    position:absolute;
    width: 35%;
    left: ${props=>props.top?"22%":"auto"};
    right: ${props=>props.top?"auto":"22%"};
    bottom:-25%;
`
const DonateBannerStar=styled.img`
    width:60%;
    position:relative;
    right:${props=>props.top?"-50%":"auto"};
`
export {ImageWrapper,ImageText,DonationWrapper,DonateLink,DonateImage,DonateParagraph,DonateParagraphWrapper,BannerTextImg,BannerTextOverlay,DonateBannerStars,DonateBannerStar}