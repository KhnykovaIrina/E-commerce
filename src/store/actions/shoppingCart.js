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
        await shoppingCartApi.deleteItem(shoppingCart.id, item.id, token);
        dispatch(service.fetchShoppingCart());
    },

    addItem: (item, quantity) => async (dispatch, getState) => {
        const state = getState();
        const token = getToken(state);
        const shoppingCart = getShoppingCart(state);

        await shoppingCartApi.addItem(shoppingCart.id, {
            variant: item.id,
            quantity: quantity,
        }, token);
    },


    updateItem: (item, quantity) => async (dispatch, getState) => {
        const state = getState();
        const token = getToken(state);
        const shoppingCart = getShoppingCart(state);

        await shoppingCartApi.updateItem(shoppingCart.id, item.id, {
            variant: item.id,
            quantity: quantity,
        }, token);

        dispatch(service.fetchShoppingCart());
    },
}

export default service;