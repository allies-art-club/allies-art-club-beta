import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const TitleWrapper = styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    align-items: start;
`
const CentreImage = styled.img`
    width:56%;
`
const SideImage = styled.img`
    width:22%;
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
export {TitleWrapper,CentreImage,SideImage,DonationWrapper,DonateLink,DonateImage,DonateParagraph}