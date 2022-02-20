import { useReducer } from 'react';

export const actions = {
  logIn: 'log-in-action',
  logOut: 'log-out-action',
  dispatch: (action) => {
    console.error('Actions was used before dispatch was ready - app store', action);
  },
};

// reducer

export const appReducer = (state, action = {}) => {
  const { type } = action;
  switch (type) {
    case actions.logIn:
      return { ...state };

    case actions.logOut:
      return;

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

export const logIn = () => {
  actions.dispatch({ type: actions.logIn });
};

export const logOut = () => {
  actions.dispatch({ type: actions.logOut });
};
