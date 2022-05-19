import catalogApi from '../../utils/api/catalogApi';
import { getListCurrentProducts } from '../selectors/catalog';
import productApi from "../../utils/api/productApi";

const service = {
    fetchCategories: () => async (dispatch, getState) => {
        const state = getState();
        if (state.catalogReducer.categories.length === 0) {
            const categories = await catalogApi.getListCategories();
            return dispatch({
                type: 'SET_CATEGORIES',
                categories
            });
        }
    },

    fetchProducts: (id) => async (dispatch) => {
        let extraParams = {
            query: "",
            relations: "variants",
            sort: "variants.price",
            take: "10",
            skip: "0",
		}
        extraParams.query=id;
        const products = await catalogApi.getListProducts(extraParams);
        return dispatch({
            type: 'SET_PRODUCTS',
            products,
        });
    },
    loadMoreProducts: () => async (dispatch, getState) => {
        let isLoad = false
        const currentProducts = getListCurrentProducts(getState())
        let params = {
            relations: "variants",
            sort: "variants.price",
            take: "10",
            skip: "0",
        }
        params.skip = currentProducts.length
        const nextProducts = await catalogApi.getListProducts(params);
        if (nextProducts.length < params.take) {
            isLoad = true
        }
        const products = currentProducts.concat(nextProducts);
        return dispatch({
            type: 'SET_PRODUCTS',
            products,
            isLoad,
        });
    },
    fetchProduct: (id) => async (dispatch) => {
        const product = await productApi.getEntity({id, extraParams: {
                relations: ['variants', 'comments']
            }});

        return dispatch({
            type: 'SET_PRODUCT',
            product
        });
    },

    getListCategories: (state) => {
        return state
            .catalogReducer
            .categories
            .filter((category) => category.name !== '');
    },

    getRootCategories: (state) => {
        return state
            .catalogReducer
            .categories
            .filter((category) => category.name !== '' && category.parent_id === 0);
    },

    getListOfProducts: (state) => {
        return state
            .catalogReducer
            .products
    },

    getCategoryById: (id, state) => {
        return state
            .catalogReducer
            .categories
            .find((category) => category.id === id);
    },

    isLoaded: (state) => {
        return state
            .catalogReducer
            .isLoad
    },
    getProduct: (state) => {
        return state
            .catalogReducer
            .product
    }
}

export default service;