const donateReducer = (state={
    name: '',
    email: '',
    organisation: '',
    donationAmount: '',
    cardName: '',
    cardNumber: '',
    cardExpiration: '',
    cardCvv: '',
    message: '',
    cardType: ''
},action) =>{
    switch(action.type){
        case 'UPDATE_INPUT_VALUE':
            state={
                ...state
            }
            var name = action.payload.name;
            state[name]= action.payload.value;
        break;
        default:
            break;
    }
    return state
}

export default donateReducer;