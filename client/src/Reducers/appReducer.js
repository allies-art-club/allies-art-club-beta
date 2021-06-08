const appReducer = (state={
    loggedIn: false,
    menuOpen: false,
    token: '',
    subMenu:{
        about:false,
        updates:false,
        projects:false,
        "be-an-allie":false
    }
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
        
        case 'TOGGLE_SUBMENU':
            state={
                ...state,
            }
            var subMenu = action.payload;
            state.subMenu[subMenu]=!state.subMenu[subMenu];
            break;
        case 'SET_TOKEN':
            console.log('PAAAAAAAAAAAAAAAAYLOAD');
            state={
                ...state,
                token: action.payload
            }
            break;
        default:
            break;
    }
    return state
}

export default appReducer;