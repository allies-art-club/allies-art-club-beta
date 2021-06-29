import React,{Fragment} from 'react';
import {ImageWrapper,ImageText} from '../Components/Styled/donate.styled.js';
import {CentreImage} from '../Components/Styled/titleBanner.styled';

const TextRibbon=(props)=>{
    return(
        <Fragment>
            <ImageWrapper>
                <CentreImage alt={"Text ribbon"}src={'/assets/general/ribbon.png'}></CentreImage>
                <ImageText>
                {
                    props.children
                }

                </ImageText>
            </ImageWrapper>
        </Fragment>
    )

}

export default TextRibbon