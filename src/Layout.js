import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import 'mdbreact/dist/css/mdb.css';
import './Layout.css'


const gridTable = () => {
    return (
        <MDBContainer fluid='True' id="fullpage">
            <MDBRow>
                <MDBCol id="first" md="6" >1</MDBCol>
                <MDBCol  md="4">2</MDBCol>
                <MDBCol id="third"  md="2">3</MDBCol>
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
                <MDBCol sm="12">
                    {navigationBar()}
                </MDBCol>
            </MDBRow>
            <MDBRow>
                {gridTable()}
            </MDBRow>
        </MDBContainer>
    
          
   );
}



export default Layout;