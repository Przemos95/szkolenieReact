import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { thunk } from 'redux-thunk';
import { movieReducer } from './movieReducer';
import { directorReducer } from './directorReducer';

const configureStore = () => {
    const rootReducer = combineReducers({
        movieReducer,
        directorReducer
    });

    return createStore(rootReducer, {}, compose(applyMiddleware(thunk)));
};

export default configureStore;