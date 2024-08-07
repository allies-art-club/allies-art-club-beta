"use client"
import React from 'react';
import {SpinnerWrapper,SpinnerInner} from './Styled/spinner.styled.js';
const Spinner =(props)=>{
    return(
        <SpinnerWrapper $visible={props.visible}>
            <SpinnerInner />
        </SpinnerWrapper>
    )
}

export default Spinner;