import React from 'react';

import bookmarkSVG from './assets/icon-bookmark-empty.svg';

import classes from './movieChoices.module.css';

const movieChoices = (props) => {
  return (
    <div>
        {props.avalibleChoices.filter((movie) =>
            movie.category === 'Movie').map((movie, i) => {
                return (
                    <div 
                      className={classes.movieChoiceDiv}
                      key={i}
                    >
                      <div className={classes.movieThumbPic}>
                        <img src={bookmarkSVG} />
                        <img className={classes.movieImg} src={movie.thumbnail.regular.large} />
                      </div>
                      <div className={classes.movieInfo}>
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