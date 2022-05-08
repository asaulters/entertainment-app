import React from 'react';

import { Link, Route, Routes } from "react-router-dom";

import { ReactSVG } from 'react-svg';

import logoSVG from '../../assets/logo.svg';
import homeSVG from '../../assets/icon-nav-home.svg';
import movieSVG from '../../assets/icon-category-movie.svg';
import tvSVG from '../../assets/icon-category-tv.svg';
import bookmarkSVG from '../../assets/icon-nav-bookmark.svg';

import Movies from '../../Pages/Movies';
import classes from './Header.module.css'

const Header = (props) => {



    return(
        <header className={classes.header}>
            <img src={logoSVG} alt='logo nav img' className={classes.logoSVG}/>
            <nav className={classes.nav}>
                <ul className={classes.navImg}>
                    <Link to ='/' ><img src={homeSVG} className={classes.navImgRec}/></Link>
                </ul>
                <ul className={classes.navImg}>
                    <Link to ='/movies'><img src={movieSVG} className={classes.navImgMov}/></Link>
                </ul>
                <ul className={classes.navImg}>
                    <Link to = '/tv'><img src={tvSVG} className={classes.navImgTv}/></Link>
                </ul>
                <ul className={classes.navImg}>
                    <Link to ='/bookmarks'><img src={bookmarkSVG} className={classes.navImgBkmk}/></Link>
                </ul>

            </nav>
            <img src={require('../../assets/image-avatar.png')} alt='profile nav img' className={classes.avatar}/>
        </header>
    )
}

export default Header;