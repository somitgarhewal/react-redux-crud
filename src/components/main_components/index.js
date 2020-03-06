import React, { Component } from 'react'
import Form from './Form'
import Table from './Table'
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    return (
      <>
        <h1 className='text-center'>Home page</h1>
        <Form/>
        <Table users={this.props.users}/>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    users : state.users
  };
}

export default connect(mapStateToProps)(Home);