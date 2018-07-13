import React from 'react';
import Button from '../../components/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Components {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Ace',
                address: {
                    street: "Street",
                    zipCode: '91505',
                    country: "USA"
                },
                email: 'test@yahoo.com'
            },
            deliveryMethod: 'Fastest'
        }
        axios.post('/orders.json', order)
             .then(response => {
                 this.setState({loading: false});
             })
             .catch(error => {
                 this.setState({loading: false})
             });
    }

    render () {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="text" name="email" placeholder="Your Email" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postalCode" placeholder="Zip Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Info</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;