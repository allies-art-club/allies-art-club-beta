const downloadHandler=async(category,download,csrf)=>{
    try{
        console.log(csrf);
        const result = await fetch(`/api/resources/${download}`,{

            method:"POST",
            headers:{
                "Content-Type":"application/pdf",
                "csrf-token":csrf
            },

            credentials: "include",
            body: category
            }
        )
        console.log(result);
        const file= await result.json();
        return file;
    }
    catch(e){
        console.log(e)
        throw e;
    }
}

export {downloadHandler}