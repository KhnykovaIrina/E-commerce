const intialState = {
   categories: [],
   products:[],
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
         };
      default:
         return state
   }

}


export default catalogReducer;