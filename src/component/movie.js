import React from 'react';
const image_api = "https://image.tmdb.org/t/p/w1280";

const setRating = (vote) => {
    if(vote >= 8){
        return "green";
    } else if(vote >= 6){
        return "orange";
    } else {
        return "red";
    }
}

const Movie = ({ title, poster_path, overview, vote_average }) => (
    <div className = "movie">
        <img src={poster_path ? (image_api + poster_path) : "https://media1.fdncms.com/inlander/imager/u/original/24484900/movie-theater.jpg"} alt={title} />
        <div className="movie_info">
            <h4>{title}</h4>
            <span className={`tag ${setRating(vote_average)}`}>{vote_average}</span>
        </div>
        <div className="movie-overview">
            <h3 className='overview'>Overview</h3>
            <p className='overview'>{overview}</p>
        </div>
    </div>
);
export default Movie;