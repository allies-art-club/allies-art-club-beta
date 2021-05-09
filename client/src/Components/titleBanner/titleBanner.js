import React from 'react';
import {TitleWrapper,SideImage,CentreImage} from '../Styled/donate.styled';

const TitleBanner = (props) => {
    return (
        <TitleWrapper>
            <SideImage src={props.sideSrc1}></SideImage>
            <CentreImage src={props.centreSrc}></CentreImage>
            <SideImage src={props.sideSrc2}></SideImage>
        </TitleWrapper>
    )
}

export default TitleBanner;