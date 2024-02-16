import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSongsActionCreator } from "../redux/actions";
import SongList from "./SongList";

const RockSection = ({ id }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.gen.rock);
  useEffect(() => {
    dispatch(getSongsActionCreator(id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row>
      <SongList songs={songs} />
    </Row>
  );
};
export default RockSection;
