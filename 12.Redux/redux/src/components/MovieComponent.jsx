import React from "react";
import { connect } from "react-redux";
import { AddMovie, GetMovies } from "../actions/movieActions";
import { AddMovie as AddMovieToDirector } from '../actions/directorActions';

class MovieComponent extends React.Component {
    onChange = () => {
        // this.props.addMovieLocal(
        //     { id: 2, title: 'Harry Potter', stars: null}
        // )
        this.props.getMovies();
    }

    removeMovie = () => {
    }

    render() {
        return(
            <div>
                {this.props.movies
                    .map(x => <div key={x.id}>{x.title}</div>)}
                <button onClick={this.onChange}>Dodaj</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        movies: state.movieReducer.movies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addMovieLocal: (movie) => dispatch(AddMovie(movie)),
        addMovieToDirector: (directorId, movie) => dispatch(AddMovieToDirector(directorId, movie)),
        getMovies: () => dispatch(GetMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);