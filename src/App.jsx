/** @format */

import { useState } from "react";
import "./App.css";
import UserContext from "./context/UserContext";
import UserContextProvider from "./context/userContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return <UserContextProvider></UserContextProvider>;
}

export default App;
