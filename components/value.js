"use client"
import React, {Fragment,useState} from 'react';
import {Message,SpeechBubble,Tag} from './Styled/about.styled.js'
const Value = (props)=> {
    const [showMessage,setMessage]=useState(false);
    const handleClick=(event)=>{
        var id = "value"+props.id;
        if(event.target.id !==id){
            setMessage(showMessage);
            window.removeEventListener('click',handleClick)
        }
    }
    const toggleMessage=(event)=>{

        if(!showMessage){
            setTimeout(function(){
                setMessage(!showMessage);
                window.addEventListener('click',handleClick);
                return ;
            },100)
        }

    }
    return(
        <Fragment>
            <Tag $tagWidth={props.tagWidth} $tagVertical={props.tagVertical} $tagHorizontal={props.tagHorizontal} $tagHeight={props.tagHeight} onClick={(event)=>toggleMessage(event)}/>
            <SpeechBubble id={"value"+props.id} $messageWidth={props.messageWidth} $messageVertical={props.messageVertical} $messageLeft={props.messageLeft} $messageHorizontal={props.messageHorizontal} $visible={showMessage}>
                <Message >{props.children}</Message>
            </SpeechBubble>
        </Fragment>
    )
}

export default Value;