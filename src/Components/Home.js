import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact';


const Home = () => {
  return (
    <div>
      <MDBContainer>
     <MDBCol md="4">
      <MDBCard>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
          waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
          <MDBBtn href="#">Click</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBContainer>
    </div> 
  )
}

export default Home;
