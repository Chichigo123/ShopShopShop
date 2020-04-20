import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import 'mdbreact/dist/css/mdb.css';
import './Layout.css'

const footer = () => {
    return (
        <MDBContainer id="footerCont" fluid="True">
            <MDBRow>
                <MDBCol className="footer" size="3">
                    <p>About the Site</p>
                    <p className="footerParagraph">
                       This site is written in ReactJS,<br/>
                       Styled with Bootstrap, and<br/>
                       Coded by yours truly. <br/>
                    </p>
                </MDBCol>    
                <MDBCol  className="footer" size="3">
                    <p>Address</p>
                    <p className="footerParagraph">
                        Purok 5 Brgy. Calumpang,<br/>
                        Liliw, Laguna,<br/>
                        Philippines
                    </p>
                </MDBCol>
                <MDBCol className="footer" size="3">
                    <p>Contact Me</p>
                    <p className="footerParagraph">
                        (+63) 926-058-4596<br/>
                        shane.palomo.24@gmail.com<br/>
                        github.com/Chichigo123/
                    </p>
                </MDBCol>
                <MDBCol className="footer">
                </MDBCol>    
 
            </MDBRow>
            <MDBRow>/
                <MDBCol className="footerBelow fontsize-ten">© 2020 Copyright: Rose Shane Palomo | <a href='www.roseshanepalomo.com'>www.roseshanepalomo.com</a></MDBCol>    
            </MDBRow>
        </MDBContainer>
        
    );
}

const gridTable = () => {
    return (
        <MDBContainer id="fullpage">
            <MDBRow>
                <MDBCol id="first" size="8" >1</MDBCol>
                <MDBCol >2</MDBCol>
            </MDBRow>
        </MDBContainer>
    );

}

const navigationBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" id="navBarTop">
            <a class="navbar-brand" href="#" id="headerFont">Learning by Doing</a>
          
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse fontsize-ten" id="collapsibleNavbar">
                <ul className="navbar-nav navbar-dark bg-dark ">
                    <li className="nav-item active"><a className="nav-link" href="#">About</a></li>
                    <li className="nav-item "><a className="nav-link" href="#">Portfolio</a></li>
                    <li className="nav-item "><a className="nav-link"  href="#">Games</a></li>
                    <li className="nav-item "><a className="nav-link"  href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}


const Layout = () => {
   return (       
        <MDBContainer fluid='True' id="fullpage">
             <MDBRow>
                    {navigationBar()}
            </MDBRow> 

            <MDBRow>
                {gridTable()}
            </MDBRow> 

            {footer()}
        
        </MDBContainer>
    
          
   );
}



export default Layout;