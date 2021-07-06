import React,{Fragment} from 'react';
import {Paragraph} from '../Components/Styled/styled';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import {DonationWrapper,DonateLink,DonateImage,DonateParagraphWrapper,DonateParagraph,BannerTextImg,DonateBannerStars,DonateBannerStar,ExternalLink,BannerTextOverlay} from '../Components/Styled/donate.styled.js';
import donateFundsSvg from '../Components/Styled/bannerSvg/donateFunds.svg';
import donateSuppliesSvg from '../Components/Styled/bannerSvg/donateSupplies.svg';
import crowdFundSvg from '../Components/Styled/bannerSvg/crowdFund.svg';


const Donate = () => {
    return(
        <Fragment>
            <TitleBanner 
                sideSrc1={"/assets/general/heartsL.png"} 
                sideSrc2={"/assets/general/heartsR.png"} 
                centreSrc={"/assets/general/curvedLine.png"} 
                title={"Donate"}/>
            <Paragraph>Thank you for considering donating to Allie's Art Club. We are a charitable organisation led by volunteers and 100% of funds and donations we receive go towards supporting local communities in London and our Club members through art and creative activities.</Paragraph>
            <Paragraph>How would you like to donate to our club? Click on one of the ribbons below to support our art club. </Paragraph>
            <DonationWrapper>
                <DonateLink
                    data-test="clubsAndProjectsLink"
                    exact to='/be-an-allie/donateFunds'>
                        <DonateImage alt="ribbon"src={"/assets/general/ribbon.png"}></DonateImage>
                        <BannerTextImg aria-label="contains svg" type="image/svg+xml" alt="donate funds banner" data={donateFundsSvg} />
                        <BannerTextOverlay/>
                        <DonateBannerStars top={true}src={"/assets/general/starsR.png"} alt="stars" />
                </DonateLink>
                <DonateParagraphWrapper>
                    <DonateBannerStar top={true}alt="star" src={"/assets/general/starR.png"}/>
                    <DonateParagraph>Make a direct Payment to Allie's Art Club</DonateParagraph>
                </DonateParagraphWrapper>
            </DonationWrapper>
            <DonationWrapper>
                <DonateParagraphWrapper>
                    <DonateParagraph>Send art supplies, books and resources to Allie's Art Club</DonateParagraph>

                    <DonateBannerStar alt="star" src={"/assets/general/starL.png"}/>
                </DonateParagraphWrapper>
                <DonateLink
                    data-test="clubsAndProjectsLink"
                    exact to='/be-an-allie/donateSupplies'>
                        <DonateImage alt="ribbon"src={"/assets/general/ribbon.png"}></DonateImage>
                        <BannerTextImg  aria-label="contains svg" type="image/svg+xml"alt="donate funds banner" data={donateSuppliesSvg} />
                        <BannerTextOverlay/>
                        <DonateBannerStars src={"/assets/general/heartsR.png"} alt="stars" />
                </DonateLink>
            </DonationWrapper>
            <DonationWrapper>
                <ExternalLink
                    rel="noopener"
                    target="_blank"
                    href="https://www.crowdfunder.co.uk/art-care"
                    >
                        <DonateImage alt="ribbon"src={"/assets/general/ribbon.png"}></DonateImage>
                        <BannerTextImg  aria-label="contains svg" type="image/svg+xml"alt="crowd fund banner" data={crowdFundSvg} />
                        <BannerTextOverlay/>
                        <DonateBannerStars top={true}src={"/assets/general/starsR.png"} alt="stars" />
                </ExternalLink>
                <DonateParagraphWrapper>
                    <DonateParagraph>Donate funds to our Art Care project Crowdfunder</DonateParagraph>

                    <DonateBannerStar top={true} alt="star" src={"/assets/general/starR.png"}/>
                </DonateParagraphWrapper>
            </DonationWrapper>
        </Fragment>
    )
}
export default Donate;