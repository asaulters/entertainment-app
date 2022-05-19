import React from "react"; 

// import avalibleMovies from '../../data.json'
import TGLimg from './thumbnails/the-great-lands/regular/large.jpg';
// import bgdImg from '/movie/thumbnail/regular/large'
import bookmarkSVG from '../../assets/icon-bookmark-empty.svg';


// import {ReactComponent as movieOneSVG} from '../../assets/thumbnails/beyond-earth';
import classes from './Recommended.module.css';

const Recommended = (props) => {

    // const imgUrl = 'url({../../../../assets/thumbnail.movie.large})'
 

    return (
        <div className={classes.Recommended}>
            {props.avalibleMovies.filter((movie) => 
                movie.isTrending === false).map((movie, i) => {
                    return <div 
                                className={classes.movieDiv}
                                key={i} 
                                style={{
                                    backgroundImage: TGLimg,
                                    // backgroundImage: 'url({.//thumbnail.movie.large})'
                                }}
                                >
                                {/* {console.log(movie.thumbnail.regular.large)} */}
                                <div className={classes.movieThumbPic}> 
                                    <img src={bookmarkSVG} className={classes.bookmarkSVG}  alt='bookmark img'/>
                                    <img className={classes.recommendedMovieImg} src={movie.thumbnail.regular.large}/>
                                </div>
                                <div className={classes.movieThumbInfo} >
                                    <p>{movie.year} * {movie.category} * {movie.rating} </p>
                                    <h3 className={classes.movieTitleH4}>{movie.title}</h3> 
                                </div>

                             {/* <ul>{movie.title}</ul> */}
                             {/* <movieOneSVG /> */}
                        </div>
                    
                    
                })}
        </div>
    )
    
};

export default Recommended;