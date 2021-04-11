import React, {Fragment} from 'react';
import { ClipboardContainer,ClipboardIcon} from '../Styled/clipboard.styled.js';
const Clipboard = (props)=> {
    return (
        <ClipboardContainer>
                <ClipboardIcon src='./assets/clipboard/Paperclip.png'/>
                {
                    props.children
                }
        </ClipboardContainer>
    )
}

export default Clipboard;