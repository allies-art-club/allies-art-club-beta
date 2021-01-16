const homeReducer = (state={
    imageIndices: [-1,0,1,2],
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
                imageIndices: state.imageIndices.map(el=>{
                    if(el+1<3){
                        return el+=1
                    }
                    else{
                        return el=-1
                    }
                })
            }
        break;
        case 'RIGHT-BUTTON':
            state= {
                ...state,
                imageIndices: state.imageIndices.map(el=>{
                    if(el-1>-2){
                        return el-=1
                    }
                    else{
                        return el=2                    }
                })
            };
        break;
        default:
            break;
    }
    return state
}

export default homeReducer;