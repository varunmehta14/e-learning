import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
class Login extends Component {
    state={
      modal5: false 
    }
    
    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }
      render() {
        return (
            <MDBContainer>
            <MDBBtn color="primary" onClick={this.toggle(5)}>Login</MDBBtn>
      <MDBModal isOpen={this.state.modal5} toggle={this.toggle(5)} size="lg">
        <MDBModalHeader toggle={this.toggle(5)}>SignUp</MDBModalHeader>
        <MDBModalBody>
        <form>
        <p className="h4 text-center mb-4">Sign in</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Your password
        </label>
        <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
        <div className="text-center mt-4">
          <MDBBtn color="indigo" type="submit">Login</MDBBtn>
        </div>
      </form>
        </MDBModalBody>
      </MDBModal>
      </MDBContainer>
        );
        }
    }
    export default Login; 
