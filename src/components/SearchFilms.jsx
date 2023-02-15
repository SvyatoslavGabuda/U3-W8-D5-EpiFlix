import { useState } from "react";
import { Form, FloatingLabel, Button, Row, Col } from "react-bootstrap";
import MyTitle from "./MyTitle";
import FilmRow from "./FilmRow,";

const SearchFilms = () => {
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
    </>
  );
};
export default SearchFilms;
