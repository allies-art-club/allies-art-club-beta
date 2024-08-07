import React from 'react';
import TitleBanner from '../../Components/titleBanner/titleBanner.js';
import {Paragraph,TextImageTop,Article,Section,Link} from '../../Components/Styled/styled.js';
const FirstDonations=()=>{
    return(
        <Article>
            <Section>

                <TitleBanner 

                centreSrc={"/assets/general/curvedLine.png"}
                    title={"We've Donated 100 Art Care Packs!"}
                ></TitleBanner>

                <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/articles/weveDonated100ArtCarePacks/weveDonated100ArtCarePacks1-small.png 1x, /assets/articles/weveDonated100ArtCarePacks/weveDonated100ArtCarePacks1-2x.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/articles/weveDonated100ArtCarePacks/weveDonated100ArtCarePacks1-large.png"/>
                    <TextImageTop right={true}src={'/assets/articles/weveDonated100ArtCarePacks/weveDonated100ArtCarePacks1-large.png'} alt="Lydia & Lindsey"/>
                </picture>
                <Paragraph>Thanks to everyone who supported us through donating and attending our Arts Fair & Launch Party, we’ve donated 100 Art Care Packs at the food bank operating at the Ringcross Community Centre. </Paragraph>
                
                <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/articles/weveDonated100ArtCarePacks/weveDonated100ArtCarePacks1-small.png 1x, /assets/articles/weveDonated100ArtCarePacks/weveDonated100ArtCarePacks1-2x.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/articles/weveDonated100ArtCarePacks/weveDonated100ArtCarePacks1-large.png"/>
                    <TextImageTop mobile={true}src={'/assets/articles/weveDonated100ArtCarePacks/weveDonated100ArtCarePacks1-large.png'} alt="Lydia & Lindsey"/>
                </picture>

                <Paragraph>Our Art Care Packs aim to support people’s mental health through providing a few resources for them to get creative and have fun making art. Everyone deserves the chance to express themselves creatively, and we hope that by donating these packs we can help brighten the lives of those who are unable to afford the supplies needed to make art.</Paragraph>
            </Section>
            <Section>

            <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/articles/weveDonated100ArtCarePacks/weveDonated100ArtCarePacks2-small.png 1x, /assets/articles/weveDonated100ArtCarePacks/weveDonated100ArtCarePacks2-2x.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/articles/weveDonated100ArtCarePacks/weveDonated100ArtCarePacks2-large.png"/>
                    <TextImageTop src={'/assets/articles/weveDonated100ArtCarePacks/weveDonated100ArtCarePacks2-large.png'} alt="Man with packs"/>
                </picture>
            <picture>
                    <source media="(max-width: 1024px)" srcSet="/assets/articles/weveDonated100ArtCarePacks/weveDonated100ArtCarePacks2-small.png 1x, /assets/articles/weveDonated100ArtCarePacks/weveDonated100ArtCarePacks2-2x.png 2x"/>
                    <source media="(min-width: 1025px)" srcSet="/assets/articles/weveDonated100ArtCarePacks/weveDonated100ArtCarePacks2-large.png"/>
                    <TextImageTop mobile={true}src={'/assets/articles/weveDonated100ArtCarePacks/weveDonated100ArtCarePacks2-large.png'} alt="Man with packs"/>
                </picture>

                <Paragraph>The recipients of our Art Care Packs at the Ringcross were delighted to receive these little bundles of pens, pencils, notepads and other goodies! The packs contain an assortment of art supplies for both adults and children, and the visitors at the food bank were very glad to have equipment for themselves and their families.</Paragraph>
                <Paragraph>With poverty continuing to increase in the UK as a result of the pandemic as well as rising gas prices, there are more people than ever struggling to make ends meet.</Paragraph>
                <Paragraph>We will continue our project to support people’s mental health through the arts, and as we raise more funds we hope to donate even more art supplies to food banks in London.</Paragraph>
                <Paragraph>To learn more about our Art Care Packs and how you can support us, head to our article <Link href="/discussions/project-news/art-care-packs-tools-for-mental-wellbeing">Art Care Packs: Tools for Mental Wellbeing .</Link></Paragraph>
                
            </Section>
            
        </Article>
    )
}
export default FirstDonations;