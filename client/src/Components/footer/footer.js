import React from 'react';
import {Link} from '../Styled/styled.js'
import { FooterContainer,FooterParagraph,FooterElementWrapper,Figure,IconWrapper,Icon,CenterParagraph,Caption,FooterLink} from '../Styled/footer.styled'
const Footer = () => {
    return(
        <FooterContainer id="footer" data-test="footer">
            <FooterElementWrapper size={37}>
                <Figure>
                    <Icon left={true} src="/assets/footer/awtf_icon.png" data-test="awtfIcon" alt="Alexandra Wyley Tower Foundation Logo"></Icon>
                    <Caption>
                        <FooterParagraph data-test="awtfCaption">Created with AWTF<br/><FooterLink rel="noopener" target="_blank" href="https://www.awtf.org">www.awtf.org</FooterLink></FooterParagraph>
                        <FooterParagraph mobile={true}>Contact us: <br/> <FooterLink href="mailto:alliesartclub@gmail.com">alliesartclub@gmail.com</FooterLink></FooterParagraph>
                    </Caption>
                </Figure>
            </FooterElementWrapper>

            <FooterElementWrapper size={26}>
                <CenterParagraph data-test="charityNumberCaption">Contact us: <br/> <FooterLink href="mailto:alliesartclub@gmail.com">alliesartclub@gmail.com</FooterLink></CenterParagraph>
            </FooterElementWrapper>

            <FooterElementWrapper size={37}>
                    <FooterParagraph right={"true"} data-test="aacCaption">Follow us on social media</FooterParagraph>
                    <IconWrapper>
                        <Link rel="noopener" target="_blank"href="https://www.twitter.com/alliesartclub"><Icon left={false} src="/assets/footer/twitter_icon.png" data-test="twitterIcon" alt="twitter icon"></Icon></Link>
                        <Link rel="noopener" target="_blank"href="https://www.instagram.com/alliesartclub"><Icon left={false} src="/assets/footer/insta_icon.png" data-test="instaIcon" alt="instagram icon"></Icon></Link>
                        <Link rel="noopener" target="_blank"href="https://www.facebook.com/alliesartclub"><Icon left={false} src="/assets/footer/facebook_icon.png" data-test="facebookIcon" alt="facebook icon"></Icon></Link>
                        <Link rel="noopener" target="_blank"href="https://www.linkedin.com/alliesartclub"><Icon left={false} src="/assets/footer/linkedIn_icon.png" data-test="linkedInIcon" alt="linkedIn icon"></Icon></Link>
                    </IconWrapper>
            </FooterElementWrapper>
        </FooterContainer>
    )
}

export default Footer;