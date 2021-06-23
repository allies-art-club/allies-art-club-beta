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
                        <svg style={{"width":"100%"}}viewport="0 0 300 300" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                      
                            <path id="MyPath" fill="none" stroke="red"
                                    d="M 10 100 C 100 80, 200 80, 290 100" />

                           
                            <text style={{"font-family":"'Big Shoulders Text','cursive'","font-size":"50px","width":"100%"}} >
                                <textPath href="#MyPath">
                                    DONATE FUNDS</textPath>
                            </text>
                        </svg>
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