import { ADD_NEW_USER } from '../types'
const initialState = {
  users: [
    { uid: 101, name:"Fin" , email: "test@mailinator.com", contactNo: 986343544 },
    { uid: 102, name: "John" , email: "john@mailinator.com", contactNo: 9407054578 }
  ]
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_USER :
      const usersRef = [...state.users]
      usersRef.push(action.payload)      
      return {
        users : usersRef
      }   
      // case DELETE_USER :
      //   const usersRef = [...state.users]
              
      //   return {
      //     users : usersRef
      //   }     
     
    default:
      return state;
  }
}
export default userReducer