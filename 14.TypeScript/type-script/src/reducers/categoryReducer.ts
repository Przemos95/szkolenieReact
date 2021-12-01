import { GET_CATEGORY_LIST, ActionType as CategoryActionType } from '../actions/categoryActions';
import Category from '../models/Category';

export interface StateType {
    categoryList: Category[],
}

const initialState: StateType = {
    categoryList: []
}

function categoryReducer(state: StateType = initialState, action: CategoryActionType): StateType {
    switch (action.type) {
        case GET_CATEGORY_LIST:
            return {
                ...state,
                categoryList: action.payload
            };
        default:
            return state;
    }
}

export default categoryReducer;