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

export const SetMovies = (movies) => {
    return {
        type: 'SET_MOVIES',
        payload: movies
    }
}

export const thunkAction = () => {
    return (dispatch) => {
        new Promise((resolve) => {
            setTimeout(() => resolve(this.categoryList), 1000);
        })
            .then(res => {
                dispatch(SetMovies(res))
            })
    }
} 