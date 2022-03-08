import { useReducer } from 'react';

export const actions = {
  OPEN_MENU: 'show-menu-action',
  CLOSE_MENU: 'hide-menu-action',
  dispatch: (action) => {
    console.error('Actions was used before dispatch was ready - app store', action);
  },
};

// reducer

export const appReducer = (state, action = {}) => {
  const { type } = action;

  switch (type) {
    case actions.OPEN_MENU:
      return { ...state, isMenuOpen: true };

    case actions.CLOSE_MENU:
      return { ...state, isMenuOpen: false };

    default:
      break;
  }

  return state;
};

// action hook

export const useActions = (initialState) => {
  const [state, newDispatch] = useReducer(appReducer, initialState);
  actions.dispatch = newDispatch;
  return state;
};

// actions

export const openMenu = () => {
  actions.dispatch({ type: actions.OPEN_MENU });
};

export const closeMenu = () => {
  actions.dispatch({ type: actions.CLOSE_MENU });
};
