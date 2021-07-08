import styled from 'styled-components';
import {theme} from './theme/theme.js';
const Quote =styled.p`
    color:${theme.pink};
    clear: both;
    margin: 1rem auto;
`
const SubTitle=styled.p`

`
const FoundationImage=styled.img`
    float:right;
    border-radius:50%;
`
const MissionWrapper=styled.div`
    position:relative;
    margin: 20px 0;
    @media(min-width:768px){
        margin:${props=>props.artCare?"20px 0":"40px 0px"};
    }
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
    position:relative;
    margin:0;
    width:100%;
    @media(min-width:768px){
        margin:auto auto auto 2rem;
        width: 40%;
    }
    @media(min-width:850px){
        margin:auto auto auto 2rem;
        width: 50%;
    }
    @media(min-width:1025px){
        width: 60%;
    }
    @media(min-width:1300px){
        width: 65%;
    }
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
const MissionBorder=styled.img`
    position:absolute;
    top:${props=>props.top?"-10px":"auto"};

    bottom:${props=>props.top?"auto":"-10px"};
    @media(min-width: 768px){
        top:${props=>props.top?"-20px":"auto"};
        bottom:${props=>props.top?"auto":"-20px"};
    }
    right:0;
    width:100%;
    @media(min-width:768px){
        left: calc(200px + 2rem);
        width:40%;
    }
    @media(min-width:850px){
        left: calc(200px + 2rem);
        width:50%;
    }

    @media(min-width:1025px){
        width:60%;

    }

    @media(min-width:1300px){
        width:65%;

    }
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
const IFrame = styled.iframe`
    width:100%;
    height:calc((100vw * 0.95 - 60px) * 9/16);
    @media(min-width:768px){
        height:calc((70vw - 80px) * 9/16);
    }
    margin-bottom:2rem;
`
export {Quote,SubTitle,FoundationImage,MissionWrapper,MissionDesc,Mission,MissionBorder,ValuesWrap,ValuesImage,Tag,AllieWrap,TextWrapper,Message,SpeechBubble,IFrame};