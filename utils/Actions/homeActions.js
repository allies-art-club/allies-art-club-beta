export function carouselClick(direction,dispatch) {
    dispatch({
        type:'DIRECTION',
        payload:direction
    })
    if(direction==='left'){
        dispatch({
            type: 'LEFT-BUTTON',
            payload: true
        })
    }
    else if(direction==='right'){
        dispatch({
            type: 'RIGHT-BUTTON',
            payload: true
        })
    }
}