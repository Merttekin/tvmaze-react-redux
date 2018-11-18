import axios from 'axios';

export const MOVIE_DETAIL = 'MOVIE_DETAIL';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

export function movieDetail(movie){
    return{
        type: MOVIE_DETAIL,
        payload: {
            movie
        }
    }
}

export function fetchMovies(){
    return dispatch => {
        axios.get('http://api.tvmaze.com/search/shows?q=batman')
            .then(response => response.data)
            .then(data => dispatch({
                type: FETCH_MOVIES,
                payload: data
            }))
            .catch(error => dispatch({
                type: FETCH_MOVIES_ERROR,
                payload: error
            }))
    }
}