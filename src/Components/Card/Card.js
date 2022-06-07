import React from 'react'

import classes from '../Choices/Recommended/Recommended.module.css'

const Card = (movie, i) => {
        return (
                    
            <div 
              className={classes.movieDiv}
              key={i}
            >
               {/* { SVGImg = {bookmarkEmptySVG}} */}
              {/* {console.log(movie.thumbnail.regular.large)} */}
              <div className={classes.movieThumbPic} > 
                
                  <img 
                //   src={toggleBookmark ? {bookmarkFullSVG} : {bookmarkEmptySVG}}
                  className={classes.bookmarkSVG}  
                  alt='bookmark img' 
                //   onClick={() => 
                //   bookmarkHandler1(movie)} 

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

export default Card