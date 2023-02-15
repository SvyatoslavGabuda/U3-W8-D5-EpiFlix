import { Component } from "react";
import { Col, Row, Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

class Film extends Component {
  state = {
    id: this.props.imdb,
    clicked: false,
    loadedInfo: null,
    loading: false,
    errors: false,
    errorMessage: "",
  };
  load = async () => {
    this.setState({ loading: true });
    try {
      const responde = await fetch(`http://www.omdbapi.com/?apikey=24bacb38&i=${this.props.imdb}`);
      if (responde.ok) {
        const newInfo = await responde.json();
        console.log(newInfo);
        this.setState({ loadedInfo: newInfo, loading: false });
      } else {
        console.log("errore");
        this.setState({
          loading: false,
          errors: true,
          errorMessage: `There was a loading error. ERROR: ${responde.status}`,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
        errors: true,
        errorMessage: `Fatality! ${error.message}`,
      });
    }
  };
  loadInfo = () => {
    console.log("a");
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <Col xs="12" sm="6" md="3" xl="2" className="col text-center">
          <img src={this.props.img} alt={this.props.alt} onClick={this.loadInfo} />

          {/* la parte sottostante si occupa di renderizzare gli errori e i commenti caricicati col
          click */}
          {this.state.errors && (
            <Alert variant="danger" bg="danger">
              {this.state.errorMessage}
            </Alert>
          )}
          {this.state.clicked && (
            <Row>
              <button className="mt-2 btn btn-secondary btn-sm  rounded-0" onClick={this.load}>
                Load Info
              </button>
              <Link to={"/Movies/" + this.props.imdb}>
                <span className="mt-2 btn btn-secondary btn-sm  rounded-0">More Movie Details</span>
              </Link>
              {this.state.loading && <Spinner animation="border" variant="secondary" />}
              {this.state.loadedInfo && (
                <div>
                  <p>
                    <span>Title: </span>
                    {this.state.loadedInfo.Title}
                  </p>

                  <p>
                    <span>Year: </span>
                    {this.state.loadedInfo.Year}
                  </p>
                </div>
              )}
            </Row>
          )}
        </Col>
      </>
    );
  }
}
export default Film;
