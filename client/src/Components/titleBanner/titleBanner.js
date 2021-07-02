import React,{Fragment} from 'react';
import {TitleWrapper,SideImage,SideImageWrapper,CentreImage,CentreImageWrapper,ImageTitle} from '../Styled/titleBanner.styled';

const TitleBanner = (props) => {
    console.log(props.title)
    return (
        <TitleWrapper>
            {
                props.sideSrc1?

                    <SideImageWrapper sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>
                        <SideImage alt={props.sideSrc1.split('/')[3].split('.')[0]}src={props.sideSrc1}/>
                    </SideImageWrapper>:
                null

            }
                    <CentreImageWrapper sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>
            {
                    props.centreSrc?
                        <CentreImage alt={props.centreSrc.split('/')[3].split('.')[0]}src={props.centreSrc}></CentreImage>:
                        null
            }
            {
                props.title&& props.title.split(': ').length===2?
                    <Fragment>
                        <ImageTitle sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>{props.title.split(': ')[0]}</ImageTitle>
                        <ImageTitle sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>{props.title.split(': ')[1]}</ImageTitle>
                    </Fragment>
                    :

                    <ImageTitle sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>{props.title}</ImageTitle>
            }
                    </CentreImageWrapper>
                    
            {
                props.sideSrc2?
                    <SideImageWrapper sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>
                        <SideImage alt={props.sideSrc2.split('/')[3].split('.')[0]}src={props.sideSrc2} />
                    </SideImageWrapper>:
                null

            }
        </TitleWrapper>
    )
}

export default TitleBanner;