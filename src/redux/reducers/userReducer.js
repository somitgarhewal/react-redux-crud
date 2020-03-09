import { ADD_NEW_USER } from '../types'
import { DELETE_USER } from '../types'
import { UPDATE_USER } from '../types'

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
        ...state,
        users : usersRef
      }   
    case DELETE_USER :
      const deleteUsersRef = [...state.users]             
      return {
        ...state,
        users : deleteUsersRef.filter(item => item.uid !== action.payload)
      }
    case UPDATE_USER :
      const updateUsersRef = [...state.users]
      const updatedUsers = updateUsersRef.map(element => {
         if(element.uid == action.payload.uid) {
           return action.payload 
          }
          else return element
        }
      )
      return {
        ...state,
        users : updatedUsers
      }
     
    default:
      return state;
  }
}
export default userReducer