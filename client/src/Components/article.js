import React from 'react';
import {ArticleWrapper,ArticleLink,TextWrap,ArticleTitle,ArticleSummary,Figure,ArticleImage,PublishingDate} from '../Components/Styled/article.styled.js';
const Article=(props)=>{
    console.log(props.title)
    return(
        <ArticleLink exact to={`/articles/${props.title.toLowerCase().replace(/[']/g,'').replace(/[^\w\s]/g,'').replace(/\s/g,'-')}`}>
            <ArticleWrapper right={props.right} >
                    <Figure >
                        <ArticleImage src={props.src}/>
                        <PublishingDate>{props.date}</PublishingDate>
                    </Figure>
                <TextWrap>
                    <ArticleTitle>
                        {props.title}
                    </ArticleTitle>
                    <ArticleSummary>{props.children}</ArticleSummary>
                </TextWrap>
            </ArticleWrapper>
        </ArticleLink>
    )
}
export default Article;