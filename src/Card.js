import React from "react";
import {MDBCard, MDBCardTitle, MDBCardText, MDBCardHeader} from 'mdbreact';

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
