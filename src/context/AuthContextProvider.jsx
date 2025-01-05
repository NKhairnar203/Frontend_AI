import React, { createContext, useState } from "react";
export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Nilesh",
    userID: "123",
    email: "nk@gmail.com",
  });
  // console.log("user", user);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
