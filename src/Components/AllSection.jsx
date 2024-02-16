import { Col, Container, Row } from "react-bootstrap";
import RockSection from "./RockSection";
import PopSection from "./PopSection";
import HippopSection from "./HippopSection";
// import { useSelector } from "react-redux";
// import { useState } from "react";

const AllSection = () => {
  //   const [cardSelected, setCardSelected] = useState(null);
  //   const favorite = useSelector((state) => state.favorite.favorite);

  //   const changeCard = (fav) => setCardSelected(fav);

  return (
    <Container>
      <Row>
        <Col>
          <RockSection
            id={"rock"}
            // cardSelected={cardSelected}
            // changeCard={changeCard}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <PopSection
            id={"pop"}
            // cardSelected={cardSelected}
            // changeCard={changeCard}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <HippopSection
            id={"hippop"}
            // cardSelected={cardSelected}
            // changeCard={changeCard}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default AllSection;
