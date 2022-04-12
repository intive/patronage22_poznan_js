import withReducerContext from 'actions/middleware/withReducerContext';

export const actions = {
  CLOSE_MODAL: 'modal-close',
  OPEN_MODAL: 'modal-open',
  ADD_MOVIE_TO_MY_LIST: 'add-movie-to-my-list',
  REMOVE_MOVIE_FROM_MY_LIST: 'remove-movie-from-my-list',
  IS_MOVIE_ON_MY_LIST: 'is-movie-on-my-list',
  SET_MOVIES_IN_MY_LIST: 'set-movies-in-my-list',
  //
  dispatch: (action) => {
    console.error('Actions was used before dispatch was ready - app store', action);
  },
};

// reducer

export const reducer = (state, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case actions.CLOSE_MODAL:
      return { ...state, isModalOpen: false, content: '' };

    case actions.OPEN_MODAL:
      return { ...state, isModalOpen: true, content: payload || '' };

    case actions.ADD_MOVIE_TO_MY_LIST:
      return { ...state, myList: { ...state.myList, [+payload]: true } };

    case actions.REMOVE_MOVIE_FROM_MY_LIST: {
      const { [+payload]: removedMovie, ...restMovies } = state.myList;
      return { ...state, myList: restMovies };
    }
    case actions.SET_MOVIES_IN_MY_LIST:
      return { ...state, myList: payload };
    default:
      break;
  }

  return state;
};

// action hook

export const useActions = withReducerContext(actions, reducer);

// actions

/**
 * Close modal and clear up the contents
 *
 */
export const closeModal = () => {
  actions.dispatch({ type: actions.CLOSE_MODAL });
};

/**
 * Open modal and set its contents
 *
 * @param {string} payload Modal content
 */
export const openModal = (payload) => {
  actions.dispatch({ type: actions.OPEN_MODAL, payload });
};

export const addMovieToMyList = (payload) => {
  actions.dispatch({ type: actions.ADD_MOVIE_TO_MY_LIST, payload });
};

export const removeMovieFromMyList = (payload) => {
  actions.dispatch({ type: actions.REMOVE_MOVIE_FROM_MY_LIST, payload });
};

export const setMoviesInMyList = (payload) => {
  actions.dispatch({ type: actions.SET_MOVIES_IN_MY_LIST, payload });
};
