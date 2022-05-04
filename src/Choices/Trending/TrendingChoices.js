import React from "react";
import { ReactSVG } from 'react-svg';

import classes from './TrendingChoices.module.css';
import bookmarkSVG from '../../assets/icon-bookmark-empty.svg'

const TrendingChoices = () => {

    return (
        <div className={classes.trendingDiv}>
            <div className={classes.slider} >
            <div className={classes.trendingItem1}>;
                <img src={bookmarkSVG} className={classes.bookmarkSVG}  alt='bookmark img'/>;
                <div className={classes.imgInfo}>
                    <div className={classes.imgInfoTop}>
                        <p>2019 Movie PG</p>
                        <h3>Beyond Earth</h3>
                    </div>
                </div>
            </div>;
            <div className={classes.trendingItem2}>;
                <img src={bookmarkSVG} className={classes.bookmarkSVG}  alt='bookmark img'/>;
                <div className={classes.imgInfo}>
                    <div className={classes.imgInfoTop}>
                        <p>2021 Movie PG</p>
                        <h3>Bottom Gear</h3>
                    </div>
                </div>
            </div>;
            <div className={classes.trendingItem3}>;
                <img src={bookmarkSVG} className={classes.bookmarkSVG}  alt='bookmark img'/>;
                <div className={classes.imgInfo}>
                    <div className={classes.imgInfoTop}>
                        <p>2019 TV Series E</p>
                        <h3>Undescovered Cities</h3>
                    </div>
                </div>
            </div>;
            {/* <div className={classes.trendingItem4}>;
                <img src={bookmarkSVG} alt='bookmark img'/>;
            </div>;
            <div className={classes.trendingItem5}>;
               <img src={bookmarkSVG} alt='bookmark img'/>;
            </div>; */}
            </div>
        </div>
    )
};

export default TrendingChoices;