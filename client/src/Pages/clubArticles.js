import React,{Fragment} from 'react';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import Article from '../Components/article.js'
const ClubArticles=()=>{
    return(
        <Fragment>
            <TitleBanner
                sideSrc1={'/assets/general/starL.png'}
                sideSrc2={'/assets/general/starR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Updates"}
            ></TitleBanner>
            <Article right={true}/>

            <Article right={false}/>

            <Article right={true}/>


            <Article right={false}/>
            <Article right={true}/>
        </Fragment>
    )
}

export default ClubArticles;