import catalogApi from '../../utils/api/catalogApi'

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

    getCategoryById: (id, state) => {
        return state
            .catalogReducer
            .categories
            .find((category) => category.id === id);
    }
}
export default service;