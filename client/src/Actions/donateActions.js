
const handleChange = (input,dispatch)=>{
    dispatch({
        type:'UPDATE_INPUT_VALUE',
        payload: input
    })
}
const handleSubmit=async(donation,cardElement,stripe,csrf,dispatch)=>{
    console.log('CSRFFFFFFFFFFFFFFFFFFFFF',csrf)
    dispatch({
        type: "TOGGLE_SUBMIT",
        payload: undefined
    })
    //add validation
    const res = await fetch('/api/payment',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "csrf-token":csrf
        },
        credentials: "include",
        body: JSON.stringify(donation.donateObj)
    })
    if(res.status!==200){
        dispatch({
            type: "TOGGLE_SUBMIT",
            payload: undefined
        })

        dispatch({
            type: "ERROR_AMEND",
            payload: 'A problem has occurred with our payment connections. We are working to resolve this issue. You have not been charged.'
        })
    }
    console.log('yehhh')
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
    console.log('HEYAAA',result);

    dispatch({
        type: "TOGGLE_SUBMIT",
        payload: undefined
    })
    if(result.error){
        //show error to customer
        console.log(result.error);
        dispatch({
            type: "ERROR_AMEND",
            payload: result.error.message
        })
        await fetch('/api/deletePayment',{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "csrf-token":csrf
            },
            credentials: "include",
            body: JSON.stringify({stripeId:stripeId})
        })
    }
    else {
        dispatch({
            type: "ERROR_AMEND",
            payload: ''
        })
        //Show success message to customer
        console.log(result);
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
            console.log('Money up!!')
            return true;
        }
    }
}

const toggleSpinner = (dispatch) => {
    dispatch({
        type: 'TOGGLE_SPINNER',
        payload: undefined
    })
}
const validation = {
    name: function(value){

    },
    email: function(value){

    },
    
}
export {handleChange,handleSubmit,toggleSpinner}