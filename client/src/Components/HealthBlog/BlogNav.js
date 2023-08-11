
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Form, FormControl } from 'react-bootstrap';
// import { FontStyle } from "@cloudinary/url-gen/qualifiers";

const BlogNav = () => {
    return (
        <div>
            <Navbar style={{
            backgroundColor: "#F28C28",
            height: "80px", // Increase the height as desired
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}>
                <img
              src='https://cdn.vectorstock.com/i/1000x1000/38/47/pregnant-woman-stylized-symbol-vector-1753847.webp'
              height='30'
              alt='LINDA-MAMA'
              loading='lazy'
            />
                <Navbar.Brand href="#home" style={{color:"black", marginLeft:"10px", fontStyle:"initial" }}>LINDA MAMA</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    {/* <Nav>
                        <Nav.Link href="#home" style={{color:"black"}}>
                            BREAST FEEDING
                        </Nav.Link>
                        <Nav.Link href="#about" style={{color:"black"}}>
                            PELVIC FLOOR HEALTH
                        </Nav.Link>
                        <Nav.Link href="#services" style={{color:"black"}}>
                            SCREENING FOR DOWN SYNDROME
                        </Nav.Link>
                        <Nav.Link href="#contact" style={{color:"black"}}>
                            COVID AND PREGNANCY
                        </Nav.Link>
                    </Nav> */}
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="ml-auto" style={{borderRadius: "5px", marginRight: "30px"}}/>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default BlogNav;