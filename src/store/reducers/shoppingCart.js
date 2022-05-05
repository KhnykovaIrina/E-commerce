const initialState = {
   shoppingCart: {},
};

const shoppingCartReducer=(state = initialState, action)=> {
   switch (action.type) {
       case 'SET_SHOPPING_CART':
           return {
               ...state,
               shoppingCart: action.shoppingCart
           };
       default:
           return state;
   }
}

export default shoppingCartReducer;