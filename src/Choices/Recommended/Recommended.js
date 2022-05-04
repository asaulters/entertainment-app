import React from "react"; 

// import avalibleMovies from '../../data.json'

// import {ReactComponent as movieOneSVG} from '../../assets/thumbnails/beyond-earth';
import classes from './Recommended.module.css';

const Recommended = (props) => {

    const movies = () => {
        // props.avalibleMovies.filter((movie) => !isTrending).map((movie) => {
        //     console.log(movie.title)
        // })
        console.log(props.avalibleMovies.filter((movie) => 
        movies.isTrending !== true)
        );
    }



    return (
        <div className={classes.Recommended}>
            {props.avalibleMovies.filter((movie) => 
                movie.isTrending === false).map((movie, i) => {
                    return <div 
                                key={i} 
                                style={{
                                    // backgroundImage: 'url({../../../../assets/thumbnail/{movie.regular.large}})',
                                    backgroundImage: 'url({../../../../assets/thumbnail.movie.large})'
                                }}
                                >
                                {/* {console.log(movie.thumbnail.regular.large)} */}
                             <ul>{movie.title}</ul>
                             {/* <movieOneSVG /> */}
                        </div>
                    
                    
                })}
        </div>
    )
    
};

export default Recommended;