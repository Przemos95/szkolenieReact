import MovieService from "../services/MovieService";

export const AddMovie = (movie) => {
    return {
        type: 'ADD_MOVIE',
        payload: movie
    };
}

export const RemoveMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        payload: {
            movieId: id
        }
    }
}

export const GetMoviesResult = (movies) => {
    return {
        type: 'GET_MOVIES',
        payload: movies
    }
}

export const GetMovies = () => {
    return (dispatch, getState, services) => {
        console.log('Wywołanie middleware');
        services
            .movieService
            .getAllMovies()
            .then(x => dispatch(GetMoviesResult(x)));
    }
} 