import React from 'react';
import ReactDOM from 'react-dom';
import './css/About.css';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText, MDBCardHeader} from 'mdbreact';

import './css/Home.css'
import './css/Icons.css'

import Copyright from './Common'

const image = () => 
  ( 
    <div id = "image-about">
      <img src="beach-orig.jpg" alt="beach" ></img>
      <p className="bold-underline">Shane </p>
      is a
      <p className="bold-underline"> software engineer </p><br/>
      looking for work-from-home opportunities as <br/>
      <p className="bold-underline"> backend developer </p>
      sometimes but rarely<br/>
      <p className="bold-underline"> front-end developer </p><br/>
      <br/>
      She programs in 
      <p className="bold-underline"> PYTHON, REACTJS, C++ </p><br/>
      can navigate in 
      <p className="bold-underline"> LINUX/UNIX Systems </p><br/>
      execute and manage databases such as<br/>
      <p className="bold-underline"> my SQL/oracle SQL </p><br/>
      and owns a 
      <p className="bold-underline"> development server </p>
      with <p className="bold-underline">GIT </p><br/>
      as source-control repository<br/>
      <br/>
      She is taking care of <p className="bold-underline">5 dogs, </p>
      is a <p className="bold-underline">loving big sister, </p>
      and is a <p className="bold-underline"> cook enthusiast </p>

    </div>
  )

  
const aboutme = () => 
( 
  <div id = "aboutme">
      <h1> Rose Shane</h1>

  </div>
)


  const gridTable = () => {
    return (
        // className="w-50"
        <MDBContainer className="w-50 home">
            <MDBRow className="home">
              {aboutme()}
              {image()}
            </MDBRow>      
        </MDBContainer>
    );
}

const About = () => {
  return (       
      <MDBContainer fluid='True'>
        <MDBRow>
        {gridTable()}
        </MDBRow>          
        <Copyright />
      </MDBContainer>          
  );
}



export default About