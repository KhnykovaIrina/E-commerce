const initialState = {
   user: JSON.parse(localStorage.getItem("user") || "{}"),
}

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'SET_USER':
         return {
            ...state,
            user: action.user,
         };
      default:
         return state;
   }

}
export default userReducer;