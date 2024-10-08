
const handleCardElementChange =(event,dispatch)=>{
    if(event.error){
        dispatch({
            type: "CARD_ERROR_AMEND",
            payload: {
                elementType: event.elementType,
                errorMessage:event.error.message
            }
        })
    }
    else if(Object.keys(event).length>1) {
        dispatch({
            type: "CARD_ERROR_AMEND",
            payload: {
                elementType: event.elementType,
                errorMessage: ''
            }
        })
    }
}
const handleSubmitSupplies=async(values,csrf,dispatch)=>{
    try{
        const res = await fetch('/api/supplies',{
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "csrf-token":csrf,
            },
            credentials: "include",
            body: JSON.stringify(values)
        })
        if(res.status!==200){
            dispatch({
                type:"ERROR_AMEND_SUPPLIES",
                payload:"Our database update has not been successful. We are working to fix this. Please try again later."
            })
        }
        else {
            return true
        }

    }
    catch(e){
        console.log(e)
        dispatch({
            type:"ERROR_AMEND_SUPPLIES",
            payload:"Unknown error. We are working to fix this. Please try again later."
        })
    }
}
const cardValidate=(card,dispatch)=>{
    const fields = Object.keys(card);
    var valid = true;
    for(var i=0;i<fields.length;i++){
        if(card[fields[i]].valid===false){
            if(!card[fields[i]].errorMessage){
                dispatch({
                    type: "CARD_ERROR_AMEND",
                    payload: {
                        elementType: fields[i],
                        errorMessage:'Required'
                    }
                })
            }
            valid=false
        }
    }
    return valid;
}
const handleSubmit=async(donation,cardElement,stripe,csrf,dispatch)=>{
    //add validation
    const res = await fetch('/api/payment',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "csrf-token":csrf
        },
        credentials: "include",
        body: JSON.stringify(donation)
    })
    if(res.status!==200){

        dispatch({
            type: "ERROR_AMEND",
            payload: 'A problem has occurred with our payment connections. We are working to resolve this issue. You have not been charged.'
        })
        throw new Error('Connection to stripe failed');
    }
    const jsonRes = await res.json();
    const clientSecret = jsonRes['client_secret'];
    const stripeId = jsonRes['stripeId'];
    const result = await stripe.confirmCardPayment(clientSecret,{
        payment_method: {
            card: cardElement,
            billing_details:{
                email: donation.email
            }
        }
    })

    if(result.error){
        //show error to customer
        dispatch({
            type: "ERROR_AMEND",
            payload: result.error.message
        })
        await fetch('/api/deletePayment',{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "csrf-token":csrf
            },
            credentials: "include",
            body: JSON.stringify({stripeId:stripeId}),
            mode: 'cors'
        })
        throw new Error('Payment failed')
    }
    else {
        dispatch({
            type: "ERROR_AMEND",
            payload: ''
        })
        //Show success message to customer
        if(result.paymentIntent.status==='succeeded'){
            await fetch('/api/updatePayment',{
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "csrf-token":csrf
                },
                credentials: "include",
                body: JSON.stringify({stripeId:stripeId})
            })
            return true;
        }
    }
}

export {handleCardElementChange, handleSubmit,cardValidate,handleSubmitSupplies}