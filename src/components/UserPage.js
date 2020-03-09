import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux';

class UserPage extends Component {

  state = {
    currentUser: {}
  }
  
  componentDidMount = () => {
    const uid = this.props.match.params.uid;
    const currentUser = this.props.users.find(user => {if(user.uid == uid)return user})
    this.setState({ currentUser: currentUser})
  }
   
  render() {
    return(
      <div class="container m-5">
        <div class="row my-2 ">
          <div class="col-lg-8 order-lg-2">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a href=""
                data-target="#profile"
                data-toggle="tab"
                class="nav-link active"
                >
                Profile
                </a>
              </li>
            </ul>
            {!(this.state.currentUser) ? 'Loading...' : (
              <div className="tab-content py-4">
                <div className="tab-pane active" id="profile">
                  <h5 className="mb-3">{this.state.currentUser.name}</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <h6>
                      The Employee is the start placeholder and We are very Glad
                      to have sch a great Developer in our Company.
                      </h6>
                      <p className="text-success">
                        {" "}
                        <b>Web Designer, UI/UX Engineer</b>
                      </p>
                      <h6>
                        <b>Hobbies</b>
                      </h6>
                      <p>
                        Indie music, skiing and hiking. I love the great outdoors.
                      </p>
                    </div>
                  <div className="col-md-12">
                    <h5 className="mt-2">
                      <span className="fa fa-clock-o ion-clock float-right"></span>
                      Details
                    </h5>
                    <table className="table table-sm table-hover table-striped">
                      <tbody>
                        <tr>
                          <td>
                            <strong>UserID :</strong>
                            <strong>{this.state.currentUser.uid}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Name :</strong><strong>{this.state.currentUser.name}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Email :</strong>{" "}
                            <strong>{this.state.currentUser.email}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Contact :</strong>
                            <strong>{this.state.currentUser.contactNo}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
          <div className="col-lg-4 order-lg-1 text-center">
            <img
              src={require('../assets/images/download.png')}
              className="mx-auto img-fluid img-circle d-block"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UserPage);