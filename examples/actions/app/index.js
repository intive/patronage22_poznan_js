import { useReducer } from 'react';

let dispatch = (action) => {
  console.error('Ojeju rety nie ma dispacza jeszcze', action);
};

const actionTypes = {
  closeModal: 'modal-close',
  openModal: 'modal-open',
  setLanguage: 'language-set',
};

// reducer

export const appReducer = (state, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.closeModal:
      return { ...state, isModalOpen: false, modalContent: '' };

    case actionTypes.openModal:
      return { ...state, isModalOpen: true, modalContent: payload || '' };

    case actionTypes.setLanguage:
      return { ...state, language: payload };

    default:
      break;
  }

  return state;
};

// action hook

export const useActions = (initialState) => {
  const [appState, newDispatch] = useReducer(appReducer, initialState);
  dispatch = newDispatch;
  return appState;
};

// actions

/**
 * Close modal and clear up the contents
 *
 */
export const closeModal = () => {
  dispatch({ type: actionTypes.closeModal });
};

/**
 * Open modal and set its contents
 *
 * @param {string} payload Modal content
 */
export const openModal = (payload) => {
  dispatch({ type: actionTypes.openModal, payload });
};

export const setLanguage = (payload) => {
  dispatch({ type: setLanguage, payload });
};
