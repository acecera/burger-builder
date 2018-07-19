import * as actionTypes from './actionTypes';
import axios from '../../axiosOrders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderID: id, 
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json?auth=' + token, orderData) 
            .then(response => {
                console.log(response.data);
                dispatch(purchaseBurgerSuccess(response.data.name, orderData));
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            });
    };
};

export const purchaseInitialize = () => {
    return {
        type: actionTypes.PURCHASE_INITIALIZE
    };
};

export const getOrdersSuccess = (orders) => {
    return {
        types: actionTypes.GET_ORDERS_SUCCESS,
        orders: orders
    };
};

export const getOrdersFail = (error) => {
    return {
        types: actionTypes.GET_ORDERS_FAIL,
        error: error
    };
};

export const getOrdersStart = () => {
    return {
        type: actionTypes.GET_ORDERS_START
    };
};

export const getOrders = (token, userId) => {
    return dispatch => {
        dispatch(getOrdersStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/orders.json?auth=' + queryParams)
            .then(res => {
                 const fetchedOrders = [];
                 for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                 }
                 dispatch(getOrdersSuccess(fetchedOrders));
             })
            .catch(err => {
                 dispatch(getOrdersFail(err));
             });
    };
};



