import React,{Fragment} from 'react';
import {BannerTextImg} from '../Styled/donate.styled.js'
import {TitleWrapper,SideImage,SideImageWrapper,CentreImage,CentreImageWrapper,ImageTitle} from '../Styled/titleBanner.styled';

const TitleBanner = (props) => {
    return (
        <TitleWrapper sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>
            {
                props.sideSrc1?

                    <SideImageWrapper sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>
                        <SideImage shootingStar={props.shootingStar} alt={"side decoration left"}src={props.sideSrc1}/>
                    </SideImageWrapper>:
                null

            }
                    <CentreImageWrapper sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>
            {
                    props.centreSrc?
                        <CentreImage alt={"decorative banner central"}src={props.centreSrc}></CentreImage>:
                        null
            }
            {
                props.title&& props.title.split(': ').length===2?
                    <Fragment>
                        <ImageTitle sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>{props.title.split(': ')[0]+':'}</ImageTitle>
                        <ImageTitle sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>{props.title.split(': ')[1]}</ImageTitle>
                    </Fragment>
                    :
                    props.svgSrc?
                    <BannerTextImg aria-label="contains svg"type="image/svg+xml" alt={props.svgSrc.alt} data={props.svgSrc.src}/>
                   :
                   <ImageTitle sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>{props.title}</ImageTitle>
            }
                    </CentreImageWrapper>
                    
            {
                props.sideSrc2?
                    <SideImageWrapper sideSrc1={props.sideSrc1} sideSrc2={props.sideSrc2} centreSrc={props.centreSrc}>
                        <SideImage shootingStar={props.shootingStar}right={"true"} alt={"side decoration right"}src={props.sideSrc2} />
                    </SideImageWrapper>:
                null

            }
        </TitleWrapper>
    )
}

export default TitleBanner;