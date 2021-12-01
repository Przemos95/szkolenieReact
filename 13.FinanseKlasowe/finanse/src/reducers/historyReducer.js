import { ADD_PURCHASE, GET_HISTORY_LIST, REMOVE_PURCHASE } from "../actions/historyAction";

const initialState = {
    historyList: [],
}

function historyReducer(state = initialState, action) {
    switch (action.type) {
        case GET_HISTORY_LIST:
            return {
                ...state,
                historyList: action.payload,
            };
        case ADD_PURCHASE:
            return {
                ...state,
                historyList: [...state.historyList, action.payload]
            };
        case REMOVE_PURCHASE:
            return {
                ...state,
                historyList: state.historyList.filter(x => x.id !== action.payload)
            }
        default:
            return state;
    }
}

export default historyReducer;