const beAnAllieReducer = (state={
    errorMessage:{
        contactUs:'',
        member:''
    }
},action)=>{
    switch(action.type){
        case 'ERROR_AMEND':
            state={
                ...state
            }
            var payload = action.payload.page;
            state.errorMessage[payload]=action.payload.message;
            break;
        default:
            break;
    }
    return state
}

export default beAnAllieReducer;