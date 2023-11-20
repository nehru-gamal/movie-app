import * as actions from "./ActionsTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_WATCHLIST:
      return {
        ...state,
        watchList: [action.pyload, ...state.watchList],
      };
    case actions.REMOVE_WATCHLIST:
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.imdbID !== action.pyload
        ),
      };
    case actions.MOVE_WATCHLIST:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.pyload.imdbID
        ),
        watchList: [action.pyload, ...state.watchList],
      };

    case actions.ADD_WATCHED:
      return {
        ...state,
        watched: [action.pyload, ...state.watched],
        watchList: state.watchList.filter(
          (movie) => movie.imdbID !== action.pyload.imdbID
        ),
      };
    case actions.REMOVE_WATCHED:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.pyload
        ),
      };
    default:
      return state;
  }
};
