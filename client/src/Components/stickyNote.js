import React from 'react';
import { Benefit,BenefitWrapper,StickyNote } from './Styled/article.styled';


const StickyNoteWrap = (props)=> {
    return(
            <BenefitWrapper>
                <StickyNote alt={"sticky note"} src={"/assets/general/sticky-note.png"} />
                <Benefit values={props.values?1:0}>{props.benefit}</Benefit>

            </BenefitWrapper>
    )
}

export default StickyNoteWrap;