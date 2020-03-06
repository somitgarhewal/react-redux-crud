import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNewUser } from '../../redux/actions/userActions'

class Form extends Component {
  state = {
    name:'',
    email:'',
    uid:'',
    contactNo:'',
    isEmailValid:true,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isEdit !== this.props.isEdit && this.props.isEdit) {
      this.setState({
        name: this.props.currentUser.name,
        email: this.props.currentUser.email,
        uid: this.props.currentUser.uid,
        contactNo: this.props.currentUser.contactNo,
      })
    }
  }

  changeNameHandler = (event) => {
    this.setState({name:event.target.value})
  }
  changeEmailHandler = (event) => {
    this.setState({email:event.target.value}) 
  }
  changeContactHandler = (event) => {
    this.setState({ contactNo:event.target.value })
  }
  submit = () => {    
    if (this.state.uid=='') this.setState({uid:' '})
    const user = {
      uid:"",
      name:"",
      email:"",
      contactNo:"" 
    }
    // const emailAlreadyExist = this.checkExistingUser()
    // console.log('emailAlreadyExist', emailAlreadyExist)
    if(!this.state.contactNo.match(/^\d{10}$/)) alert("please enter correct contact no")
    if(!/^[A-Za-z]+$/.test(this.state.name)) alert("please enter alphabets only in name")
    if(this.state.email.includes('@') && this.state.email.includes('.')) {
      this.setState({isEmailValid:true})
      user.uid= this.state.uid
      user.name= this.state.name
      user.email= this.state.email
      user.contactNo= this.state.contactNo
      if(!this.props.isEdit){
        if (
          this.state.contactNo.match(/^\d{10}$/) && 
          /^[A-Za-z ]+$/.test(this.state.name) && 
          !(this.state.uid == '' || this.state.uid == ' ') && !this.props.isEdit)
            {
            // this.props.newUser(user); 
            console.log(user)
            this.props.addNewUser( user );
            this.reset();
            }
      }else if(this.props.isEdit){this.props.updateUser(user);this.reset();}
    }
    else this.setState({isEmailValid:false}) 
    // if(!this.props.isEdit){
    //   if(emailAlreadyExist) alert("Email ID Already Exist try with another")
    // }

  }

  reset = () => {
    this.setState({ name:'', email:'', uid:'', contactNo:'',isEmailValid:true })
    // {this.props.setIsEdit}   
  }
  generateUId = () =>{
    this.setState({ uid: "1"})
  }
  // checkExistingUser = () => {
  //   const checkUser = this.props.users.some(item => item.email == this.state.email)
  //   return checkUser
  // }
  
  render () {
    return (
      <div className='container'>
        <div className= 'row'>
          <div className='col-3'></div>
          <div className='col-6 border rounded m-5 p-5'>
            Name:
            <input
              className='form-control' 
              type='text' 
              value={this.state.name}
              onChange={this.changeNameHandler} 
            />
            <br />
            email : 
            <input
              className='form-control'
              type='email'
              aria-describedby="emailHelp" 
               value={this.state.email}
              onChange={this.changeEmailHandler}
            />        
            {
              this.state.isEmailValid==false && 
              <h6 className="text-danger">Please enter email in appropriate form</h6>
            }
            <br />
            U Id : 
            <input
              className='form-control'
              type='text'
              value={this.state.uid}
              disabled
            />
            <div className='text-danger' id="blankUId"></div>
            { (this.state.uid=='' || this.state.uid==" ") &&
            <button 
            id='btnGenerateId' 
            type="button" 
            onClick={this.generateUId} 
            className='mb-3'>
              Generate UId
            </button> 
            }
            { this.state.uid==' ' && <h6 className="text-danger">Please enter UId</h6>}
            <br />
            Contact No : 
            <input
              className='form-control'
              type='numbers'
              formControlName="number" id="number"
              value={this.state.contactNo}
              onChange={this.changeContactHandler} 
            />
            <button type="button" onClick={this.submit} className='mt-3'>Submit</button>
            <button type="button" onClick={this.reset} className='float-right mt-3'>Reset</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {addNewUser}

export default connect(null,mapDispatchToProps)(Form);