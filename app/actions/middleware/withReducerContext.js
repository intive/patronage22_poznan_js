import { useReducer } from 'react';
import withLogging from 'actions/middleware/withLogging';

const withReducerContext = (actions, reducer) => {
  const useActionsHook = (initialState) => {
    const [state, newDispatch] = useReducer(withLogging(reducer), initialState);
    actions.dispatch = newDispatch;
    return state;
  };
  return useActionsHook;
};

export default withReducerContext;
