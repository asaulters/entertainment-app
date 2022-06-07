import React, {useState} from 'react';
import { Slide } from 'react-slideshow-image';

// import bookmarkEmptySVG from './assets/icon-bookmark-empty.svg';
// import bookmarkFullSVG from './assets/icon-bookmark-full.svg';


import classes from './Trending.module.css'
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
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        indicators: true,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }

        ]
      };

      const style = {
        textAlign: 'center',
        background: 'teal',
        padding: '200px 0',
        fontSize: '30px'
      };


  return (
    <div className={classes.choicesContent}>
        <Slide {...properties} className={classes.slides}>
        {props.avalibleMovies.filter((movie) => 
            movie.isTrending === true).map((movie, i) => {
                return (
                    <div                       
                    className={classes.movieDiv}
                    key={i}
                    >
                            <div className={classes.movieThumbPic} > 
                        
                          <img 
                        //   src={toggleBookmark ? {bookmarkFullSVG} : {bookmarkEmptySVG}}
                          className={classes.bookmarkSVG}  
                          alt='bookmark img' 
                          onClick={() => 
                          bookmarkHandler1(movie)} 

                          />
                          <img className={classes.MovieImg} src={process.env.PUBLIC_URL + movie.thumbnail.regular.large} alt='movie thumbnail pic'/>
                          {/* {console.log(movie.thumbnail.regular.large)} */}
                          <div className={classes.movieThumbInfo}  >
                          <p>{movie.year} * {movie.category} * {movie.rating} </p>
                          <h3 className={classes.movieTitleH4}>{movie.title}</h3> 
                      </div>
                      </div> 

                        </div>

                )
            })}
            </Slide>
    </div>
  )
}

export default Trending