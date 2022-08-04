import React from 'react';
import {toggleSpinner} from '../Actions/appActions';
import {connect} from 'react-redux';
import {ArticleWrapper,ArticleTitleWrap,ArticleLink,TextContainer,TextWrap,ArticleTitle,ArticleSummary,Figure,ArticleImage,PublishingDate,ArticleDetailsWrapper,ArticleItem,Border} from '../Components/Styled/article.styled.js';
const Article=(props)=>{
    var title = '';
    if(props.title2){
        title= props.title+ ' ' + props.title2;
    }
    else {
        title = props.title;
    }
    return(
        <ArticleLink 
            exact to={`/${props.landingPage}/${props.category.toLowerCase().replace(/[']/g,'').replace(/[&]/g,'and').replace(/[^\w\s]/g,'').replace(/\s/g,'-')}/${title.toLowerCase().replace(/[']/g,'').replace(/[&]/g,'and').replace(/[^\w\s]/g,'').replace(/\s/g,'-')}`} 
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

            <picture>
                    <source media="(max-width: 1024px)" srcSet={`${props.src}-small.${props.file_type} 1x, ${props.src}-2x.${props.file_type} 2x`}/>
                    <source media="(min-width: 1025px)" srcSet={`${props.src}-large.${props.file_type}`}/>
                    <ArticleImage alt={props.title} src={`${props.src}-large.${props.file_type}`}/>
                </picture>
                        <PublishingDate>{props.date}</PublishingDate>
                    </Figure>
                <TextContainer>
                    <TextWrap>
                        <Border alt="border top" top={true} src={"/assets/general/border.png"}/>
                        <ArticleTitleWrap>
                            <ArticleTitle largeHeading={props.largeHeading}>
                                {props.title.split(': ').length===2?props.title.split(': ')[0]+":":props.title}
                            </ArticleTitle>
                            {
                                props.title.split(':').length===2?
                                <ArticleTitle largeHeading={props.largeHeading}>
                                    {props.title.split(': ')[1]}
                                </ArticleTitle>:
                                null
                            }
                            {
                                props.title2?

                                <ArticleTitle largeHeading={props.largeHeading}>
                                    {props.title2}
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