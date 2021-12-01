import { ADD_PURCHASE, GET_HISTORY_LIST, REMOVE_PURCHASE, ActionType as HistoryActionType } from "../actions/historyAction";
import Product from "../models/Product";

export interface StateType {
    historyList: Product[],
}

const initialState: StateType = {
    historyList: [],
}

function historyReducer(state: StateType = initialState, action: HistoryActionType): StateType {
    switch (action.type) {
        case GET_HISTORY_LIST:
            return {
                ...state,
                historyList: action.historyList,
            };
        case ADD_PURCHASE:
            return {
                ...state,
                historyList: [...state.historyList, action.purchase]
            };
        case REMOVE_PURCHASE:
            return {
                ...state,
                historyList: state.historyList.filter(x => x.id !== action.id)
            }
        default:
            return state;
    }
}

export default historyReducer;