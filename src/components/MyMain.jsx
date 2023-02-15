import { useState } from "react";
import { Container, Form, FloatingLabel, Button, Row, Col } from "react-bootstrap";
import MyTitle from "./MyTitle";
import FilmRow from "./FilmRow,";
// import NavInMain from "./NavInMain";

const MyMain = () => {
  // state = {
  //   newSearch: "",
  //   searching: false,
  // };
  const [newSearch, setNewSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const startSearch = () => {
    if (newSearch !== "") {
      // this.setState({ searching: true });
      setSearching(true);
    } else {
      console.log("nope");
      alert("inserisci qualcosa nel campo di ricerca");
    }
  };

  return (
    <>
      <Container fluid className="px-4">
        {/* <NavInMain /> */}

        {/* Mytitle è semplicemente un titolo mentre la FilmRow riceve una props e crea una row contenenti i film trovati */}
        <MyTitle title="Trending Now" />
        <FilmRow search="wick" />

        {/* Blocco che si occupa della ricerca della ricerca */}
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
                value={newSearch}
                onChange={
                  (e) => {
                    setSearching(false);
                    setNewSearch(e.target.value);
                  }
                  // this.setState({ searching: false, newSearch: e.target.value })
                }
              />
            </FloatingLabel>
          </Col>
          <Col className="h-100">
            <Button
              className="btn btn-secondary btn-sm  rounded-0 p-3"
              style={{ backgroundColor: "#221f1f" }}
              onClick={startSearch}
            >
              <i className="fa fa-search icons"></i> Start Searching
            </Button>
          </Col>
        </Row>
        {searching && <FilmRow search={newSearch} />}
        {/* fine blocco ricerca */}

        <MyTitle title="Watch It Again" />
        <FilmRow search="jaws" />
        <MyTitle title="New Releases" />
        <FilmRow search="star" />
      </Container>
    </>
  );
};
export default MyMain;
