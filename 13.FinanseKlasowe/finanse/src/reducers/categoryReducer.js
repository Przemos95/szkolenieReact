import { GET_CATEGORY_LIST } from '../actions/categoryActions';

const initialState = {
    categoryList: []
}

function categoryReducer(state = initialState, action) {
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