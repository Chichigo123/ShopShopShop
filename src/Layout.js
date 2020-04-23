import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText, MDBCardHeader} from 'mdbreact';

import 'mdbreact/dist/css/mdb.css';
import './Layout.css'

const createMDBCard = () => {
    return(
        <MDBCard className="card-body">
            <MDBCardHeader color="deep-orange lighten-1">About Me</MDBCardHeader>
            <MDBCardTitle ><br/>Hi I'm Shane!</MDBCardTitle>
            <MDBCardText>
                <p></p>
            </MDBCardText>
            {/* <div className="flex-row">
                <a href="#!">MDBCard link</a>
                <a href="#!" style={{ marginLeft: "1.25rem" }}>Another link</a>
            </div> */}
        </MDBCard>
    );

}

const copyRight = () => {
    return (
        <MDBContainer id="copyright" fluid="True">
            <MDBRow>
                <MDBCol className="copyrightFooter">© 2020 Copyright: Rose Shane Palomo | <a href="https://github.com/Chichigo123" className="fa fa-github "></a> | <a href='www.roseshanepalomo.com'>www.roseshanepalomo.com</a></MDBCol>    
            </MDBRow>
        </MDBContainer>
        
    );
}


const footer = () => {
    return (
        <MDBContainer id="footerCont" fluid="True">
            <MDBRow>
                {/* <MDBCol className="footer" size="4">
                    <p>About the Site</p>
                    <p className="footerParagraph">
                       This site is written in ReactJS,<br/>
                       Styled with Bootstrap4<br/>
            

                    </p>
                </MDBCol>    
                <MDBCol  className="footer" size="4">
                    <p>Address</p>
                    <p className="footerParagraph">
                        Purok 5 Brgy. Calumpang,<br/>
                        Liliw, Laguna,<br/>
                        Philippines
                    </p>
                </MDBCol>
                <MDBCol className="footer" size="4">
                    <p>Contact Me</p>
                    <p className="footerParagraph">
                        (+63) 926-058-4596<br/>
                        shane.palomo.24@gmail.com<br/>
                        github.com/Chichigo123/
                    </p>
                </MDBCol> */}
                    {/* <MDBCol className="footer" size="4">
                    </MDBCol>     */}
 
            </MDBRow>
        </MDBContainer>
        
    );
}

const socialIcons = () => {
    return (
        <MDBRow>
             <MDBCol className="socialIcons"md="2">
            </MDBCol>

            <MDBCol className="socialIcons" md="8" id="icons">
                <a href="https://web.facebook.com/roseshane.palomo.92" class="fa fa-facebook"></a>
                <a href="https://www.linkedin.com/in/rose-shane-palomo-30a403135" class="fa fa-linkedin"></a>
                <a href="#" class="fa fa-skype"></a>
                <a href="https://github.com/Chichigo123" class="fa fa-github"></a>
                
            </MDBCol>

            <MDBCol className="socialIcons"md="2">
            </MDBCol>
        </MDBRow>
    );

}

const gridTable = () => {
    return (
        // className="w-50"
        <MDBContainer >
              {/* <MDBRow className="homeTop" >
            
            </MDBRow> */}
            <MDBRow >
            {/* <MDBCol  md="4" >   
            </MDBCol> */}
          
              
              <MDBCol className="home" md="8" >
                 
                        {/* <img src="beach-orig.jpg" alt="avatar" className="avatar" /> */}
                 
                    
                    {/* <p> Hi I'm Shane!</p> */}
                    {/* <img src="beach-orig.jpg" className = "pic" /> */}
                    {/* {createMDBCard()} */}
              </MDBCol>
              <MDBCol className="home" md="4" >
                  
                    <div className="aboutPage">
                        <p> About Site</p>
                    </div>
                    <br/>
                    <ul>
                        <li>ReactJS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                    </ul>
                    <br/>
                    {/* <img src="beach-orig.j pg" alt="avatar" className="avatar" /> */}
                    {/* <p> Hi I'm Shane!</p> */}
                    {/* <img src="beach-orig.jpg" className = "pic" /> */}
                    {/* {createMDBCard()} */}
                    <div className="aboutPage">
                        <p>Address</p>
                    </div>
                    <br/>
                    <ul>
                        <li>Purok 5, Brgy. Calumpang,</li>
                        <li>Liliw, Laguna</li>
                        <br/>
                        <li>7072 Lanzones, Langka Cor.,</li>
                        <li>Ceomebo, Makati</li>
                    </ul>
                    <br/>
                    <div className="aboutPage">
                        <p>Contact</p>
                    </div>
                    <br/>
                    <div className="fa fa-phone">
                        <p></p>
                        <li className="fa fa-envelope"></li> </div>
                    <ul>
                     
                        <li >shanepalomo@gmail.com</li>
                      
                    </ul>
                    <br/>
              </MDBCol>
            </MDBRow>
         
            
        </MDBContainer>
    );

}

const navigationBar = () => {
    return (
        <nav className="navbar navbar-expand-md  fixed-top navbar-dark bg-dark" id="navBarTop">
            <a class="navbar-brand" href="#" id="headerFont">Learn by Doing</a>
          
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse fontsize-twenty" id="collapsibleNavbar">
                <ul className="navbar-nav    ">
                    <li className="nav-item active"><a className="nav-link " href="#">Home</a></li>
                    <li className="nav-item "><a className="nav-link " href="#">About</a></li>
                    <li className="nav-item "><a className="nav-link "  href="#">Games</a></li>
                    <li className="nav-item "><a className="nav-link "  href="#">Contact</a></li>
                </ul>

                <div id="icons">
                    <a href="https://web.facebook.com/roseshane.palomo.92" className="fa fa-facebook"></a>
                    <a href="https://www.linkedin.com/in/rose-shane-palomo-30a403135" className="fa fa-linkedin"></a>
                    <a href="#" className="fa fa-skype"></a>
                </div>             
            </div>
        </nav>
    );
}


const Layout = () => {
   return (       
        <MDBContainer fluid='True'>
             <MDBRow>
                    {navigationBar()}
            </MDBRow> 

            <MDBRow>
                {gridTable()}
            </MDBRow> 

            
            {/* {socialIcons()} */}
            
            
            {/* {footer()} */}
            {copyRight()}
        
        </MDBContainer>
    
          
   );
}



export default Layout;