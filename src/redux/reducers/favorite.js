import { ADD_TO_FAV } from "../actions";

const initialState = {
  favorite: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        favorite: action.payload,
      };

    default:
      return state;
  }
};

export default favoriteReducer;
