import { Component } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import logo from "../logo.png";
class MyNav extends Component {
  render() {
    return (
      <>
        <header>
          <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#221f1f" }}>
            <Container fluid>
              <Navbar.Brand href="#home">
                <img style={{ width: "100px", height: "55px" }} src={logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto navbar-nav">
                  <Nav.Link href="#home" className="font-weight-bold">
                    <span className="linkNav">Home</span>
                  </Nav.Link>
                  <Nav.Link href="#link" className="font-weight-bold active">
                    <span className="linkNav"> TV Shows</span>
                  </Nav.Link>
                  <Nav.Link href="#lin">
                    <span className="linkNav">Movies</span>
                  </Nav.Link>
                  <Nav.Link href="#li">
                    <span className="linkNav">Recently Added</span>
                  </Nav.Link>
                  <Nav.Link href="#li">
                    <span className="linkNav">My List</span>
                  </Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                  <i className="fa fa-search icons"></i>
                  <div id="kids">KIDS</div>
                  <i className="fa fa-bell icons"></i>
                  <i className="fa fa-user icons"></i>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default MyNav;
