import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText, MDBCardHeader} from 'mdbreact';

const gridTable = () => {
    return (
        // className="w-50"
            <div className="home">
                <div id="home-left">
                    <img src="sunset.jpg" alt="beach" ></img>
                    <div>
                        <h1 className="welcomeHeader">Welcome</h1>  
                        <h5 className="welcomeHeader" style={{"color":"#6C4F3D", "opacity":".5"}}>
                            This is an experimental site for front-end and back-end web development.<br/>
                        </h5>
                    </div>
                </div>

                <div id="home-right">
                    <div className="about-box">
                        <p> About Site</p>
                    </div>
                    <div className="about-box-list">
                        <ul>
                            <li>ReactJS as Front-End</li>
                            <li>NodeJS server running via PM2</li>
                            <li>NPM as pkg manager</li>
                            <li>MySQL for Database</li>
                            <li>Bootstrap for styling</li>
                        </ul>
                    </div>
                    <div className="about-box">
                        <p>Address</p>
                    </div>
                    <div className="about-box-list">
                        <ul>
                            <li>Purok 5, Brgy. Calumpang,</li>
                            <li>Liliw, Laguna</li>
                            <br/>
                            <li>7072 Lanzones, Langka Cor.,</li>
                            <li>Comembo, Makati</li>
                        </ul>
                    </div>
                    <div className="about-box">
                        <p>Contact</p>
                    </div>
    
                    <div className="about-box-list">
                        <ul className = "center">
                            <li className="fa fa-phone"></li> 
                            <p>+63 926-058-4596</p> 
                            <li className="fa fa-envelope"></li>
                            <p>shanepalomo<br/>@gmail.com</p>                           
                        </ul>
                    </div>
                </div>
            </div>
          
    );
}

const Home = () => {
     return (       
        <MDBContainer>
            <MDBRow>
                {gridTable()}
            </MDBRow>          
           
        </MDBContainer>          
    );
}

export default Home;