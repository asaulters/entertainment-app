import React, {useState} from 'react';
import { useGlobalContext } from '../../Store/GlobalContext';

import bookmarkEmptySVG from './assets/icon-bookmark-empty.svg';
import bookmarkFullSVG from './assets/icon-bookmark-full.svg';

import classes from '../Recommended/Recommended.module.css';

// import ran from './'

const MovieChoices = (props) => {
  const {state, dispatch} = useGlobalContext();
  const [toggleBookmark, setToggleBookmark] = useState(false)

  const bookmarkHandlerMain = (movie) => {
    //check for bookmark
    //if true, call remove
    //if false, call add
    {state.bookmarks.includes(movie) ? (
        <>
            {dispatch({type: 'removeBookmarks', payload: movie})}
        </>
    ): <>
            {dispatch({type: 'addBookmarks', payload: movie})} 
        </>
    }
    
}
  
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
                          src={toggleBookmark ? {bookmarkFullSVG} : {bookmarkEmptySVG}}
                          className={classes.bookmarkSVG}  
                          alt='bookmark img' 
                          onClick={() => 
                            bookmarkHandlerMain(movie)} 

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