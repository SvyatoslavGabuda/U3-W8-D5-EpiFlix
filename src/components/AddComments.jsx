import { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
const AddComments = (props) => {
  const [myComment, setMyComment] = useState({ rate: "1", comment: "aaaaa", elementId: "" });

  const submitComment = async (e) => {
    e.preventDefault();
    try {
      const manda = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(myComment),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZWQ2YmEyNDc4ZDAwMTNhMDU3ZjYiLCJpYXQiOjE2NzU5NDczNzEsImV4cCI6MTY3NzE1Njk3MX0.ORNzFa4dL5pfhbd6IduZ6yMpi_k3DbESNK5SUyDHW68",
        },
      });
      if (manda.ok) {
        console.log("tutto ok");
        alert("commento Postato");
        props.upDate();
      } else {
        console.log("not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="myModal">
        <p>inserisci il tuo commento:</p>
        <Form onSubmit={submitComment}>
          <Form.Select
            aria-label="rate select"
            onChange={(e) => {
              setMyComment({ ...myComment, rate: e.target.value, elementId: props.movieID });
            }}
          >
            <option>Rate the Film:</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </Form.Select>

          <FloatingLabel controlId="floatingtext" label="Commento:">
            <Form.Control
              type="text"
              placeholder="Comment"
              onChange={(e) => {
                setMyComment({ ...myComment, comment: e.target.value });
              }}
            />
          </FloatingLabel>
          <Button variant="secondary" type="submit" className="d-block mx-auto">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddComments;
