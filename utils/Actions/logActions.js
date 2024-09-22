const logActions=async(csrf,error,functionInputs)=>{
    await fetch('/exempt/log',{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            "csrf-token":csrf
        },
        credentials: "include",
        body:JSON.stringify({
            error: error,
            callstack:functionInputs
        })
    })
}

export default logActions;