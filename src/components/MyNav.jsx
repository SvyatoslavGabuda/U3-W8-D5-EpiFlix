import { Nav, Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../logo.png";
const MyNav = () => {
  const loc = useLocation();
  console.log(loc);
  return (
    <>
      <header>
        <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#221f1f" }}>
          <Container fluid>
            <Link to="/">
              <img style={{ width: "100px", height: "55px" }} src={logo} alt="logo" />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto navbar-nav">
                <Link
                  to="/"
                  className={`text-decoration-none font-weight-bold nav-link ${
                    loc.pathname === "/" ? "active" : ""
                  }`}
                >
                  <span className="linkNav">Home</span>
                </Link>
                <Link
                  to="/TVShows"
                  className={`text-decoration-none font-weight-bold nav-link ${
                    loc.pathname === "/TVShows" ? "active" : ""
                  }`}
                >
                  <span className="linkNav"> TV Shows</span>
                </Link>
                <Link
                  to="/Movies"
                  className={`text-decoration-none font-weight-bold nav-link ${
                    loc.pathname === "/Movies" ? "active" : ""
                  }`}
                >
                  <span className="linkNav">Movies</span>
                </Link>
                <Link
                  to="/RecentlyAdded"
                  className={`text-decoration-none font-weight-bold nav-link ${
                    loc.pathname === "/RecentlyAdded" ? "active" : ""
                  }`}
                >
                  <span className="linkNav">Recently Added</span>
                </Link>
                <Link
                  to="/MYList"
                  className={`text-decoration-none font-weight-bold nav-link ${
                    loc.pathname === "/MYList" ? "active" : ""
                  }`}
                >
                  <span className="linkNav">My List</span>
                </Link>
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
};

export default MyNav;
