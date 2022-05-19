import React, {useState} from 'react';
import { Slide } from 'react-slideshow-image';

// import bookmarkEmptySVG from './assets/icon-bookmark-empty.svg';
// import bookmarkFullSVG from './assets/icon-bookmark-full.svg';


import classes from '../Recommended/Recommended.module.css'
import 'react-slideshow-image/dist/styles.css'

const Trending = (props) => {

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

    const properties = {
        duration: 3000,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        indicators: true,
      };

      const style = {
        textAlign: 'center',
        background: 'teal',
        padding: '200px 0',
        fontSize: '30px'
      };


  return (
    <div className={classes.choicesContent}>
        {props.avalibleMovies.filter((movie) => 
            movie.isTrending === true).map((movie, i) => {
                return (
                    <div                       
                    className={classes.movieDiv}
                    key={i}
                    >

                            <Slide {...properties}>
                            {/* <div className={classes.movieThumbPic} > 
                        
                          <img 
                        //   src={toggleBookmark ? {bookmarkFullSVG} : {bookmarkEmptySVG}}
                          className={classes.bookmarkSVG}  
                          alt='bookmark img' 
                          onClick={() => 
                          bookmarkHandler1(movie)} 

                          />
                          <img className={classes.MovieImg} src={movie.thumbnail.regular.large} alt='movie thumbnail pic'/>
                      </div> */}
                      {/* <div className={classes.movieThumbInfo} >
                          <p>{movie.year} * {movie.category} * {movie.rating} </p>
                          <h3 className={classes.movieTitleH4}>{movie.title}</h3> 
                      </div> */}
                      <div style={style}><h1>{movie.title}</h1></div>

                            </Slide>
                        </div>

                )
            })}
    </div>
  )
}

export default Trending