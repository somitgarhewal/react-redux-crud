import React, { Component } from 'react'

class Table extends Component {

  onClickView = () => {

  }
  onClickEdit = () => {

  }
  onClickDelete = () => {

  }
  render () {
    return (
      <table className="table container table-bordered table-striped table-hover">
        <thead className="bg-dark textHeading">
          <tr>
            <th>uid</th>
            <th>name</th>
            <th>email</th>
            <th>contactNo</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
         {this.props.users.map(element =>
            <tr>
              <td>{element.uid}</td>  
              <td onClick={() => this.props.currentUser(element.uid)}>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.contactNo}</td>
              <td>
                  <button 
                    className='viewButton'
                    type='button'
                    onClick={() =>this.onClickView()}>
                    <i className='fa fa-eye'></i>
                    view
                  </button> 
              </td>
              <td>
                <button
                  className='editButton' 
                  type='button' 
                  onClick={() => this.onClickEdit()}>
                  <i className='fa fa-edit'></i>
                  edit
                </button>             
              </td>
              <td>
                <button 
                  className='delButton' 
                  type='button' 
                  onClick={() => this.onClickDelete()}>
                  <i className='fa fa-trash'></i>
                  delete
                </button>
              </td>
            </tr>)} 
        </tbody>       
      </table>
    )
  }
}

export default Table