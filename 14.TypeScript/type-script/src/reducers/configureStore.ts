import historyReducer, { StateType as HistoryStateType } from "./historyReducer";
import categoryReducer, { StateType as CategoryStateType } from "./categoryReducer";
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import HistoryService from "../service/HistoryService";
import CategoryService from "../service/CategoryService";
import thunk from 'redux-thunk';

export interface MyRootState {
    historyReducer: HistoryStateType
    categoryReducer: CategoryStateType
}

export interface Services {
    historyService: HistoryService;
    categoryService: CategoryService;
}

const configureStore = () => {
    const reducers = combineReducers({
        historyReducer,
        categoryReducer,
    })

    const services: Services = {
        historyService: new HistoryService(),
        categoryService: new CategoryService(),
    }

    return createStore(reducers, {}, compose(applyMiddleware(thunk.withExtraArgument(services))));
};

export default configureStore;