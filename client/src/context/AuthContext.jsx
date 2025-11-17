import { createContext, useEffect, useReducer } from "react";

const defaultValue = {
  token: localStorage.getItem("token") || null,
  role: localStorage.getItem("role") || null,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
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

    default:
      return state; // IMPORTANT
  }
};

export const AuthContext = createContext(defaultValue);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, defaultValue);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("role", state.role);
      localStorage.setItem("token", state.token);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("role");
      localStorage.removeItem("token");
    }
  }, [state]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
