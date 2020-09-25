import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Contact from './Contact';
class Signup extends Component {
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
            <MDBBtn color="primary" onClick={this.toggle(5)}>Signup</MDBBtn>
      <MDBModal isOpen={this.state.modal5} toggle={this.toggle(5)} size="fluid">
        <MDBModalHeader toggle={this.toggle(5)}>SignUp</MDBModalHeader>
        <MDBModalBody>
          <Contact/>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle(5)}>Cancel</MDBBtn>
          <MDBBtn color="primary">Register</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      </MDBContainer>
        );
        }
    }
    export default Signup; 
