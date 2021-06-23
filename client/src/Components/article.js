import React from 'react';
import { toggleSpinner } from '../Actions/donateActions.js';
import {connect} from 'react-redux';
import {ArticleWrapper,ArticleLink,TextContainer,TextWrap,ArticleTitle,ArticleSummary,Figure,ArticleImage,PublishingDate,ArticleDetailsWrapper,ArticleItem} from '../Components/Styled/article.styled.js';
const Article=(props)=>{
    console.log(props.title)
    return(
        <ArticleLink 
            exact to={`/${props.landingPage}/${props.category.toLowerCase().replace(/[']/g,'').replace(/[^\w\s]/g,'').replace(/\s/g,'-')}/${props.title.toLowerCase().replace(/[']/g,'').replace(/[^\w\s]/g,'').replace(/\s/g,'-')}`} 
            onClick={props.downloadHandler?async(e)=>{
                e.preventDefault();
                await toggleSpinner;
                var file = await props.downloadHandler(props.category,props.title,props.csrf);
                await toggleSpinner;
                var downloadLink = document.createElement('a');
                downloadLink.target = '_blank';
                downloadLink.download = props.title+'.pdf';
                var blob = new Blob([file], { type: 'application/pdf' });
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
                        <ArticleImage src={props.src}/>
                        <PublishingDate>{props.date}</PublishingDate>
                    </Figure>
                <TextContainer>
                    <TextWrap>
                        <ArticleTitle>
                            {props.title}
                        </ArticleTitle>
                        <ArticleSummary>{props.children}</ArticleSummary>
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