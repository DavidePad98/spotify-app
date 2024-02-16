import { Row } from "react-bootstrap";
import Song from "./Song";

const SongList = ({ songs }) => (
  <Row className="g-3">
    {songs.slice(0, 4).map((e) => {
      return <Song song={e} key={e.id} cardSelected={e} />;
    })}
  </Row>
);

export default SongList;
