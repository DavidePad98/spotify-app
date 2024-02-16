import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const Favorite = () => {
  const favorite = useSelector((state) => state.favorite.favorite);
  //   const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1 className="mb-4">I tuoi Preferiti</h1>
          <ul>
            {favorite.map((song, i) => (
              <li key={i} className="d-flex justify-content-between my-3 ">
                {song.artist.name}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
export default Favorite;
