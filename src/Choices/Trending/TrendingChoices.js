import React from "react";
import { ReactSVG } from 'react-svg';

import classes from './TrendingChoices.module.css';
import bookmarkSVG from '../../assets/icon-bookmark-full.svg'

const TrendingChoices = () => {

    return (
        <div className={classes.trendingDiv}>
            <div className={classes.trendingItem1}>;
                <img src={bookmarkSVG} alt='bookmark img'/>;
            </div>;
            <div className={classes.trendingItem2}>;
                <img src={bookmarkSVG} alt='bookmark img'/>;
            </div>;
            <div className={classes.trendingItem3}>;
                <img src={bookmarkSVG} alt='bookmark img'/>;
            </div>;
            <div className={classes.trendingItem4}>;
                <img src={bookmarkSVG} alt='bookmark img'/>;
            </div>;
            <div className={classes.trendingItem5}>;
               <img src={bookmarkSVG} alt='bookmark img'/>;
            </div>;
        </div>
    )
};

export default TrendingChoices;