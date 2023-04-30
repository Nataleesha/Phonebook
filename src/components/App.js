import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "components/Navigation/Navigation.jsx";
import Phonebook from "pages/Contacts/Phonebook.jsx";
import Home from "components/Home/Home.jsx";
import Register from "pages/Register/Register";
import Login from "pages/Login/Login";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Phonebook />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Route>
      </Routes>
    </div>
  );
}
