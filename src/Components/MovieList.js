import React from 'react';
import StarRating from './Stars';
import Review from './Reviews';


const MovieList = (props) => {
    
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='movie' key={movie.id}>
                    <div className='image-container d-flex justify-content-center m-3'>
                        <img src={movie.Poster} alt='movie'></img>
                    </div>
                    <div className='movie-info'>
                    <div>{movie.Info}</div>
                    </div>
                    <div className='star'>
                        <StarRating />
                    </div>
                    <div className='review'>
                        <Review />
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;