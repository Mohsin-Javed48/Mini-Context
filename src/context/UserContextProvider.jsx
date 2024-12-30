/** @format */

import React from "react";
import UserContext from "./UserContext";
import UserContextProvider from "../context/UserContext";
import { useState } from "react";

const userContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  <UserContext.Provider value={(user, setUser)}>
    {children}
  </UserContext.Provider>;
};

export default UserContextProvider;
