import React from 'react'
import { Button, Form, FormControl, Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';

const Header = () => {

    return (
        <header>
            <Navbar expand="lg" className="navbar" sticky="top">
                <div className="container">
                <Navbar.Brand href="#home"><img src={logo} alt="logo.png" /><br></br><h1>Tech <span>Factory</span></h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className="col-md-10">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                    <Form inline>
                        <FormControl type="text" placeholder=" Search for anything" className="form-control" />
                    </Form>
                        <Nav.Link href="#categories" className="nav-link" style={{marginTop: 4}}>Categories</Nav.Link>
                        <Nav.Link href="#cart" className="nav-link"><i class="fas fa-shopping-cart"></i></Nav.Link>
                        <Nav.Link href="#login" className="nav-link"><Button className="btn login-btn">Login</Button></Nav.Link>
                        <Nav.Link href="#signup" className="nav-link"><Button className="btn signup-btn">Sign Up</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </div>
                </div>
            </Navbar>
        </header>
    )
}

export default Header;
