import React,{Fragment} from 'react';
import {CardElement} from '@stripe/react-stripe-js';
const CardInput = ()=>{
    const options = {
        hidePostalCode:true
    }
    return(
        <Fragment>
            <CardElement options={options}></CardElement>
        </Fragment>
    )
}

export default CardInput;