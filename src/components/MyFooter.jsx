import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class MyFooter extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="text-center mt-5">
            <Col xs="6" className="offset-3">
              <Row>
                <Col xs="12" className="text-left mb-2">
                  <i className="fa fa-facebook footer-icon"></i>
                  <i className="fa fa-instagram footer-icon"></i>
                  <i className="fa fa-twitter footer-icon"></i>
                  <i className="fa fa-youtube footer-icon"></i>
                </Col>
              </Row>

              <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
                <Col>
                  <Row>
                    <Col xs="12" className="footer-links">
                      <p>
                        <a href="#home" alt="footer link">
                          Audio and Subtitles
                        </a>
                      </p>
                      <p>
                        <a href="#home" alt="footer link">
                          Media Center
                        </a>
                      </p>
                      <p>
                        <a href="#home" alt="footer link">
                          Privacy
                        </a>
                      </p>
                      <p>
                        <a href="#home" alt="footer link">
                          Contact us
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>

                <Col>
                  <Row>
                    <Col xs="12" className="footer-links">
                      <p>
                        <a href="#home" alt="footer link">
                          Audio Description
                        </a>
                      </p>
                      <p>
                        <a href="#home" alt="footer link">
                          Investor Relations
                        </a>
                      </p>
                      <p>
                        <a href="#home" alt="footer link">
                          Legal Notices
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>

                <Col>
                  <Row>
                    <Col xs="12" className="footer-links">
                      <p>
                        <a href="#home" alt="footer link">
                          Help Center
                        </a>
                      </p>
                      <p>
                        <a href="#home" alt="footer link">
                          Jobs
                        </a>
                      </p>
                      <p>
                        <a href="#home" alt="footer link">
                          Cookie Preferences
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>

                <Col>
                  <Row>
                    <Col xs="12" className="footer-links">
                      <p>
                        <a href="#home" alt="footer link">
                          Gift Cards
                        </a>
                      </p>
                      <p>
                        <a href="#home" alt="footer link">
                          Terms of Use
                        </a>
                      </p>
                      <p>
                        <a href="#home" alt="footer link">
                          Corporate Information
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs="12" className="text-start mb-2">
                  <button type="button" className="btn btn-sm footer-button rounded-0 mt-3">
                    Service Code
                  </button>
                </Col>
              </Row>
              <Row>
                <Col xs="12" className="text-start mb-2 mt-2 copyright">
                  © 1997-2022 Netflix, Inc.
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default MyFooter;
