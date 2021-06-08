import React from 'react';
import {ArticleWrapper,TextWrap,ArticleTitle,ArticleSummary,Figure,ArticleImage,PublishingDate} from '../Components/Styled/article.styled.js';
const Article=(props)=>{
    return(
        <ArticleWrapper>
            <TextWrap>
                <Figure>
                    <ArticleImage src={'/assets/'}/>
                    <PublishingDate></PublishingDate>
                </Figure>
                <ArticleTitle>

                </ArticleTitle>
                <ArticleSummary></ArticleSummary>
            </TextWrap>
        </ArticleWrapper>
    )
}
export default Article;