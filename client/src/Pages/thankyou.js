import React from 'react';
import thankYou from '../Components/Styled/bannerSvg/thankYou.svg';

import {RibbonImage} from '../Components/Styled/titleBanner.styled'

import {ThankYouWrap,BannerTextImg,ImageWrapper, SideImg} from '../Components/Styled/donate.styled.js';
const ThankYou = () => {
    return(
        <ThankYouWrap>
            <SideImg left={"true"}alt={"hearts left"} src={"/assets/general/heartsL.png"}/>
            <SideImg alt={"hearts right"} src={"/assets/general/heartsR.png"} />
            <ImageWrapper thankYou={"true"}>
                    <RibbonImage alt={"Text ribbon"}src={'/assets/general/ribbon.png'}/>
                    <BannerTextImg aria-label="contains svg" alt="allie's story banner svg text" type="image/svg+xml" data={thankYou}/>
                </ImageWrapper>
        </ThankYouWrap>
    )
}

export default ThankYou;