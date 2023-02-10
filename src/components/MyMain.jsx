import { Component } from "react";
import MyTitle from "./MyTitle";
import { Container, Form, FloatingLabel, Button, Row, Col } from "react-bootstrap";
import FilmRow from "./FilmRow,";
import NavInMain from "./NavInMain";

class MyMain extends Component {
  state = {
    newSearch: "",
    searching: false,
  };
  startSearch = () => {
    if (this.state.newSearch !== "") {
      this.setState({ searching: true });
    } else {
      console.log("nope");
      alert("inserisci qualcosa nel campo di ricerca");
    }
  };
  render() {
    return (
      <>
        <Container fluid className="px-4">
          <NavInMain />
          <MyTitle title="Trending Now" />
          <FilmRow search="harry" />
          <MyTitle title="Search:" />
          <Row className="align-items-start">
            <Col xs="8">
              <FloatingLabel
                controlId="floatingInput"
                label="Tipe the Name of the film you want to see!"
                className="mb-3"
              >
                <Form.Control
                  type="search"
                  placeholder="jaws"
                  value={this.state.newSearch}
                  onChange={(e) => this.setState({ searching: false, newSearch: e.target.value })}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <Button
                className="btn btn-secondary btn-sm  rounded-0  h-100"
                style={{ backgroundColor: "#221f1f" }}
                onClick={this.startSearch}
              >
                Start Searching
              </Button>
            </Col>
          </Row>
          {this.state.searching && <FilmRow search={this.state.newSearch} />}

          <MyTitle title="Watch It Again" />
          <FilmRow search="jaws" />
          <MyTitle title="New Releases" />
          <FilmRow search="star" />
        </Container>
      </>
    );
  }
}
export default MyMain;
