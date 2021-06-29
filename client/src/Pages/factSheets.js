import React,{Fragment} from 'react';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import SideNav from '../Components/sideNav/sideNav.js';
import Article from '../Components/article.js';
import {Paragraph} from '../Components/Styled/styled.js'
import resources from './resources/landingPage.js';
import { downloadHandler } from '../Actions/articleActions.js';
const FactSheet=()=>{
    return(
        <Fragment>

            <SideNav mainCategory={'resources'}navLinks={["Fact Sheets","Work Sheets"]}/>
            <TitleBanner
                sideSrc1={'/assets/general/starL.png'}
                sideSrc2={'/assets/general/starR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={"Fact sheets"}
            ></TitleBanner>
            <Paragraph>Fact sheets with information and tips on topics related to art, self-care and activism.</Paragraph>
            {
                resources.filter(el=>el.category==='Fact sheet').map((el,i)=>{
                    return(

            <Article key={i} 
                src={el.src}
                title={el.title}
                right={i%2===1} 
                date={el.date}
                landingPage={"resources"}
                category={el.category}
                subcategory={el.subcategory}
                downloadHandler={downloadHandler}>
                {el.description}</Article>
                    )
                })

            }
           
        </Fragment>
    )
}
export default FactSheet;