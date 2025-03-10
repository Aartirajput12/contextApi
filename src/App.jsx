import React from "react";
import { UserProvider } from "./components/UserContext";
import List from "./components/List";
import User from "./components/User";
// import Edit from "./components/Edit";


function App() {
  return (
    <UserProvider>
      <div className="App">
        <User />
        <List />
      </div>
    </UserProvider>
  );
}

export default App;
