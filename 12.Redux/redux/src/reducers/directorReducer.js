const initialState = {
    directors: [
        { id: 1, name: '', movieIds: [] }
    ],
};

export function directorReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MOVIE_TO_DIRECTOR':
            const director = state.directors.find(x => x.id = action.payload.directorId);
            return {
                directors: [
                    ...state.directors.filter(x => x.id !== action.payload.directorId),
                    {
                        ...director,
                        movies: [...director.movies, action.payload.movie]
                    }
                ]
            }
        default:
            return state;
    }
}