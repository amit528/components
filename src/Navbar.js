import React from "react";
// import reactDom from "react-dom";
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap";
import Logo from "./Images/logo.svg";



class NavBar extends React.Component{
    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;


// class NavBar extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>this is my first react project</h1>
//             </div>
//         );
//     }
// }

// export default NavBar