import React from 'react'

import bookmarkEmptySVG from './assets/icon-bookmark-empty.svg';

import classes from '../Recommended/Recommended.module.css';

const BookmarkChoices = (props) => {

    // console.log(props.bookmarks)
    const currentBookmarks =props.bookmarks.length;
    // console.log(currentBookmarks)
    // {currentBookmarks >0 && (
    //     console.log('bookmarks here')
    // )}
  return (
    <div className={classes.choicesContent}>
        {/* {currentBookmarks <1 && (
             return (
                 <h1></h1>
             )
         )} */}
        
        
        {props.bookmarks.map((movie, i) => {
            return (
                    <div 
                      className={classes.movieDiv}
                      key={i}
                    >
                       
                      {/* {console.log(movie.thumbnail.regular.large)} */}
                      <div className={classes.movieThumbPic} > 
                          <img src={bookmarkEmptySVG} 
                          className={classes.bookmarkSVG}  
                          alt='bookmark img' 
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

export default BookmarkChoices