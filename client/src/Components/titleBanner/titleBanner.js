import React from 'react';
import {TitleWrapper,SideImage,SideImageWrapper,CentreImage,CentreImageWrapper,ImageTitle} from '../Styled/titleBanner.styled';

const TitleBanner = (props) => {
    return (
        <TitleWrapper sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>
            {
                props.sideSrc1?

                    <SideImageWrapper sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>
                        <SideImage src={props.sideSrc1}/>
                    </SideImageWrapper>:
                null

            }
                    <CentreImageWrapper sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>
            {
                    props.centreSrc?
                        <CentreImage src={props.centreSrc}></CentreImage>:
                        null
                        }
                        <ImageTitle>{props.title}</ImageTitle>
                    </CentreImageWrapper>
                    
            {
                props.sideSrc2?
                    <SideImageWrapper sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>
                        <SideImage src={props.sideSrc2} />
                    </SideImageWrapper>:
                null

            }
        </TitleWrapper>
    )
}

export default TitleBanner;