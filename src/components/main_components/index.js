import React, { Component } from 'react'
import Form from './Form'
import Table from './Table'
class Home extends Component {
  state = {
    users: [
      { uid: 121, name:"Fin" , email: "test@mailinator.com", contactNo: 986343544 },
      { uid: 122, name: "John" , email: "john@mailinator.com", contactNo: 9407054578 }
    ]
  }
  render() {
    return (
      <>
        <h1 className='text-center'>Home page</h1>
        <Form/>
        <Table users={this.state.users}/>
      </>
    )
  }
}
export default Home