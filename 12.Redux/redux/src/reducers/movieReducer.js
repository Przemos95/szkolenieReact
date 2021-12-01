const initialState = {
    movies: [
        { id: 1, title: 'Władca Pierścieni', starts: null }
    ]
};

export function movieReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter(x => x.id !== x.payload.movieId)
            }
        case 'GET_MOVIES':
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state;
    }
}