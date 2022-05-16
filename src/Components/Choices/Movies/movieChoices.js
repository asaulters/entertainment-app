import React, {useState} from 'react';

import bookmarkEmptySVG from './assets/icon-bookmark-empty.svg';
import bookmarkFullSVG from './assets/icon-bookmark-full.svg';

import classes from '../Recommended/Recommended.module.css';

// import ran from './'

const MovieChoices = (props) => {
  const [bookmarked, setBookmarked] = useState(false)

  const bookmarkHandler1 = (movie)=>{
    
    props.onBookmark(movie);
    setBookmarked(true);
    
  }

  const removeBookmark = (movieTitle) => {
    props.removeBookmark(movieTitle);
    console.log('removing ' + movieTitle)
}

  // const imgSrc = {bookmarked ? {bookmarkFullSVG} : {bookmarkEmptySVG}}

  // {bookmarked ? {bookmarkFullSVG} : {bookmarkEmptySVG}
  
  return (
    <div className={classes.choicesContent}>

        {props.avalibleChoices.filter((movie) =>
            movie.category === 'Movie').map((movie, i ) => {
                return (
                    
                    <div 
                      className={classes.movieDiv}
                      key={i}
                    >
                       {/* { SVGImg = {bookmarkEmptySVG}} */}
                      {/* {console.log(movie.thumbnail.regular.large)} */}
                      <div className={classes.movieThumbPic} > 
                        
                          <img 
                          // src={bookmarked ? {bookmarkFullSVG} : {bookmarkEmptySVG}}
                          className={classes.bookmarkSVG}  
                          alt='bookmark img' 
                          onClick={() => 
                          bookmarkHandler1(movie)} 

                          />
                          <img className={classes.MovieImg} src={movie.thumbnail.regular.large} alt='movie thumbnail pic'/>
                      </div>
                      <div className={classes.movieThumbInfo} >
                          <p>{movie.year} * {movie.category} * {movie.rating} </p>
                          <h3 className={classes.movieTitleH4}>{movie.title}</h3> 
                      </div>
                    </div>
                );
            }, this)

        
        } 
    </div>
  )
}

export default MovieChoices