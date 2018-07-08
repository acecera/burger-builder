import React from 'react';
import classes from './BuildControl.js';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.ingredientLabel}>{props.ingredientLabel}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
  
);

export default buildControl;