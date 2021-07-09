const downloadHandler=async(category,download,csrf)=>{
    try{
        const result = await fetch(`/api/resources/${download.split(' ').join('_')}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "csrf-token":csrf
                },

                credentials: "include",
                body: JSON.stringify({"category":category})
            }
        )
        console.log(result);
        console.log(result.body);
        const file= await result.blob();
        return file;
    }
    catch(e){
        console.log(e)
        throw e;
    }
}

export {downloadHandler}