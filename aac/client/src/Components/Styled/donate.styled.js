import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
const ThankYouWrap=styled.div`
    width:100%;
    margin-top:30px;
    @media(min-width:768px){
        margin-top:70px;
    }
`
const ImageWrapper = styled.div`
    width:${props=>props.thankYou?"70":"100"}%;
    margin:auto;
    position:relative;
    clear:${props=>props.thankYou?"inherit":"both"};

`
const DonationWrapper = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media(min-width:767px){
        margin-bottom: 50px;
    }
    @media(min-width:1025px){
        margin-bottom: 70px;
    }
    @media(min-width:1300px){
        margin-bottom: 100px;
    }
`
const DonateLink = styled(NavLink)`
    position:relative;
    width:60%;

    &:hover {
        img{
            filter: hue-rotate(270deg);

        }
    }
    
`
const ExternalLink = styled.a`
    position:relative;
    width:60%;

    &:hover {
        img{
            filter: hue-rotate(270deg);

        }
    }
    
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
    left: 3%;
    width:90%;
    top: ${props=>props.article?"11%":"15%"};
`
const BannerTextOverlay = styled.div`
position: absolute;
left: 10%;
width:80%;
height: calc(100vw * 0.7 * 0.6 * 0.33332769556);
top: 10%;
z-index:2;
`
const DonateBannerStar=styled.img`
    width:30%;
    position:relative;
    right:${props=>props.top?"-60%":"auto"};
    @media(min-width:768px){
        right:${props=>props.top?"-65%":"auto"};

    }
`
const SideImg=styled.img`
    width:${props=>props.donate?"13%":"10%"};
    margin-right:${props=>props.left?"2%":"3%"};
    margin-left:${props=>props.left?"3%":"2%"};
    float:${props=>props.left?"left":"right"};
    position:${props=>props.donate?"absolute":"static"};
    botom:0;
    right:5%;
    @media(max-width:767px){
        display:${props=>props.donate?"none":"block"};
    }
`

const Currency=styled.span`
    position:absolute;
    top:50%;
    left:0;
    transform:translate(170%,-60%);
    @media(min-width:481px){
        transform:translate(150%,-55%);

    }
    @media(min-width:768px){
        transform:translate(100%,-55%);
    }
    @media(min-width:1300px){
        transform:translate(60%,-55%);
    }
`
export {ThankYouWrap,ImageWrapper,DonationWrapper,DonateLink,ExternalLink,DonateImage,DonateParagraph,DonateParagraphWrapper,BannerTextImg,BannerTextOverlay,DonateBannerStar,SideImg,Currency}