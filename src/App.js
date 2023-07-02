import React from "react";
import UserList from "./feature/user/UserList";
import { Route, Routes } from "react-router-dom";
import AddUser from "./feature/user/AddUser";
import EditUser from "./feature/user/EditUser";

const App = () => {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="/add-user" element={<AddUser />}></Route>
        <Route path="/edit-user/:id" element={<EditUser />}></Route>
      </Routes>
    </div>
  );
};

export default App;
