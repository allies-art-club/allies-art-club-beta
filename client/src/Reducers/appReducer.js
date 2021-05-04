const appReducer = (state={
    loggedIn: false,
    menuOpen: false
},action)=>{
    switch(action.type){
        case 'LOGGED_IN':
            state={
                ...state,
                loggedIn: true
            }
            break;
        case 'TOGGLE_MENU':
            state={
                ...state,
                menuOpen: !state.menuOpen
            }
            break;
        default:
            break;
    }
    return state
}

export default appReducer;