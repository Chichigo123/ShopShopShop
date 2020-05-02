import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText, MDBCardHeader} from 'mdbreact';

import Copyright from './Common'

const gridTable = () => {
    return (
        // className="w-50"
            <div className="home">
                {/* <div id="home-left">
                    <img src="sunset.jpg" alt="beach" ></img>
                    <div>
                        <h1 className="welcomeHeader">Welcome</h1>  
                        <h5 className="welcomeHeader" style={{"color":"#6C4F3D", "opacity":".5"}}>
                            This is an experimental site for front-end and back-end web development.<br/>
                        </h5>
                    </div>
                </div>

                <div id="home-right">  
                    <div className="aboutPage">
                        <p> About Site</p>
                    </div>
                    <div className="aboutPageList">
                        <ul>
                            <li>ReactJS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <div className="aboutPage">
                        <p>Address</p>
                    </div>
                    <div className="aboutPageList">
                        <ul>
                            <li>Purok 5, Brgy. Calumpang,</li>
                            <li>Liliw, Laguna</li>
                            <br/>
                            <li>7072 Lanzones, Langka Cor.,</li>
                            <li>Comembo, Makati</li>
                        </ul>
                    </div>
                    <div className="aboutPage">
                        <p>Contact</p>
                    </div>
    
                    <div className="aboutPageList">
                        <ul className="center">
                            <li className="fa fa-phone"></li> 
                            <p>+63 926-058-4596</p> 
                            <li className="fa fa-envelope"></li>
                            <p>shanepalomo@gmail.com</p>                           
                        </ul>
                    </div>
                </div> */}
            </div>
          
    );
}

const Home = () => {
     return (       
        <MDBContainer>
            <MDBRow>
                {gridTable()}
            </MDBRow>
            
                <Copyright />
            
           
        </MDBContainer>          
    );
}

export default Home;