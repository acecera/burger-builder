import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const purchaseInitialize = (state, action) => {
    return updateObject(state, {purchased: false});
};

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, {loading: false});
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, {id: action.orderId});
    return updateObject(state, {
        loading: false, 
        purchased: true,
        orders: state.orders.concat(newOrder)
    });
};

const purchaseBurgerFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const getOrdersStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const getOrdersSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders, 
        loading: false
    });
};

const getOrdersFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INITIALIZE: return purchaseInitialize(state, action);
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
        case actionTypes.GET_ORDERS_START: return getOrdersStart(state, action);
        case actionTypes.GET_ORDERS_SUCCESS: return getOrdersSuccess(state, action);
        case actionTypes.GET_ORDERS_FAIL: return getOrdersFail(state, action);
        default: return state;
    }
};

export default reducer;