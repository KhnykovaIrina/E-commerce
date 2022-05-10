import shoppingCartApi from '../../utils/api/shoppingCartApi';
import { getToken } from '../selectors/auth';
import { getShoppingCart } from '../selectors/shoppingCart';


const service = {
    fetchShoppingCart: () => async (dispatch, getState) => {
        const state = getState();
        const token = getToken(state);
        const shoppingCart = await shoppingCartApi.shoppingCart(token);
        return dispatch({
            type: "SET_SHOPPING_CART",
            shoppingCart
        });
    },

    deleteItem: (item) => async (dispatch, getState) => {
        const state = getState();
        const token = getToken(state);
        const shoppingCart = getShoppingCart(state);
        console.log(token, item, shoppingCart)
        await shoppingCartApi.deleteItem(shoppingCart.id, item.id, token);
        dispatch(service.fetchShoppingCart());
    },

}

export default service;