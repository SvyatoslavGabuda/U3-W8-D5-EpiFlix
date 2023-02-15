import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AddComments from "./AddComments";
const MovieDetails = () => {
  let [open, setOpen] = useState(false);
  const { movieID } = useParams();
  const [filmObj, setFilmObj] = useState(null);
  const [comments, setComments] = useState(null);
  const [upDateed, setUpDateed] = useState(0);

  const takeMovieInfo = async () => {
    try {
      const respose = await fetch(`http://www.omdbapi.com/?apikey=24bacb38&i=${movieID}`);
      if (respose.ok) {
        const newFilm = await respose.json();
        console.log(newFilm);
        setFilmObj(newFilm);
      } else {
        console.log("ops");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const takeMovieComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${movieID}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZWQ2YmEyNDc4ZDAwMTNhMDU3ZjYiLCJpYXQiOjE2NzU5NDczNzEsImV4cCI6MTY3NzE1Njk3MX0.ORNzFa4dL5pfhbd6IduZ6yMpi_k3DbESNK5SUyDHW68",
          },
        }
      );
      if (response.ok) {
        const commenti = await response.json();
        console.log("Commenti caricati", commenti);

        setComments(commenti);
        console.log("commenti nello state", comments);
      } else {
        console.log("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const upDate = () => {
    setUpDateed(upDateed + 1);
  };

  useEffect(() => {
    takeMovieInfo();
    takeMovieComments();
  }, [movieID, upDateed]);

  return (
    <>
      <Container fluid className="px-4">
        <Row>
          {filmObj ? (
            <>
              <Col xs={4}>
                <img src={filmObj.Poster} alt={filmObj.Title} />
              </Col>
              <Col>
                <h2>{filmObj.Title}</h2>
                <p>
                  {" "}
                  <strong>Attori:</strong> {filmObj.Actors}{" "}
                </p>
                <p>
                  {" "}
                  <strong>Awards:</strong> {filmObj.Awards}{" "}
                </p>
                <p>
                  <strong>Director: </strong>
                  {filmObj.Director}{" "}
                </p>
                <p>
                  <strong>Genre: </strong>
                  {filmObj.Genre}{" "}
                </p>
                <p>
                  <strong>Language: </strong>
                  {filmObj.Language}{" "}
                </p>
                <p>
                  <strong>Plot: </strong>
                  {filmObj.Plot}{" "}
                </p>
                <h3 className="text-light">Ratings:</h3>
                {filmObj.Ratings.map((el, i) => (
                  <p key={i}>
                    <span>{el.Source} </span>
                    {el.Value}
                  </p>
                ))}
              </Col>
            </>
          ) : (
            <>
              <Spinner animation="grow" variant="light" />
            </>
          )}
        </Row>
        <Row>
          <Row className="justify-content-between align-items-center my-2">
            <Col xs={6}>
              <h2 className="m-0">commenti:</h2>
            </Col>
            <Col xs={3}>
              <Button
                className="w-100 btn btn-secondary btn-sm  rounded-0 p-3"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Aggiungi Commento:
              </Button>
              {open && <AddComments movieID={movieID} upDate={upDate} />}
            </Col>
          </Row>
          <Row>
            {comments ? (
              comments.map((el, i) => (
                <div key={i} className=" border border-secondary">
                  <p className="p-0 m-0">autore: {el.author}</p>
                  <p className="p-0 m-0">Commento: {el.comment}</p>

                  <p className="p-0 m-0">voto: {el.rate}</p>
                </div>
              ))
            ) : (
              <>
                <p>Per questo film non ci sono ancora commneti! </p>
              </>
            )}
          </Row>
        </Row>
      </Container>
    </>
  );
};
export default MovieDetails;
