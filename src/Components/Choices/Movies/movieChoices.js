import React from 'react';

import bookmarkSVG from './assets/icon-bookmark-empty.svg';

import classes from '../Recommended/Recommended.module.css';

// import ran from './'

const movieChoices = (props) => {
  return (
    <div className={classes.choicesContent}>
        {props.avalibleChoices.filter((movie) =>
            movie.category === 'Movie').map((movie, i) => {
                return (
                    <div 
                      className={classes.movieDiv}
                      key={i}
                    >
                      {/* {console.log(movie.thumbnail.regular.large)} */}
                      <div className={classes.movieThumbPic}> 
                          <img src={bookmarkSVG} className={classes.bookmarkSVG}  alt='bookmark img'/>
                          <img className={classes.MovieImg} src={movie.thumbnail.regular.large} alt='movie thumbnail pic'/>
                      </div>
                      <div className={classes.movieThumbInfo} >
                          <p>{movie.year} * {movie.category} * {movie.rating} </p>
                          <h3 className={classes.movieTitleH4}>{movie.title}</h3> 
                      </div>
                    </div>
                );
            })

        
        } 
    </div>
  )
}

export default movieChoices