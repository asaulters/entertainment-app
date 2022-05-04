import React from 'react';
import { ReactSVG } from 'react-svg';

import logoSVG from '../assets/logo.svg';
import homeSVG from '../assets/icon-nav-home.svg';
import movieSVG from '../assets/icon-category-movie.svg';
import tvSVG from '../assets/icon-category-tv.svg';
import bookmarkSVG from '../assets/icon-nav-bookmark.svg';

import classes from './Header.module.css'

const Header = (props) => {

    return(
        <header className={classes.header}>
            <img src={logoSVG} alt='logo nav img' className={classes.logoSVG}/>
            <div className={classes.navImgDiv}>
                <img src={homeSVG} alt='home nav img' className={classes.navImgs}/>
                <ReactSVG src={movieSVG} alt='movie nav img' className={classes.navImgs}/>
                <ReactSVG src={tvSVG} alt='tv nav img' className={classes.navImgs}/>
                <img src={bookmarkSVG} alt='bookmark nav img' className={classes.navImgs}/>
            </div>
            <img src={require('../assets/image-avatar.png')} alt='profile nav img' className={classes.avatar}/>
        </header>
    )
}

export default Header;