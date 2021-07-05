import React from 'react';
import thankYou from '../Components/Styled/bannerSvg/thankYou.svg';

import {CentreImage} from '../Components/Styled/titleBanner.styled'

import {ThankYouWrap,BannerTextImg,ImageWrapper, SideImg} from '../Components/Styled/donate.styled.js';
const ThankYou = () => {
    return(
        <ThankYouWrap>
            <SideImg left={"true"}alt={"hearts left"} src={"/assets/general/heartsL.png"}/>
            <SideImg alt={"hearts right"} src={"/assets/general/heartsR.png"} />
            <ImageWrapper thankYou={"true"}>
                    <CentreImage alt={"Text ribbon"}src={'/assets/general/ribbon.png'}></CentreImage>
                    <BannerTextImg aria-label="contains svg" alt="allie's story banner svg text" type="image/svg+xml" data={thankYou}/>
                </ImageWrapper>
        </ThankYouWrap>
    )
}

export default ThankYou;