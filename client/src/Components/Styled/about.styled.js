import styled from 'styled-components';
import {theme} from './theme/theme.js';
const Quote =styled.p`
    font-size: 1.2rem;
    color:${theme.pink};
`
const SubTitle=styled.p`

`
const FoundationImage=styled.img`
    float:right;
    border-radius:50%;
`
const MissionWrapper=styled.div`
    display:flex;
    @media(max-width:767px){
        flex-direction: column;
    }
    justify-content: space-between;
    flex-wrap:wrap;
    align-items: center;
`
const Mission=styled.h2`
    background-color:${theme.pink};
    display:block;
    line-height: 40px;
    margin-bottom:10px;
    @media(min-width: 768px) and (max-width:1024px){
        line-height: 30px;
        font-size:18px;
    }
    @media(min-width: 768px){
        width: 25%;
    }
    text-align: center;
`
const MissionDesc=styled.p`
    width: 70%;
    margin:auto;
    border-top: 1px dashed red;
`
const ValuesWrap=styled.figure`
    position:relative;
    width:100%;
    margin:auto;
`
const ValuesImage=styled.img`
    display:block;
    margin:auto;
    width:100%;

`
const Tag = styled.div`
    position: absolute;
    cursor: pointer;
    width:${props=>props.tagWidth}%;
    top:${props=>props.tagVertical}%;
    left:${props=>props.tagHorizontal}%;
    height:${props=>props.tagHeight}%;
`

const AllieWrap = styled.div`
    display:flex;
    @media(max-width:1024px){
        flex-direction:column;
    }
    @media(min-width:1025px){
        align-items:center;
    }
`

const TextWrapper=styled.div`
    @media(min-width:1025px){
        width:50%;
    }
`
const SpeechBubble =styled.div`
    border: 3px solid ${theme.pink};
    border-radius: 20px;
    position:absolute;
    background: white;
    width: 80%;
    z-index:10;
    top: ${props=>props.messageVertical}%;
    left: ${props=>props.messageLeft?"-10%":"auto"};
    right: ${props=>props.messageLeft?"auto":"0"};
    display: ${props=>props.visible?"block":"none"};
    &::after {
        content: "";
        position:absolute;
        background:white;
        z-index:10;
        border-top: 3px solid ${theme.pink};
        border-left: 3px solid ${theme.pink};
        right: ${props=>props.messageHorizontal}%;
        
        height:20px;
        width:20px;
        top: -12px;
        @media(min-width:421px){
            top:-17px;
            height:30px;
            width:30px;
        }
        transform: rotate(45deg);
    }

`
const Message = styled.figcaption`
    padding: 15px;
`

export {Quote,SubTitle,FoundationImage,MissionWrapper,MissionDesc,Mission,ValuesWrap,ValuesImage,Tag,AllieWrap,TextWrapper,Message,SpeechBubble};