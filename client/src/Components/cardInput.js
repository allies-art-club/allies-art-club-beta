import React from 'react';
import {CardElement} from '@stripe/react-stripe-js';
const CardInput = ()=>{
    const options = {
        hidePostalCode:true
    }
    return(
        <>
            <CardElement options={options}></CardElement>
        </>
    )
}

export default CardInput;