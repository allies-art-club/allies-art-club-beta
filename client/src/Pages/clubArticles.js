import React,{Fragment} from 'react';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import SideNav from '../Components/sideNav/sideNav.js';
import Article from '../Components/article.js';
const ClubArticles=()=>{
    return(
        <Fragment>

            <SideNav mainCategory={'updates'}navLinks={["Club Articles","Project News","Artist Conversations","Personal Stories"]}/>
            <TitleBanner
                sideSrc1={'/assets/general/starL.png'}
                sideSrc2={'/assets/general/starR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Updates"}
            ></TitleBanner>

            <Article src={"/assets/articles/whatIsArt/whatIsArt1.png"}title={"What is Art?"}right={true} date={"2/3/2021 5:35pm"}>
                What the hell is art?
            </Article>
            <Article src={"/assets/articles/lessonsInCalligraphy/lessonsInCalligraphy1.png"}title={"Lessons in Calligraphy"}right={true} date={"26/2/2021 10:50am"}>Drawing words</Article>
<Article src={"/assets/articles/foodBank/foodBank1.png"}title={"Allie's Food Bank"}right={false} date={"25/1/2021 5:35pm"}>
    Food bank stuff
    </Article>



            <Article src={"/assets/articles/artAndWellbeing/artAndWellbeing1.png"}title={"Art and Wellbeing"}right={true} date={"23/2/2021 6:33pm"}>Art to feel good</Article>
            <Article src={"/assets/articles/rememberingAllie/rememberingAllie.webp"}title={"Remembering Allie"}right={true} date={"18/5/2021 3:26pm"}>Remember Allie</Article>
            <Article src={"/assets/articles/aCharityWeCanTrust/aCharityWeCanTrust1.png"}title={"AWTF: A Charity We Can Trust"}right={true} date={"18/5/2021 3:26pm"}>A Charity We Can Trust</Article>
        </Fragment>
    )
}

export default ClubArticles;