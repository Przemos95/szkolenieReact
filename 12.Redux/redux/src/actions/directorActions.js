export const AddMovie = (directorId, movie) => {
    return {
        type: 'ADD_MOVIE_TO_DIRECTOR',
        payload: {
            directorId: directorId,
            movie: movie
        }
    };
}