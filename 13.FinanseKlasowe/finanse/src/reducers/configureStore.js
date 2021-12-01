import historyReducer from "./historyReducer";
import categoryReducer from "./categoryReducer";
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import HistoryService from "../service/HistoryService";
import CategoryService from "../service/CategoryService";
import thunk from 'redux-thunk';

const configureStore = () => {
    const reducers = combineReducers({
        historyReducer,
        categoryReducer,
    })

    const services = {
        historyService: new HistoryService(),
        categoryService: new CategoryService(),
    }

    return createStore(reducers, {}, compose(applyMiddleware(thunk.withExtraArgument(services))));
};

export default configureStore;