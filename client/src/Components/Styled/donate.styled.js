import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
const ImageWrapper = styled.div`
    width:100%;
    margin:auto;
    position:relative;

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
`
const DonateLink = styled(NavLink)`
    
`
const DonateImage = styled.img`
    width:80%;
`
const DonateParagraph = styled.p`
    width:40%;
`
export {ImageWrapper,ImageText,DonationWrapper,DonateLink,DonateImage,DonateParagraph}