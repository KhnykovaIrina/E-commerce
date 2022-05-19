const intialState = {
   categories: [],
   products: [],
   isLoad: null,
   product: {},
}

const catalogReducer = (state = intialState, action) => {

   switch (action.type) {
      case "SET_CATEGORIES":
         return {
            ...state,
            categories: action.categories,
         };
      case 'SET_PRODUCTS':
         return {
            ...state,
            products: action.products,
            isLoad: action.isLoad,
         };
      case 'SET_PRODUCT':
         return {
            ...state,
            product: action.product
         };
      default:
         return state
   }

}


export default catalogReducer;