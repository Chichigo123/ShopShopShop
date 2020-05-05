import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText, MDBCardHeader} from 'mdbreact';

const Copyright = () => {
    return (
        <MDBContainer id="copyright" fluid={true}>
            <MDBRow>
                <MDBCol className="copyrightFooter">© 2020 Copyright: Rose Shane Palomo | <a href="https://github.com/Chichigo123" className="fa fa-github "></a> | <a href='www.roseshanepalomo.com'>www.roseshanepalomo.com</a></MDBCol>    
            </MDBRow>
        </MDBContainer>
    );
}

export default Copyright