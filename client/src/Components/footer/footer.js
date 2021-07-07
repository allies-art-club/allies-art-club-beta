import React from 'react';
import {Link} from '../Styled/styled.js'
import { FooterContainer,FooterParagraph,FooterElementWrapper,Figure,IconWrapper,Icon,CenterParagraph,Caption,FooterLink} from '../Styled/footer.styled'
const Footer = () => {
    return(
        <FooterContainer id="footer" data-test="footer">
            <FooterElementWrapper size={37}>
                <Figure>
                    <picture>
                        <source media="(max-width:480px)" srcSet="/assets/footer/awtf_icon-small.png 1x, /assets/footer/awtf_icon-large.png 2x, /assets/footer/awtf_icon-3x.png 3x"/>
                        <source media="(min-width:481px) and (max-width:1024px)" srcSet="/assets/footer/awtf_icon-medium.png 1x, /assets/footer/awtf_icon-3x.png 2x"/>
                        <source media="(min-width:1025px)" srcSet="/assets/footer/awtf_icon-large.png 1x, /assets/footer/awtf_icon-3x.png 2x"/>
                        <Icon move={true} left={true}src="/assets/footer/awtf_icon-large.png" srcSet="/assets/footer/awtf_icon-small.png 60w,/assets/footer/awtf_icon-medium.png 100w, /assets/footer/awtf_icon-large.png 140w, /assets/footer/awtf_icon-3x.png 180w" data-test="awtfIcon"alt="Alexandra Wyley Tower Foundation Logo"/>
                    </picture>
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
                        <Link rel="noopener" target="_blank"href="https://www.twitter.com/alliesartclub">

                            <picture>
                                    <source srcSet="/assets/footer/twitter_icon.png 1x, /assets/footer/twitter_icon-3x.png 3x"/>
                                    <Icon left={false} src="/assets/footer/twitter_icon.png" data-test="twitterIcon" alt="twitter icon"></Icon>
                            </picture>
                        </Link>
                        <Link rel="noopener" target="_blank"href="https://www.instagram.com/alliesartclub">
                            <picture>
                                <source srcSet="/assets/footer/insta_icon.png 1x, /assets/footer/insta_icon-3x.png 3x"/> 
                                <Icon left={false} src="/assets/footer/insta_icon.png" data-test="instaIcon" alt="instagram icon"></Icon>
                            </picture>
                        </Link>
                        <Link rel="noopener" target="_blank"href="https://www.facebook.com/alliesartclub">
                            <picture>
                                <source srcSet="/assets/footer/facebook_icon.png 1x, /assets/footer/facebook_icon-3x.png 3x" />
                                <Icon left={false} src="/assets/footer/facebook_icon.png" data-test="facebookIcon" alt="facebook icon"></Icon>
                            </picture>
                            </Link>
                        <Link rel="noopener" target="_blank"href="https://www.linkedin.com/alliesartclub">
                            <picture>
                            <source srcSet="/assets/footer/linkedIn_icon.png 1x, /assets/footer/linkedIn_icon-3x.png 3x"/>
                            <Icon left={false} src="/assets/footer/linkedIn_icon.png" data-test="linkedInIcon" alt="linkedIn icon"></Icon>

                            </picture>
                            </Link>
                    </IconWrapper>
            </FooterElementWrapper>
        </FooterContainer>
    )
}

export default Footer;