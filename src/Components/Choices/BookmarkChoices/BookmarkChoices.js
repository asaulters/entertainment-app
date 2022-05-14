import React from 'react'

import bookmarkFullSVG from './assets/icon-bookmark-full.svg';

import classes from '../Recommended/Recommended.module.css';

const BookmarkChoices = (props) => {

    // console.log(props.bookmarks)
    const currentBookmarks =props.bookmarks.length;
    // console.log(currentBookmarks)
    // {currentBookmarks >0 && (
    //     console.log('bookmarks here')
    // )}

    const removeBookmark = (movieTitle) => {
        props.removeBookmark(movieTitle);
        console.log('removing ' + movieTitle)
    }

  return (
    <div className={classes.choicesContent}>
        {currentBookmarks <1 &&  (
             <>
                 <h1>No bookmarks here!</h1>
                 {console.log('no bookmarks!')}
             </>
        )}
        
        
        {props.bookmarks.map((movie, i) => {
            return (
                    <div 
                      className={classes.movieDiv}
                      key={i}
                    >
                       
                      {/* {console.log(movie.thumbnail.regular.large)} */}
                      <div className={classes.movieThumbPic} > 
                          <img src={bookmarkFullSVG} 
                          className={classes.bookmarkSVG}  
                          alt='bookmark img' 
                          onClick={() => removeBookmark(movie.title)}
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