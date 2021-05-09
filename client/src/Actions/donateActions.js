const handleChange = (input,dispatch)=>{
    dispatch({
        type:'UPDATE_INPUT_VALUE',
        payload: input
    })
}
const handleSubmit=(event,donation,dispatch)=>{
    console.log(donation)
    event.preventDefault();
    fetch('/db/donation',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(donation)

    })
    .then((res)=>console.log('YESSSSSS',res))
    .catch((err)=>console.log('something fucked up'))
}

export {handleChange,handleSubmit}