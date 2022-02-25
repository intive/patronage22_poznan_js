import withReducerContext from 'actions/middleware/withReducerContext';

export const actions = {
  closeModal: 'modal-close',
  openModal: 'modal-open',
  setLanguage: 'language-set',
  //
  dispatch: (action) => {
    console.error('Actions was used before dispatch was ready - app store', action);
  },
};

// reducer

export const reducer = (state, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case actions.closeModal:
      return { ...state, isModalOpen: false, modalContent: '' };

    case actions.openModal:
      return { ...state, isModalOpen: true, modalContent: payload || '' };

    case actions.setLanguage:
      return { ...state, language: payload };

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
  actions.dispatch({ type: actions.closeModal });
};

/**
 * Open modal and set its contents
 *
 * @param {string} payload Modal content
 */
export const openModal = (payload) => {
  actions.dispatch({ type: actions.openModal, payload });
};

export const setLanguage = (payload) => {
  actions.dispatch({ type: setLanguage, payload });
};
