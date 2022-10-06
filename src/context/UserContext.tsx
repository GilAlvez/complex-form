import { createContext, Dispatch, Reducer, useReducer, ReactNode } from "react";
import { UserActions } from "../store/actions/User.actions";
import { initialState, userReducer } from "../store/reducers/User.reducer";
import type { UserState } from "../types/User";

export const UserContext = createContext<{
  state: UserState;
  dispatch: Dispatch<UserActions>;
}>({
  state: initialState,
  dispatch: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export const UserContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<UserState, UserActions>>(userReducer, initialState);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};
