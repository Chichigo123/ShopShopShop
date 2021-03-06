import React from 'react';
import ReactDOM from 'react-dom';

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText, MDBCardHeader} from 'mdbreact';

const image = () => 
  ( 
    <div id = "image-about">
      <img src="beach-orig.jpg" alt="beach" ></img>
      <br/>
      <p className="bold-underline">Shane </p>
      is a
      <p className="bold-underline"> software engineer </p><br/>
      looking for work opportunities as 
      <p className="bold-underline"> backend developer </p>
      sometimes but rarely<br/>
      <p className="bold-underline"> front-end developer </p><br/>
      <br/>
      Her main programming languages are 
      <p className="bold-underline"> PYTHON, REACTJS, NODEJS, C++ </p><br/>
      She can navigate through <br/> 
      <p className="bold-underline"> LINUX/UNIX Systems </p><br/><br/>
      Manage databases such as<br/>
      <p className="bold-underline"> my SQL/oracle SQL </p><br/><br/>
      She even has her own
      <p className="bold-underline"> development server </p>
      with <p className="bold-underline">GIT </p> as source-control repository<br/>
      <br/>
      She is taking care of <p className="bold-underline">5 dogs, </p>
      is a <p className="bold-underline">loving big sister, </p>
      and is a <p className="bold-underline"> cook enthusiast </p>

    </div>
  )

  



const About = () => {
  return (       
      <MDBContainer>
        <MDBRow>
            {image()}
        </MDBRow>       
      </MDBContainer>          
  );
}



export default About