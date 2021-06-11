import styled from 'styled-components';

const Quote =styled.p`
    font-size: 1.2rem;
    color:pink;
`
const SubTitle=styled.p`

`
const FoundationImage=styled.img`
    float:right;
    border-radius:50%;
`
const MissionWrapper=styled.div`
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap;
`
const Mission=styled.h2`
    background-color:pink;
    display:block;
    width: 25%;
`
const MissionDesc=styled.p`
    width: 70%;
    border-top: 1px dashed red;
`
const ValuesWrap=styled.figure`

`
const Values=styled.img`
    display:block;
    margin:auto;
    width:80%;

`
const Tag = styled.figcaption`

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


export {Quote,SubTitle,FoundationImage,MissionWrapper,MissionDesc,Mission,ValuesWrap,Values,Tag,AllieWrap,TextWrapper}