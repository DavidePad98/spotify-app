// import { ROCK_SONGS, POP_SONGS, HIPPOP_SONGS } from "../actions";
import { CARD_SELECTED, HIPPOP_SONGS, POP_SONGS, ROCK_SONGS } from "../actions";

const initialState = {
  // songs: {
  rock: [],
  pop: [],
  hippop: [],
  isSelected: false,
  // },
};

const rockListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROCK_SONGS:
      return {
        ...state,
        // songs: { ...state.songs, rock: action.payload },
        rock: action.payload,
      };
    case POP_SONGS:
      return {
        ...state,
        pop: action.payload,
      };
    case HIPPOP_SONGS:
      return {
        ...state,
        hippop: action.payload,
      };
    case CARD_SELECTED:
      return {
        ...state,
        isSelected: action.payload,
      };

    default:
      return state;
  }
};

export default rockListReducer;
