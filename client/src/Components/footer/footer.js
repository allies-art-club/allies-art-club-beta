import React from 'react';
import { FooterContainer,FooterParagraph,FooterElementWrapper,Figure,IconWrapper,Icon,CenterParagraph,Caption,FooterLink} from '../Styled/footer.styled'
const Footer = () => {
    return(
        <FooterContainer id="footer" data-test="footer">
            <FooterElementWrapper size={37}>
                <Figure>
                    <Icon left={true} src="/assets/footer/awtf_icon.png" data-test="awtfIcon" alt="Alexandra Wyley Tower Foundation Logo"></Icon>
                    <Caption>
                        <FooterParagraph data-test="awtfCaption">Created with AWTF<br/><FooterLink href="www.awtf.org">www.awtf.org</FooterLink></FooterParagraph>
                        <FooterParagraph>Contact us: <br/> <FooterLink href="mailto:alliesartclub@gmail.com">alliesartclub@gmail.com</FooterLink></FooterParagraph>
                    </Caption>
                </Figure>
            </FooterElementWrapper>

            <FooterElementWrapper size={26}>
                <CenterParagraph data-test="charityNumberCaption">Contact us: <br/> <FooterLink href="mailto:alliesartclub@gmail.com">alliesartclub@gmail.com</FooterLink></CenterParagraph>
            </FooterElementWrapper>

            <FooterElementWrapper size={37}>
                    <FooterParagraph data-test="aacCaption">Follow us on social media</FooterParagraph>
                    <IconWrapper>
                        <Icon left={false} src="/assets/footer/insta_icon.png" data-test="aacIcon" alt="instagram icon"></Icon>
                        <Icon left={false} src="/assets/footer/insta_icon.png" data-test="aacIcon" alt="instagram icon"></Icon>
                        <Icon left={false} src="/assets/footer/insta_icon.png" data-test="aacIcon" alt="instagram icon"></Icon>
                    </IconWrapper>
            </FooterElementWrapper>
        </FooterContainer>
    )
}

export default Footer;