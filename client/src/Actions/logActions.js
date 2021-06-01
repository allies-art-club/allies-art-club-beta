const logActions=async(csrf,error,functionCall)=>{
    await fetch('/exempt/log',{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            "csrf-token":csrf
        },
        credentials: "include",
        body:JSON.stringify({
            error: error,
            callstack:functionCall
        })
    })
}

export default logActions;