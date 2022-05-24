import orderApi from '../../utils/api/orderApi';
import { getToken } from '../selectors/auth';
import { getOrder } from '../selectors/order';


const service = {

    /**
     *  Action that fetch and store order
     * @returns {function(): Promise<*>}
    */

    fetchOrder: () => async (dispatch, getState) => {
        const state = getState();
        const token = getToken(state);
        const order = await orderApi.loadOrder(token);
        return dispatch({
            type: "SET_ORDER",
            order
        });
    },

    addAddress: (payload) => async (dispatch, getState) => {
        const state = getState();
        const token = getToken(state);
        const currentOrder = getOrder(state)
        const order = await orderApi.addAddress(payload, currentOrder.id, token);
        return dispatch({
            type: "SET_ORDER",
            order
        });
    },


}

export default service;