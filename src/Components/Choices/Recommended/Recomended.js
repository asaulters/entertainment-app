import React, {useState} from 'react';

import bookmarkEmptySVG from './assets/icon-bookmark-empty.svg';
import bookmarkFullSVG from './assets/icon-bookmark-full.svg';

// import {ReactComponent as movieOneSVG} from '../../assets/thumbnails/beyond-earth';
import classes from './Recommended.module.css';

const Recomended = (props) => {
    const [toggleBookmark, setToggleBookmark] = useState(false)

    const bookmarkHandler1 = (movie)=>{
    
        props.onBookmark(movie);
        setToggleBookmark(true);
        
      }
    
      const removeBookmark = (movieTitle) => {
        props.removeBookmark(movieTitle);
        setToggleBookmark(false)
        console.log('removing ' + movieTitle)
    }

    return (
        
        <div className={classes.choicesContent}>
           {props.avalibleMovies.filter((movie) => 
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
                          <img className={classes.MovieImg} src={movie.thumbnail.regular.large} alt='movie thumbnail pic'/>
                      </div>
                      <div className={classes.movieThumbInfo} >
                          <p>{movie.year} * {movie.category} * {movie.rating} </p>
                          <h3 className={classes.movieTitleH4}>{movie.title}</h3> 
                      </div>
                    </div>
                );
                    
                    
                })}
           </div>
        
    )
}

export default Recomended;

// const Recommended = (props) => {

//     // const imgUrl = 'url({../../../../assets/thumbnail.movie.large})'

//     const bookmarkHandler1 = (movie)=>{
//         // console.log(movie);
//         props.onBookmark(movie);
//       }

//       const removeBookmark = (movieTitle) => {
//         props.removeBookmark(movieTitle);
//         console.log('removing ' + movieTitle)
//     }

//     return (
//         <div className={classes.choicesContent}>
            // {this.props.avalibleMovies.filter((movie) => 
            //     movie.isTrending === false).map((movie, i) => {
            //         return <div 
            //                     className={classes.movieDiv}
            //                     key={i} 
            //                     >
            //                     {/* {console.log(movie.thumbnail.regular.large)} */}
            //                     <div className={classes.movieThumbPic} > 
            //                         <img 
            //                         src={bookmarkSVG} 
            //                         className={classes.bookmarkSVG}  
            //                         alt='bookmark img'
            //                         onClick={() => bookmarkHandler1(movie)}
            //                         />
                                    
            //                         <img className={classes.MovieImg} src={movie.thumbnail.regular.large} />
            //                     </div>
            //                     <div className={classes.movieThumbInfo} >
            //                         <p>{movie.year} * {movie.category} * {movie.rating} </p>
            //                         <h3 className={classes.movieTitleH4}>{movie.title}</h3> 
            //                     </div>

            //                  {/* <ul>{movie.title}</ul> */}
            //                  {/* <movieOneSVG /> */}
            //             </div>
                    
                    
            //     })}
//         </div>
//     )
    
// };

// export default Recommended;