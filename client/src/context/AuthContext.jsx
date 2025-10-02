import { createContext, useEffect, useReducer } from "react";

const defaultValue = {
  token: localStorage.getItem("token") || null,
  role: localStorage.getItem("role") || null,
  user:
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        role: action.role,
        token: action.token,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        role: null,
        token: null,
        user: null,
      };
  }
};

export const AuthContext = createContext(defaultValue);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, defaultValue);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("role", state.role);
    localStorage.setItem("token", state.token);
  }, [state]);

  return (
    <AuthContext.Provider
      value={{ dispatch, user: state.user, role: state.role ,token: state.token }}
    >
      {children}
    </AuthContext.Provider>
  );
};