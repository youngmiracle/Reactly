const defaultState = {
    cash: 0,
}
const cashReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'ADD_CASH':
        return {...state, cash: state.cash + action.playload};
      case 'GET_CASH':
        return {...state, cash: state.cash - action.playload};
        
        default: return state;
    }
}

export default cashReducer;