import {keyframes} from 'styled-components';

const theme = {
    pink: '#FF66C4',
    blue: '#38B6FF',
    yellow: '#FFF859'
}
const textGlow = keyframes`
    from {
        text-shadow: 1px 1px 5px ${props=>props.theme.blue},1px -1px 5px ${props=>props.theme.blue},-1px 1px 5px ${props=>props.theme.blue},-1px -1px 5px ${props=>props.theme.blue};
    }
    to {
        text-shadow:  0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF;
    }
`

export {textGlow,theme};