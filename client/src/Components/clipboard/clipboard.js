import React from 'react';
import { ClipboardContainer,ClipboardWrapper,ClipboardIcon,GlowingColumn,GlowingColumnContainer,Content} from '../Styled/clipboard.styled.js';
const Clipboard = (props)=> {
    return (
        <ClipboardContainer>
                
                <GlowingColumnContainer>
                    <GlowingColumn />
                    <GlowingColumn />
                </GlowingColumnContainer>
                <ClipboardWrapper>

                    <ClipboardIcon src='/assets/clipboard/Paperclip.png'/>
                    
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