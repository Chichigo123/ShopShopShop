import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './Layout.css'


const gridTable = () => {
    return (
      
        <MDBContainer fluid='True' id="fullpage">
            <MDBRow>
                <MDBCol sm="6" id="first" >1</MDBCol>
                <MDBCol sm="4" >2</MDBCol>
                <MDBCol sm="2" >3</MDBCol>
            </MDBRow>
        </MDBContainer>
    
    );

}

const navigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="navBarTop">
            <a class="navbar-brand" href="#" id="headerFont">Learning by Doing</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
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
            {gridTable()}
        </MDBContainer>
    
          
   );
}



export default Layout;