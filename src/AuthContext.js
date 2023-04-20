import { createContext } from "react";

const AuthContext = createContext({
  token: "",
  userId: null,
  setToken: () => {},
  setUserId: () => {},
});

export default AuthContext;
