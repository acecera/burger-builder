import * as actionTypes from './actionTypes';
import axios from '../../axiosOrders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const getIngredientsFailed = () => {
    return {
        type: actionTypes.GET_INGREDIENTS_FAILED
    };
};

export const initialIngredients = () => {
    return dispatch => {
        axios.get('https://react-burger-builder-83d6f.firebaseio.com/ingredients.json')
        .then(response => {
            dispatch(setIngredients(response.data));
        })
        .catch(error => {
            dispatch(getIngredientsFailed());
        });
    };
};