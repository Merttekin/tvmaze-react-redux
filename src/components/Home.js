import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovies } from '../actions/movies';
// import Movies from '../actions/movies';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }

    static PropTypes = {
        movies: PropTypes.array.isRequired
    }

    componentDidMount() {
        // fetch('http://api.tvmaze.com/search/shows?q=batman')
        //     .then(response => response.json())
        //     .then(data => this.setState({ movies: data }));

        this.props.fetchMovies();
    }

    render() {
        console.log(this.props);
        const { movies } = this.props;

        return (
            <div>
                <h1>Batman TV Shows</h1>
                {movies && movies.map(item =>
                    <li key={item.show.id}>
                        <Link to={`/about/${item.show.id}`}>{item.show.name} </Link>
                    </li>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.Movies.movies
})

const mapDispatchToProps = {
    fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);