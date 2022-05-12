import React from 'react';

import bookmarkEmptySVG from './assets/icon-bookmark-empty.svg';

import classes from '../Recommended/Recommended.module.css';

const TVChoices = (props) => {

    const bookmarkHandler1 = (movie)=>{
        // console.log(movie);
        props.onBookmark(movie);
      }

    return( 
        <div className={classes.choicesContent}>
        {props.avalibleChoices.filter((movie) => 
            movie.category ==="TV Series").map((movie, i) => {
                return <div 
                className={classes.movieDiv}
                key={i} 
                >
                {/* {console.log(movie.thumbnail.regular.large)} */}
                <div className={classes.movieThumbPic}> 
                    <img 
                        src={bookmarkEmptySVG} 
                        className={classes.bookmarkSVG}  
                        alt='bookmark img'
                        onClick={() => bookmarkHandler1(movie)}
                        />
                    <img className={classes.MovieImg} src={movie.thumbnail.regular.large} alt="tv show thumb pic"/>
                </div>
                <div className={classes.movieThumbInfo} >
                    <p>{movie.year} * {movie.category} * {movie.rating} </p>
                    <h3 className={classes.movieTitleH4}>{movie.title}</h3> 
                </div>

            </div>
        })}
        </div>
    )
} ;

export default TVChoices;