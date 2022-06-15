import React, {useState, useEffect} from 'react';

import bookmarkEmptySVG from '../../../assets/icon-bookmark-empty.svg';


import { useGlobalContext } from '../../Store/GlobalContext';


import classes from './Recommended.module.css';
import Card from '../../Card/Card';

const Recomended = (props) => {
    const {state, dispatch} = useGlobalContext();
    const [toggleBookmark, setToggleBookmark] = useState(false)

    const movieFilter = (movie) => {
        let result = true;
        state.searchTerms.forEach((s) => {
          if (!movie.title.toLowerCase().includes(s)) {
            result = false;
          }
        });
        return result;
      };

    const bookmarkHandlerMain = (movie) => {
        //check for bookmark
        //if true, call remove
        //if false, call add
        {state.bookmarks.includes(movie) ? (
            <>
                {dispatch({type: 'removeBookmarks', payload: movie})}
                {/* {setToggleBookmark(false)} */}
            </>
        ): <>
                {dispatch({type: 'addBookmarks', payload: movie})}
                {/* {setToggleBookmark(true)}  */}
            </>
        }
        
    }


    return (
        <>
        
          <div className={classes.choicesContent}>
            {state.movies.filter((movie) => movie.isTrending === false).filter(movieFilter).map((movie, i) => (
              <div 
                          className={classes.movieDiv}
                          key={i}
                        >
                           {/* { SVGImg = {bookmarkEmptySVG}} */}
                          {/* {console.log(movie.thumbnail.regular.large)} */}
                          <div className={classes.movieThumbPic} > 
                            
                              <img 
                              src={bookmarkEmptySVG}
                              className={classes.bookmarkSVG}  
                              alt='bookmark img' 
                              onClick={() => 
                                bookmarkHandlerMain(movie)} 
    
                              />
                              <img className={classes.MovieImg} src={movie.thumbnail.regular.medium} alt='movie thumbnail pic'/>
                          </div>
                          <div className={classes.movieThumbInfo} >
                              <p>{movie.year} * {movie.category} * {movie.rating} </p>
                              <h3 className={classes.movieTitleH4}>{movie.title}</h3> 
                          </div>
                        </div>
            ))}
          </div>
        </>
      );
};

export default Recomended;
