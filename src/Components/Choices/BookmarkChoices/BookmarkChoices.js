import React from 'react'

import bookmarkFullSVG from './assets/icon-bookmark-full.svg';
import { useGlobalContext } from '../../Store/GlobalContext';

import classes from '../Recommended/Recommended.module.css';

const BookmarkChoices = (props) => {
  const {state, dispatch} = useGlobalContext()

  

  return (
    <div className={classes.choicesContent}>
    
        {state.bookmarks <1 &&  (
             <>
                 <h1>No bookmarks yet!</h1>
             </>
         )}
       {state.bookmarks.map((movie, i) => {
             return (
                     <div 
                       className={classes.movieDiv}
                       key={i}
                     >
                       <div className={classes.movieThumbPic} > 
                           <img src={bookmarkFullSVG} 
                           className={classes.bookmarkSVG}  
                           alt='bookmark img' 
                           onClick={() => dispatch({type: "removeBookmarks", payload: movie})}
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