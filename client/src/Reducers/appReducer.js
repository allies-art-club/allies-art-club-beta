const appReducer = (state={
    loggedIn: false
},action)=>{
    switch(action.type){
        case action.type ==='LOGGED_IN':
            state= {
                ...state,
                loggedIn: true
            }
            break;
        default:
            break;
    }
    return state
}

export default appReducer;