import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope you have a great day!</h1>
            <div style={{width: '300px', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button 
            btnType="Danger" 
            clicked={props.onCheckoutCancelled}>CANCEL</Button>
            <Button 
            btnType="Success" 
            clicked={props.onCheckoutContinue}>CONTINUE</Button>
        </div>
    );
}

export default CheckoutSummary;