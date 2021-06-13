import React from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UsersList/UsersList";

function App() {
  return (
    <div>
      <AddUser></AddUser>
      <UsersList users={[]}></UsersList>
    </div>
  );
}

export default App;
