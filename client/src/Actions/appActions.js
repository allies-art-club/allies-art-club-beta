export async function logOut(event,dispatch){
    try{

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
export function toggleSubMenu(subMenu,dispatch){

    try{
        console.log('err')
        dispatch({
            type: 'TOGGLE_SUBMENU',
            payload:subMenu
        })
    }
    catch(e){
        console.log(e);
    }
}

export function setCsrfToken(token,dispatch){
    dispatch({
        type: 'SET_TOKEN',
        payload: token
    })
}

export function toggleSpinner (dispatch){
    dispatch({
        type: 'TOGGLE_SPINNER',
        payload: undefined
    })
}