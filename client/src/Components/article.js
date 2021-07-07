import React from 'react';
import {toggleSpinner} from '../Actions/appActions';
import {connect} from 'react-redux';
import {ArticleWrapper,ArticleTitleWrap,ArticleLink,TextContainer,TextWrap,ArticleTitle,ArticleSummary,Figure,ArticleImage,PublishingDate,ArticleDetailsWrapper,ArticleItem,Border} from '../Components/Styled/article.styled.js';
const Article=(props)=>{
    console.log(props.title)
    return(
        <ArticleLink 
            exact to={`/${props.landingPage}/${props.category.toLowerCase().replace(/[']/g,'').replace(/[^\w\s]/g,'').replace(/\s/g,'-')}/${props.title.toLowerCase().replace(/[']/g,'').replace(/[^\w\s]/g,'').replace(/\s/g,'-')}`} 
            onClick={props.downloadHandler?async(e)=>{
                e.preventDefault();
                await toggleSpinner;
                var blob = await props.downloadHandler(props.category,props.title,props.csrf);
                await toggleSpinner;
                var downloadLink = document.createElement('a');
                downloadLink.target = '_blank';
                downloadLink.download = props.title+'.pdf';
                var URL = window.URL || window.webkitURL;
                var downloadUrl = URL.createObjectURL(blob);
                downloadLink.href = downloadUrl;
                document.body.append(downloadLink); // THIS LINE ISN'T NECESSARY
                downloadLink.click();
                document.body.removeChild(downloadLink);  // THIS LINE ISN'T NECESSARY
                URL.revokeObjectURL(downloadUrl);
                }:null}>
            <ArticleWrapper right={props.right} >
                    <Figure >
                        <ArticleImage alt={props.title} src={props.src}/>
                        <PublishingDate>{props.date}</PublishingDate>
                    </Figure>
                <TextContainer>
                    <TextWrap>
                        <Border alt="border top" top={true} src={"/assets/general/border.png"}/>
                        <ArticleTitleWrap>
                            <ArticleTitle largeHeading={props.largeHeading}>
                                {props.title.split(': ')[0]+":"}
                            </ArticleTitle>
                            {
                                props.title.split(':').length===2?
                                <ArticleTitle largeHeading={props.largeHeading}>
                                    {props.title.split(': ')[1]}
                                </ArticleTitle>:
                                null
                            }
                        </ArticleTitleWrap>
                        <ArticleSummary largeHeading={props.largeHeading}>{props.children}</ArticleSummary>
                        <Border alt="border bottom" src={"/assets/general/border.png"}/>
                    </TextWrap>
                    <ArticleDetailsWrapper>
                        <ArticleItem>{props.category}</ArticleItem>
                        <ArticleItem>{props.subcategory}</ArticleItem>
                    </ArticleDetailsWrapper>
                </TextContainer>
            </ArticleWrapper>
        </ArticleLink>
    )
}
const mapStateToProps=(state)=>{
    return {
        csrf: state.app.token      
    }
    
  }
  const mapDispatchToProps=(dispatch)=>{
      return {
          
      }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Article);