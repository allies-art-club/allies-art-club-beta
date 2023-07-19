import React from "react";
import { Link } from "../Styled/styled.js";
import {
  FooterContainer,
  FooterParagraph,
  FooterElementWrapper,
  Figure,
  IconWrapper,
  Icon,
  CenterParagraph,
  Caption,
  FooterLink,
  ImageContainer,
  TextContainer,
} from "../Styled/footer.styled";
const Footer = () => {
  return (
    <>
      <FooterContainer id="footer" data-test="footer">
        <FooterElementWrapper size={30}>
          <Figure>
            <ImageContainer> 
              <picture>
                <source
                  media="(max-width:480px)"
                  srcSet="/assets/footer/aac_logo-small.png 1x, /assets/footer/aac_logo-large.png 2x, /assets/footer/aac_logo-3x.png 3x"
                />
                <source
                  media="(min-width:481px) and (max-width:1024px)"
                  srcSet="/assets/footer/aac_logo-medium.png 1x, /assets/footer/aac_logo-3x.png 2x"
                />
                <source
                  media="(min-width:1025px)"
                  srcSet="/assets/footer/aac_logo-large.png 1x, /assets/footer/aac_logo-3x.png 2x"
                />
                <Icon
                  move={1}
                  left={true}
                  src="/assets/footer/aac_logo-large.png"
                  srcSet="/assets/footer/aac_logo-small.png 60w,/assets/footer/aac_logo-medium.png 100w, /assets/footer/aac_logo-large.png 140w, /assets/footer/aac_logo-3x.png 180w"
                  data-test="awtfIcon"
                  alt="Alexandra Wyley Tower Foundation Logo"
                />
              </picture>
              <picture>
                <source
                  media="(max-width:480px)"
                  srcSet="/assets/footer/coo_logo-small.png 1x, /assets/footer/coo_logo-large.png 2x, /assets/footer/coo_logo-3x.png 3x"
                />
                <source
                  media="(min-width:481px) and (max-width:1024px)"
                  srcSet="/assets/footer/coo_logo-medium.png 1x, /assets/footer/coo_logo-3x.png 2x"
                />
                <source
                  media="(min-width:1025px)"
                  srcSet="/assets/footer/coo_logo-large.png 1x, /assets/footer/coo_logo-3x.png 2x"
                />
                <Icon
                  move={2}
                  left={true}
                  src="/assets/footer/coo_logo-large.png"
                  srcSet="/assets/footer/coo_logo-small.png 60w,/assets/footer/coo_logo-medium.png 100w, /assets/footer/coo_logo-large.png 140w, /assets/footer/coo_logo-3x.png 180w"
                  data-test="awtfIcon"
                  alt="Co-operative logo"
                />
              </picture>
             
            </ImageContainer>
            <Caption>
              <FooterParagraph>Registration number: 9073 </FooterParagraph>
              <FooterParagraph bottom={"true"}>
                (c) 2023 Allie's Art Club Limited{" "}
              </FooterParagraph>
            </Caption>
          </Figure>
        </FooterElementWrapper>

        <FooterElementWrapper size={40}>
          <TextContainer>
            <CenterParagraph data-test="charityNumberCaption">
              Contact us: <br />{" "}
              <FooterLink href="mailto:alliesartclub@gmail.com">
                alliesartclub@gmail.com
              </FooterLink>
            </CenterParagraph>
            <br />
            <CenterParagraph>
              Allie's Art Club is a registered Community Benefit Society <br />{" "}
              Registration number: 9073 <br /> &copy; 2023 Allie's Art Club Limited{" "}
              <br />{" "}
            </CenterParagraph>
          </TextContainer>
        </FooterElementWrapper>

        <FooterElementWrapper size={30}>
          <Caption>
            <FooterParagraph mobile={true}>
              Contact us: <br />{" "}
              <FooterLink href="mailto:alliesartclub@gmail.com">
                alliesartclub@gmail.com
              </FooterLink>
            </FooterParagraph>
          </Caption>
          <FooterParagraph right={"true"} data-test="aacCaption">
            Follow us on social media
          </FooterParagraph>
          <IconWrapper>
            <Link
              rel="noopener"
              target="_blank"
              href="https://www.twitter.com/alliesartclub"
            >
              <picture>
                <source srcSet="/assets/footer/twitter_icon.png 1x, /assets/footer/twitter_icon-3x.png 3x" />
                <Icon
                  left={false}
                  src="/assets/footer/twitter_icon.png"
                  data-test="twitterIcon"
                  alt="twitter icon"
                ></Icon>
              </picture>
            </Link>
            <Link
              rel="noopener"
              target="_blank"
              href="https://www.instagram.com/alliesartclub"
            >
              <picture>
                <source srcSet="/assets/footer/insta_icon.png 1x, /assets/footer/insta_icon-3x.png 3x" />
                <Icon
                  left={false}
                  src="/assets/footer/insta_icon.png"
                  data-test="instaIcon"
                  alt="instagram icon"
                ></Icon>
              </picture>
            </Link>
            <Link
              rel="noopener"
              target="_blank"
              href="https://www.facebook.com/alliesartclub"
            >
              <picture>
                <source srcSet="/assets/footer/facebook_icon.png 1x, /assets/footer/facebook_icon-3x.png 3x" />
                <Icon
                  left={false}
                  src="/assets/footer/facebook_icon.png"
                  data-test="facebookIcon"
                  alt="facebook icon"
                ></Icon>
              </picture>
            </Link>
            <Link
              rel="noopener"
              target="_blank"
              href="https://www.linkedin.com/alliesartclub"
            >
              <picture>
                <source srcSet="/assets/footer/linkedIn_icon.png 1x, /assets/footer/linkedIn_icon-3x.png 3x" />
                <Icon
                  left={false}
                  src="/assets/footer/linkedIn_icon.png"
                  data-test="linkedInIcon"
                  alt="linkedIn icon"
                ></Icon>
              </picture>
            </Link>
          </IconWrapper>
        </FooterElementWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
