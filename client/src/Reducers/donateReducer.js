const donateReducer = (state={
    donateObj: {
        name: '',
        email: '',
        organisation: '',
        donationAmount: '',
        message: '',
    },
    spinnerVisible: false,
    submitActive: true,
    errorMessage: ''
},action) =>{
    switch(action.type){
        case 'UPDATE_INPUT_VALUE':
            state={
                ...state
            }
            var name = action.payload.name;
            state.donateObj[name]= action.payload.value;
            break;
        case 'TOGGLE_SPINNER':
            state={
                ...state,
                spinnerVisible: !state.spinnerVisible
            }
            break;

        case 'TOGGLE_SUBMIT':
            state={
                ...state,
                submitActive: !state.submitActive
            }
            break;
        case 'ERROR_AMEND':
            console.log('res');
            state={
                ...state,
                errorMessage: action.payload
            }
            break;
        default:
            break;
    }
    return state
}

export default donateReducer;