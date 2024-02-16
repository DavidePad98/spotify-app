import { Button, Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CARD_SELECTED, addToFavAction } from "../redux/actions";

const Song = ({ song, cardSelected }) => {
  const dispatch = useDispatch();

  return (
    <Col lg={3}>
      <Card className="h-100 p-0 text-center border-0 ">
        {" "}
        <Link
          to={"/"}
          onClick={() => {
            dispatch({
              type: CARD_SELECTED,
              payload: song,
            });
          }}
        ></Link>{" "}
        <Card.Img variant="top" src={song.album.cover_medium} />
        <Card.Body>
          <Card.Title>{song.artist.name}</Card.Title>
          <Card.Text>{song.album.title}</Card.Text>
          <Button
            className="position-absolute top-0 end-0 m-1 bg-transparent border-0 "
            onClick={() => {
              dispatch(addToFavAction(cardSelected));
            }}
          >
            <i className="fs-4 text-danger  bi bi-heart-fill"></i>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Song;
