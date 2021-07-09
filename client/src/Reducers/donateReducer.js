const donateReducer = (state={
    card: {
        cardExpiry: {
            errorMessage:'',
            valid:false,
        },
        cardNumber: {
            errorMessage:'',
            valid:false,
        },
        cardCvc: {
            errorMessage:'',
            valid:false,
        }
    },
    errorMessage: '',
    errorMessageSupplies: '',
    supplyError: ''
},action) =>{
    switch(action.type){
        case 'UPDATE_INPUT_VALUE':
            state={
                ...state
            }
            var name = action.payload.name;
            state.donateObj[name]= action.payload.value;
            break;


        case 'TOGGLE_SUBMIT':
            state={
                ...state,
                submitActive: !state.submitActive
            }
            break;
        case 'ERROR_AMEND':
            state={
                ...state,
                errorMessage: action.payload
            }
            break;

        case 'CARD_ERROR_AMEND':
            state= {
                ...state,
            }
            var type = action.payload.elementType;
            var error = action.payload.errorMessage;
            if(error){
                state.card[type].valid=false;
            }
            else {
                state.card[type].valid = true;
            }
            state.card[type].errorMessage=error;
            break;
        case 'ERROR_AMEND_SUPPLIES':
            state={
                ...state,
                supplyError: action.payload
            }
            break;
            
        default:
            break;
    }
    return state
}

export default donateReducer;