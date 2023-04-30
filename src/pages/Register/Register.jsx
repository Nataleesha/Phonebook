import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "components/Redux/auth/authOperations.js";
import { getUserName, getIsLoggedIn } from "components/Redux/selectors";
import css from "./Register.module.css";

const Register = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const loggedIn = useSelector(getIsLoggedIn);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    alert(userName);
    alert(loggedIn);
  }, [userName, loggedIn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          value={name}
          required
          title="Enter your username"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          value={email}
          required
          title="Enter your email address"
        ></input>
        <label htmlFor="pass">Password</label>
        <input
          onChange={handleChange}
          type="password"
          id="pass"
          name="password"
          value={password}
          required
          title="Enter your password"
        ></input>
        <button type="submit">Sign up</button>
      </form>
      <div>
        <h4>User logged:</h4>
        <p>{(userName, loggedIn)}</p>
      </div>
    </>
  );
};

export default Register;
