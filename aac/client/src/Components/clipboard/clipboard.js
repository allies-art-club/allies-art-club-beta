import React from 'react';
import { ClipboardContainer,ClipboardWrapper,ClipboardIcon,Content} from '../Styled/clipboard.styled.js';
const Clipboard = (props)=> {
    return (
        <ClipboardContainer id="clipboard">
                <ClipboardWrapper id="clipboardWrap">

                    <ClipboardIcon alt={"Paperclip"} src='/assets/clipboard/Paperclip.png'/>
                    
                    <Content>
                        {
                            props.children
                        }
                    </Content>

                </ClipboardWrapper>
        </ClipboardContainer>
    )
}

export default Clipboard;