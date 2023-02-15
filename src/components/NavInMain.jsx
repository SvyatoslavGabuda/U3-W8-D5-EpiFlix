import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const NavInMain = () => {
  const loc = useLocation();

  return (
    <Container fluid className="px-4">
      <Navbar expand="sm" variant="dark">
        <Container fluid className="p-0">
          <Navbar.Brand href="#home">
            {loc.pathname === "/TVShows" ? <h2>Cerca Serie TV...</h2> : <h2>TV Shows</h2>}
          </Navbar.Brand>

          <Nav className="me-auto">
            <NavDropdown
              title="Genres  "
              id="basic-nav-dropdown"
              className="btn btn-secondary btn-sm  rounded-0  mb-4 ms-4"
              style={{ backgroundColor: "#221f1f", color: "white" }}
            >
              <NavDropdown.Item href="#action/3.1" className="text-white bg-dark">
                Comedy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="text-white bg-dark">
                Drama
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="text-white bg-dark">
                Thriller
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <i className="fa fa-th-large icons"></i>
            <i className="fa fa-th icons"></i>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};
export default NavInMain;
