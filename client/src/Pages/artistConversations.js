import React,{Fragment} from 'react';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import SideNav from '../Components/sideNav/sideNav.js';
import Article from '../Components/article.js';
import {Paragraph} from '../Components/Styled/styled.js'
import articles from './articles/landingPage.js';
const artistConversationsArr=articles.filter(el=>el.category==="Artist conversations");

const ArtistConversations=()=>{
    return(
        <Fragment>

            <SideNav mainCategory={'discussions'}navLinks={["Club Articles","Project News","Artist Conversations","Personal Stories"]}/>
            <TitleBanner
                sideSrc1={'/assets/general/starL.png'}
                sideSrc2={'/assets/general/starR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Artist Conversations"}
            ></TitleBanner>
            <Paragraph>Conversations with local artists about their work, personal experiences and viewpoints on various topics.</Paragraph>
            {
                artistConversationsArr && artistConversationsArr.length?
                artistConversationsArr.map((el,i)=>{
                    return(
            
                        <Article key={i} 
                        src={el.src}
                        title={el.title}
                        right={i%2===0} 
                        date={el.date}
                        category={el.category}
                        landingPage={"discussions"}
                        subcategory={el.subcategory}>
                        {el.description}</Article>
                                )
                            })
                :
                <Paragraph>We're sorry to say that currently we do not have any artist conversations on our site for you to read. Please check back on our site at a later date or follow us on social media to read our upcoming artist conversations.</Paragraph>

            }
           
        </Fragment>
    )
}

export default ArtistConversations;