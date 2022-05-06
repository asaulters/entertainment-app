import React from 'react';

import { Link, Route, Routes } from "react-router-dom";

import { ReactSVG } from 'react-svg';

import logoSVG from '../assets/logo.svg';
import homeSVG from '../assets/icon-nav-home.svg';
import movieSVG from '../assets/icon-category-movie.svg';
import tvSVG from '../assets/icon-category-tv.svg';
import bookmarkSVG from '../assets/icon-nav-bookmark.svg';

import Movies from '../Pages/Movies';
import classes from './Header.module.css'

const Header = (props) => {

    const movieLink = () => {
        <Link to={Movies} />
    }

    return(
        <header className={classes.header}>
            <img src={logoSVG} alt='logo nav img' className={classes.logoSVG}/>
            <nav className={classes.nav}>
                <ul className={classes.navImg}>
                    <a ><img src={homeSVG} className={classes.navImgRec}/></a>
                </ul>
                <ul className={classes.navImg}>
                    <Link to = {Movies}><img src={movieSVG} className={classes.navImgMov}/></Link>
                </ul>
                <ul className={classes.navImg}>
                <Link to = '../Pages/Movies.js'><img src={tvSVG} className={classes.navImgTv}/></Link>
                </ul>
                <ul className={classes.navImg}>
                    <a><img src={bookmarkSVG} className={classes.navImgBkmk}/></a>
                </ul>
                {/* <Routes> */}
                {/* <Link  element={Movies}>
                <React.Fragment>
                <img src={homeSVG} alt='home nav img' className={classes.navImg1}/>
                </React.Fragment> */}
                {/* </Route> */}
                {/* </Link> */}
                {/* <img src={homeSVG} alt='home nav img' className={classes.navImg1}/></Route>
                <ReactSVG src={movieSVG} alt='movie nav img' className={classes.navMovieImg} 
                width='150' height='150'
                />

                
                <ReactSVG src={tvSVG} alt='tv nav img' className={classes.navMovieImg}/>
                <img src={bookmarkSVG} alt='bookmark nav img' className={classes.navImgs}/> */}
                {/* </Routes> */}
            </nav>
            <img src={require('../assets/image-avatar.png')} alt='profile nav img' className={classes.avatar}/>
        </header>
    )
}

export default Header;