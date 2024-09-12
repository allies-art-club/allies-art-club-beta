import React,{Fragment} from 'react';
import TitleBanner from '../../../components/titleBanner/titleBanner.js';
import SideNav from '../../../components/sideNav/sideNav.js';
import Article from '../../../components/article.js';
import {PageDescription} from '../../../components/Styled/styled.js'
import articles from '../../../utils/landingPages/discussions.js';
const Discussions=()=>{
    return(
        <Fragment>

            <SideNav mainCategory={'discussions'}navLinks={["Club Articles","Project News","Artist Conversations","Personal Stories"]}/>
            <TitleBanner
                shootingStar={true}
                sideSrc1={'/assets/general/starL.png'}
                sideSrc2={'/assets/general/starR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Club Articles"}
            ></TitleBanner>
            <PageDescription>Informative articles about our Club and a range of topics related to art, creativity, culture and community.</PageDescription>
            {
                articles.filter(el=>el.category==="Club articles").map((el,i)=>{
                    return(

            <Article key={i} 
            src={el.src}
            title={el.title}
            title2={el.title2}
            right={i%2===0} 
            date={el.date}
            landingPage={"discussions"}
            category={el.category}
            subcategory={el.subcategory}
            file_type={el.file_type}>
            {el.description}</Article>
                    )
                })

            }
           
        </Fragment>
    )
}

export default Discussions;