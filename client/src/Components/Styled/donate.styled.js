import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
const ImageWrapper = styled.div`
    width:80%;
    margin:auto;
    position:relative;

`
const ImageText=styled.p`
    left:50%;
    color:white;
    position:absolute;
    width:80%;
    text-align:center;
    top: 25%;
    transform:translate(-50%,-50%);

`
const DonationWrapper = styled.div`
    display: flex;
`
const DonateLink = styled(NavLink)`
    
`
const DonateImage = styled.img`
    width:60%;
`
const DonateParagraph = styled.p`
    width:40%;
`
export {ImageWrapper,ImageText,DonationWrapper,DonateLink,DonateImage,DonateParagraph}