import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navigation from "components/Navigation/Navigation.jsx";
import Phonebook from "pages/Contacts/Phonebook.jsx";
import Home from "pages/Home/Home.jsx";
import Register from "pages/Register/Register";
import Login from "pages/Login/Login";
import { fetchCurrentUser } from "./Redux/auth/authOperations";
import RestrictedRoute from "./RestricredRoute";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route
            path="login"
            element={
              <RestrictedRoute component={Login} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={<PrivateRoute component={Phonebook} redirectTo="/login" />}
          />
          <Route path="*" element={<p>Page not found</p>} />
        </Route>
      </Routes>
    </div>
  );
}
