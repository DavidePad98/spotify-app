// export const SAVE_AVAILABLE_SONGS = "SAVE_AVAILABLE_BOOKS";
export const ROCK_SONGS = "ROCK_SONGS";
export const POP_SONGS = "POP_SONGS";
export const HIPPOP_SONGS = "HIPPOP_SONGS";
export const CARD_SELECTED = "CARD_SELECTED";
export const ADD_TO_FAV = "ADD_TO_FAV";

export const addToFavAction = (cardSelected) => {
  return {
    type: ADD_TO_FAV,
    payload: cardSelected,
  };
};

export const getSongsActionCreator = (id) => {
  return async (dispatch, getState) => {
    console.log(getState());

    try {
      let resp = await fetch(
        " https://striveschool-api.herokuapp.com/api/deezer/search?q=" + id
      );
      if (resp.ok) {
        let fetchedSongs = await resp.json();
        // console.log(fetchedSongs.data);
        switch (id) {
          case "rock":
            dispatch({
              type: ROCK_SONGS,
              payload: fetchedSongs.data,
            });
            break;
          case "pop":
            dispatch({
              type: POP_SONGS,
              payload: fetchedSongs.data,
            });
            break;
          case "hippop":
            dispatch({
              type: HIPPOP_SONGS,
              payload: fetchedSongs.data,
            });
            break;

          default:
            break;
        }
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
    //   finally {
    //     dispatch({
    //       type: TURN_OFF_SPINNER,
    //     })
    //   }
  };
};
