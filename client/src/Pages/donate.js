import React,{Fragment} from 'react';
import {Paragraph} from '../Components/Styled/styled';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import {DonationWrapper,DonateLink,DonateImage,DonateParagraph} from '../Components/Styled/donate.styled.js';

const Donate = () => {
    return(
        <Fragment>
            <TitleBanner sideSrc1={"/assets/general/heartsL.png"} sideSrc2={"/assets/general/heartsR.png"} centreSrc={"/assets/general/ribbon.png"} />
            <Paragraph>Thank you for considering donating to Allie's Art Club. We are a charitable organisation led by volunteers and 100% of funds and donations we receive go towards supporting local communities in London and our Club members through art and creative activities. How would you like to donate to our club?</Paragraph>
            <DonationWrapper>
                <DonateLink
                    data-test="clubsAndProjectsLink"
                    exact to='/be-an-allie/donateFunds'>
                        <DonateImage src={"/assets/general/ribbon.png"}></DonateImage>
                        Donate Funds
                </DonateLink>
                <DonateParagraph>Make a direct Payment to Allie's Art Club</DonateParagraph>
            </DonationWrapper>
            <DonationWrapper>

                <DonateParagraph>Send art supplies, books and resources to Allie's Art Club</DonateParagraph>
                <DonateLink
                    data-test="clubsAndProjectsLink"
                    exact to='/be-an-allie/donateSupplies'>

                        <DonateImage src={"/assets/general/ribbon.png"}></DonateImage>
                        Donate Supplies</DonateLink>
            </DonationWrapper>
        </Fragment>
    )
}
export default Donate;