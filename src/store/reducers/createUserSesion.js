const initialState = {
   userSession: [],
}

export default function createUserSesion(state = initialState, action) {
   switch (action.type) {
      case 'USER_SESSION':
         return {
            userSession: action.payload,
         };
      default:
         return state;
   }

}