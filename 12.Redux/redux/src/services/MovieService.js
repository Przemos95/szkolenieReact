class MovieService {
    constructor() {
        console.log('Tworzę movie service')
    }
    
    movieList = [
        { id: 1, title: 'HP 1', start: 4 },
        { id: 2, title: 'HP 2', start: 3 },
        { id: 3, title: 'HP 3', start: 5 }
    ];

    async getAllMovies() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Resolved');
                resolve(this.movieList);
            }, 2000);
        })
    }
}

export default MovieService;