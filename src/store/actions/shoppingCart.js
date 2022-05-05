import shoppingCartApi from '../../utils/api/shoppingCartApi';
import { getToken } from '../selectors/selectorAuth';


const service = {
    fetchShoppingCart: () => async (dispatch, getState) => {
        const state = getState();
        const token = getToken(state);
        console.log(token)
        const shoppingCart = await shoppingCartApi.shoppingCart(token);
        return dispatch({
            type: "SET_SHOPPING_CART",
            shoppingCart
        });
    },

    getShoppingCart: (state) => {
        return state
            .shoppingCartReducer
            .shoppingCart;
    }
   
}

export default service;