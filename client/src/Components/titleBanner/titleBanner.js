import React from 'react';
import {TitleWrapper,SideImage,SideImageWrapper,CentreImage,CentreImageWrapper,ImageTitle} from '../Styled/titleBanner.styled';

const TitleBanner = (props) => {
    return (
        <TitleWrapper>
            <SideImageWrapper>
                <SideImage src={props.sideSrc1}/>
            </SideImageWrapper>
            <CentreImageWrapper>
                <CentreImage src={props.centreSrc}></CentreImage>
                <ImageTitle>{props.title}</ImageTitle>
            </CentreImageWrapper>
            <SideImageWrapper>
                <SideImage src={props.sideSrc2} />
            </SideImageWrapper>
        </TitleWrapper>
    )
}

export default TitleBanner;