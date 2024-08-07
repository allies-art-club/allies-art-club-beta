const homeReducer = (state={
    imageIndices: [],
    direction: 'right'
},action) =>{
    switch(action.type){
        case 'DIRECTION':
            state={
                ...state,
                direction: action.payload
            }
        break;
        case 'LEFT-BUTTON':
            state= {
                ...state,
                imageIndices: [...state.imageIndices.map(el=>{
                    if(el+1<(state.imageIndices.length-1)){
                        return el+1
                    }
                    else{
                        return -1
                    }
                })]
            }
        break;
        case 'RIGHT-BUTTON':
            state= {
                ...state,
                imageIndices: state.imageIndices.map(el=>{
                    if(el-1>-2){
                        return el-1;
                    }
                    else{
                        return state.imageIndices.length-2;                    
                    }
                })
            };
        break;
        default:
            break;
    }
    return state
}

export default homeReducer;