import React from 'react';
import { FooterContainer,FooterElementWrapper,Figure,Icon,CenterParagraph,Caption} from '../Styled/footer.styled'

const Footer = () => {
    return(
        <FooterContainer id="footer" data-test="footer">
            <FooterElementWrapper size={35}>
                <Figure>
                    <Icon left={true} src="../../assets/footer/awtf_icon.png" data-test="awtfIcon" alt="Alexandra Wyley Tower Foundation Logo"></Icon>
                    <Caption>
                        <p data-test="awtfCaption">Created with AWTF<br/><a href="www.awtf.org">www.awtf.org</a></p>
                        <p>Registered Charity Number: <br/> 1140484</p>
                    </Caption>
                </Figure>
            </FooterElementWrapper>

            <FooterElementWrapper size={30}>
                <CenterParagraph data-test="charityNumberCaption">Registered Charity Number: <br/> 1140484</CenterParagraph>
            </FooterElementWrapper>

            <FooterElementWrapper size={35}>
                <Figure>
                    <Caption data-test="aacCaption"><span>Instagram: </span><span>@alliesartclub</span><br/>Contact us: <a href="mailto:alliesartclub@gmail.com">alliesartclub@gmail.com"</a></Caption>
                    <Icon left={false} src="../../assets/footer/insta_icon.png" data-test="aacIcon" alt="instagram icon"></Icon>
                </Figure>
            </FooterElementWrapper>
        </FooterContainer>
    )
}

export default Footer;