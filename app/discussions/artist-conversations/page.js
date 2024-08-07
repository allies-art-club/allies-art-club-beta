import React,{Fragment} from 'react';
import TitleBanner from '../../../components/titleBanner/titleBanner.js';
import SideNav from '../../../components/sideNav/sideNav.js';
import Article from '../../../components/article.js';
import {PageDescription,Paragraph} from '../../../components/Styled/styled.js'
import articles from '../../../utils/landingPages/discussions.js';
const artistConversationsArr=articles.filter(el=>el.category==="Artist conversations");

const ArtistConversations=()=>{
    return(
        <Fragment>

            <SideNav mainCategory={'discussions'}navLinks={["Club Articles","Project News","Artist Conversations","Personal Stories"]}/>
            <TitleBanner
                shootingStar={true}
                sideSrc1={'/assets/general/starL.png'}
                sideSrc2={'/assets/general/starR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Artist Conversations"}
            ></TitleBanner>
            <PageDescription>Conversations with local artists about their work, personal experiences and viewpoints on various topics.</PageDescription>
            {
                artistConversationsArr && artistConversationsArr.length?
                artistConversationsArr.map((el,i)=>{
                    return(
            
                        <Article key={i} 
                        src={el.src}
                        title={el.title}
                        title2={el.title2}
                        right={i%2===0} 
                        date={el.date}
                        category={el.category}
                        landingPage={"discussions"}
                        subcategory={el.subcategory}
                        file_type={el.file_type}>
                        {el.description}</Article>
                                )
                            })
                :
                <Fragment>
                <br/>
                <br/>
                <Paragraph>We're sorry to say that we do not have any artist conversations on our site for you to read. Please check back on our site at a later date or follow us on social media to read our upcoming artist conversations.</Paragraph>
                </Fragment>
            }
           
        </Fragment>
    )
}

export default ArtistConversations;