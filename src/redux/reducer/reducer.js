const initialState = {
  users: [
    { uid: 101, name:"Fin" , email: "test@mailinator.com", contactNo: 986343544 },
    { uid: 102, name: "John" , email: "john@mailinator.com", contactNo: 9407054578 }
  ]
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case "":
      return {
        
      };
     
    default:
      return state;
  }
}
export default reducer