import styled,{keyframes} from 'styled-components';
import {theme} from './theme/theme.js';
const rotate = keyframes`
    from{
        transform:rotate(0)
    }
    to {
        transform:rotate(360deg)
    }
`
const SpinnerWrapper = styled.div`
    position:fixed;
    top:0px;
    right:0px;
    display:${props=>props.$visible?"flex":"none"};
    justify-content:center;
    align-items:center;
    width:100vw;
    height:0;
    z-index:1000;
`

const SpinnerInner = styled.div`
    position:absolute;
    top:50vh;
    left:50vw;
    transform:translate(-50%,-50%);
    width: 40px;
    height: 40px;
    border-top: 4px ${theme.pink} solid;
    border: 2px #ddd solid;
    @media(min-width:768px){
        border: 3px #ddd solid;
        width:6px;
        height:6px;
        border-top: 6px ${theme.pink} solid;
    }
    @media(min-width:1025px){
        border: 4px #ddd solid;
        width:80px;
        height:80px;
        border-top: 8px ${theme.pink} solid;
    }
    @media(min-width:1300px){
        border-top: 10px ${theme.pink} solid;
        width:100px;
        height:100px;
    }
    border-radius: 50%;
    animation: ${rotate} 1s infinite ease-out;
`

export {SpinnerWrapper,SpinnerInner}