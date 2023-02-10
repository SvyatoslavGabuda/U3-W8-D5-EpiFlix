import { Component } from "react";
import { Row, Spinner, Alert } from "react-bootstrap";
import Film from "./Film";

class FilmRow extends Component {
  state = {
    loading: true,
    loadedFilm: [],
    errors: false,
    errorMessage: "",
  };
  TakeNewFilm = async () => {
    try {
      const responde = await fetch(
        `http://www.omdbapi.com/?apikey=24bacb38&s=${this.props.search}`
      );
      // console.log(responde);
      if (responde.ok) {
        const films = await responde.json();
        // console.log(films);
        if (films.Response === "True") {
          // console.log("sono la respose di film", films.Response);
          this.setState({ loadedFilm: films.Search, loading: false });
        } else {
          this.setState({
            loading: false,
            errors: true,
            errorMessage: `There was a search problem. ERROR: ${films.Error}`,
          });
        }
        // console.log(films.Search);
      } else {
        this.setState({
          loading: false,
          errors: true,
          errorMessage: `There was a loading error. ERROR: ${responde.status}`,
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        errors: true,
        errorMessage: `Fatality! ${error.message}`,
      });
    }
  };
  componentDidMount() {
    // console.log("DiDMount");
    this.TakeNewFilm();
  }
  render() {
    // console.log("render");
    return (
      <>
        <Row className="filmsRow">
          {this.state.errors && (
            <Alert variant="danger" bg="danger">
              {this.state.errorMessage}
            </Alert>
          )}
          {this.state.loading && <Spinner animation="border" variant="secondary" />}
          {this.state.loadedFilm.map((film) => (
            <Film key={film.imdbID} img={film.Poster} alt={film.Title} imdb={film.imdbID} />
          ))}
        </Row>
      </>
    );
  }
}

export default FilmRow;
