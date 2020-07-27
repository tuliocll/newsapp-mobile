import React, {createContext, useReducer, Dispatch} from 'react';
import {
  userAuthReducer,
  UserAuthActions,
  UserAuth,
} from '../reducers/userReducer';

type InitialStateType = {
  user: UserAuth;
};

const DEFAULT_VALUE: InitialStateType = {
  user: {
    userName: '',
    signed: false,
    token: '',
  },
};

const StateContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<UserAuthActions>;
}>({
  state: DEFAULT_VALUE,
  dispatch: () => null,
});

const rootReducer = ({user}: InitialStateType, action: UserAuthActions) => ({
  user: userAuthReducer(user, action),
});

const StateProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(rootReducer, DEFAULT_VALUE);
  return (
    <StateContext.Provider value={{state, dispatch}}>
      {children}
    </StateContext.Provider>
  );
};

export {StateProvider, StateContext};
