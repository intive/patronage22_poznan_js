import { useReducer } from 'react';

export const actions = {
  LOG_IN: 'log-in-action',
  LOG_OUT: 'log-out-action',
  dispatch: (action) => {
    console.error('Actions was used before dispatch was ready - app store', action);
  },
};

// reducer

export const appReducer = (state, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case actions.LOG_IN:
      return { ...payload };

    case actions.LOG_OUT:
      return {};

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

export const logIn = (user) => {
  actions.dispatch({ type: actions.LOG_IN, payload: user });
};

export const logOut = () => {
  actions.dispatch({ type: actions.LOG_OUT });
};