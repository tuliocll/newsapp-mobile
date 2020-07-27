type ActionMap<M extends {[index: string]: any}> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  SignIn = 'SIGN_IN',
  SignOut = 'SIGN_OUT',
}

export type UserAuth = {
  userName: string;
  signed: boolean;
  token: string;
};

type UserAuthPayload = {
  [Types.SignIn]: {
    userName: string;
    signed: boolean;
    token: string;
  };
  [Types.SignOut]: undefined;
};

export type UserAuthActions = ActionMap<UserAuthPayload>[keyof ActionMap<
  UserAuthPayload
>];

export const userAuthReducer = (state: UserAuth, action: UserAuthActions) => {
  switch (action.type) {
    case Types.SignIn:
      return {
        ...state,
        userName: action.payload.userName,
        signed: true,
        token: action.payload.token,
      };
    case Types.SignOut:
      return {
        ...state,
        userName: '',
        signed: false,
        token: '',
      };
    default:
      return state;
  }
};
