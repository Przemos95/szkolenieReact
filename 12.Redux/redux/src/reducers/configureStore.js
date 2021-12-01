import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import { movieReducer } from './movieReducer';
import { directorReducer } from './directorReducer';
import MovieService from '../services/MovieService';
import DirectorService from '../services/DirectorService';

const configureStore = () => {
    const rootReducer = combineReducers({
        movieReducer,
        directorReducer
    });

    const services = {
        movieService: new MovieService(),
        directorService: new DirectorService(),
    };

    return createStore(rootReducer, {}, compose(applyMiddleware(thunk.withExtraArgument(services))));
};

export default configureStore;