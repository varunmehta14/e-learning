import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn,MDBContainer,MDBAlert } from "mdbreact";
import isEmpty from 'lodash/isEmpty';
import isNull from 'lodash/isNull';

class Contact extends React.Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    city: "",
    state: "",
    phone: "",
    success:false,
    submitted:false
  };

  submitHandler = event => {
      console.log(this.state)
    if((isEmpty(this.state.fname))||(isEmpty(this.state.lname))||(isEmpty(this.state.email))||(isEmpty(this.state.city))||(isEmpty(this.state.phone))||(isEmpty(this.state.message))){
        this.setState({success:false,submitted:true});
    } 
    else{
       this.setState({success:true,submitted:true});
    } 
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
   
    return (
      
      <div>{(this.state.submitted)?(
        this.state.success ?(
            <MDBAlert color="success" >
            Your Details Have been Sent!
          </MDBAlert>
     ):( <MDBAlert color="danger"  >
     Please Fill all The Details!
   </MDBAlert>)) :null 
  } 
       
          
          
          <MDBContainer>
          <form
          className='needs-validation'
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='user'
                value={this.state.fname}
                name='fname'
                onChange={this.changeHandler}
                type='text'
                id='fname'
                label='First name'
                required
              > <div className='invalid-feedback ml-4 pl-3'>
              Please Enter your Name.
            </div>
          
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='address-card'
                value={this.state.lname}
                name='lname'
                onChange={this.changeHandler}
                type='text'
                id='lname'
                label='Last name'
                required
              > <div className='invalid-feedback ml-4 pl-3'>
              Please enter your Last Name.
            </div>
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
             
              <MDBInput  value={this.state.email}
                onChange={this.changeHandler}
                label="Type your email" icon="envelope" group type="email" validate error="wrong"
            success="right" id='email'pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
            name='email' required > <div className='invalid-feedback ml-4 pl-3'>
            Please provide a valid email address.
          </div>
          <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
          </MDBInput>
                
              
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='city'
                value={this.state.city}
                onChange={this.changeHandler}
                type='text'
                id='city'
                name='city'
                label='City'
                required
              >
                <div className='invalid-feedback ml-4 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='map-marked-alt'
                value={this.state.state}
                onChange={this.changeHandler}
                type='text'
                id='state'
                name='state'
                label='State'
                required
              >
                <div className='invalid-feedback ml-4 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='mobile'
                value={this.state.phone}
                onChange={this.changeHandler}
                type="tel"
                id='phone'
                name='phone'
                label='Phone'
                pattern="[1-9][0-9]{9}"
                validate
                required
              >
                <div className='invalid-feedback ml-4 pl-3'>
                  Please provide a valid 10 digit phone number.
                </div>
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          
          <MDBContainer>
          <MDBBtn color='primary' type='submit'>
            Submit Form
          </MDBBtn>
          </MDBContainer>
        </form>
        </MDBContainer>
      
      </div>
      
    );
  }
}

export default Contact;