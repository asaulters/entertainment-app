import React from 'react'

import bookmarkFullSVG from './assets/icon-bookmark-full.svg';
import { useGlobalContext } from '../../Store/GlobalContext';

import classes from '../Recommended/Recommended.module.css';

const BookmarkChoices = (props) => {
  const {state} = useGlobalContext()


    const removeBookmark = (movieTitle) => {
        props.removeBookmark(movieTitle);
        console.log('removing ' + movieTitle)
    }

  return (
    <div className={classes.choicesContent}>
    
        {state.bookmarks <1 &&  (
             <>
                 <h1>No bookmarks here!</h1>
                 {console.log('no bookmarks!')}
             </>
         )}
        
        {/* {console.log(state.movies)} */}
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