import React, {useState, useEffect} from 'react';

import bookmarkEmptySVG from './assets/icon-bookmark-empty.svg';
import bookmarkFullSVG from './assets/icon-bookmark-full.svg';

// import {ReactComponent as movieOneSVG} from '../../assets/thumbnails/beyond-earth';
import classes from './Recommended.module.css';
import Card from '../../Card/Card';

const Recomended = (props) => {
    const [toggleBookmark, setToggleBookmark] = useState(false)
    let userSearched = props.userSearch;

    // useEffect(() => {
    //     console.log(props.userSearch)
    // })
    // console.log('user searched ' + userSearched)    

    const bookmarkHandler1 = (movie)=>{
        props.onBookmark(movie);
        setToggleBookmark(true);
      }
    
      const removeBookmark = (movieTitle) => {
        props.removeBookmark(movieTitle);
        setToggleBookmark(false)
        console.log('removing ' + movieTitle)
    }

    const mappedCard = (movie, i) => {
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
                  bookmarkHandler1(movie)} 

                  />
                  {/* {console.log(toggleBookmark)}
                  {console.log(bookmarkEmptySVG)} */}
                  <img className={classes.MovieImg} src={movie.thumbnail.regular.large} alt='movie thumbnail pic'/>
              </div>
              <div className={classes.movieThumbInfo} >
                  <p>{movie.year} * {movie.category} * {movie.rating} </p>
                  <h3 className={classes.movieTitleH4}>{movie.title}</h3> 
              </div>
            </div>
        );
    }



    return (
        
        <div className={classes.choicesContent}>
        {/* check if userSearch > 0 */}
            {userSearched > 0 ? userSearched.map((movie, i) => {

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
                          bookmarkHandler1(movie)} 
        
                          />
                          {/* {console.log(toggleBookmark)}
                          {console.log(bookmarkEmptySVG)} */}
                          <img className={classes.MovieImg} src={movie.thumbnail.regular.large} alt='movie thumbnail pic'/>
                      </div>
                      <div className={classes.movieThumbInfo} >
                          <p>{movie.year} * {movie.category} * {movie.rating} </p>
                          <h3 className={classes.movieTitleH4}>{movie.title}</h3> 
                      </div>
                    </div>
                );
            }) :
           props.avalibleMovies.filter((movie) => 
                movie.isTrending === false).map((movie, i) => {
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
                          bookmarkHandler1(movie)} 
        
                          />
                          {/* {console.log(toggleBookmark)}
                          {console.log(bookmarkEmptySVG)} */}
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
};

export default Recomended;
