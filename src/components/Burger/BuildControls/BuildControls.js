import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {ingredientLabel: 'Lettuce', type: 'lettuce'},
    {ingredientLabel: 'Bacon', type: 'bacon'},
    {ingredientLabel: 'Cheese', type: 'cheese'},
    {ingredientLabel: 'Meat', type: 'meat'},
    {ingredientLabel: 'Onion', type: 'onion'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.ingredientLabel} 
            ingredientLabel={ctrl.ingredientLabel} 
            added={() => props.ingredientAdded(ctrl.type)} 
            removed={() => props.ingredientRemoved(ctrl.type)} 
            disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;