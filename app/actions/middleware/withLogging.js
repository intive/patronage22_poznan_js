const withLogging = (reducer) => (state, action) => {
  const newState = reducer(state, action);
  // log out only in dev
  if (process.env.NODE_ENV === 'development') {
    console.log('Action   ', action, '\nOld state', state, '\nNew State', newState);
  }
  return newState;
};

export default withLogging;
