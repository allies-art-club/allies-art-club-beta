export async function logOut(event,dispatch){
    try{
        console.log('here')

        // event.preventDefault()
        const myHeaders = new Headers({
            'Access-Control-Allow-Origin': '*'
        })
        sessionStorage.clear()
        await fetch('/logout',{
            headers:myHeaders
        })
        
        dispatch({
            type: 'RESET_STATE',
            payload:  'LOGGED OUT'
        })
    }
    catch(e){
        console.log(e)
    }
    
}

export function toggleMenu(event,dispatch){
    try {
        dispatch({
            type: 'TOGGLE_MENU',
            payload: ''
        })
    }
    catch(e){
        console.log(e)
    }

}