import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
const ImageWrapper = styled.div`
    width:100%;
    margin:auto;
    position:relative;
    clear:both;

`
const DonationWrapper = styled.div`
    display: flex;
    margin-bottom: 10px;
    @media(min-width:767px){
        margin-bottom: 30px;
    }
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
    position:relative;
    text-align:left;
    left:10%;
    width:90%;
    translateY(-40%)
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
    width: 35%;
    transform: translate(${props=>props.top?"55%,-50%":"110%,-45%"});
`
const DonateBannerStar=styled.img`
    width:40%;
    position:relative;
    right:${props=>props.top?"-60%":"auto"};
    @media(min-width:768px){
        right:${props=>props.top?"-65%":"auto"};

    }
`
export {ImageWrapper,DonationWrapper,DonateLink,DonateImage,DonateParagraph,DonateParagraphWrapper,BannerTextImg,BannerTextOverlay,DonateBannerStars,DonateBannerStar}