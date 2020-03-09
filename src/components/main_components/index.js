import React, { Component } from 'react'
import Form from './Form'
import Table from './Table'
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    currentUser : {},
    isEdit : false
  }

  updated = () => {
    this.setState({ isEdit:false })
  }

  editUser = (uid) => {
    this.setState((state) => {
      if (state.isEdit) return ({ isEdit: false })
    })
    const usersRef = [...this.props.users]
    const currentUser = usersRef.find(element => element.uid == uid)
    this.setState({currentUser : currentUser, isEdit:true})
  }

  onClickView = (uid) => {
    const usersRef=[...this.props.users]
    const currentUser = usersRef.find(element => element.uid == uid)
    this.setState({currentUser : currentUser})
    console.log(currentUser)
  }

  render() {
    return (
      <>
        <h1 className='text-center'>Home page</h1>
        <Form
          currentUser={this.state.currentUser}
          isEdit={this.state.isEdit} 
          updated={this.updated}
        />
        <Table
          users={this.props.users}
          editUser={this.editUser}
          onClickView={this.onClickView}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Home);