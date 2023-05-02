import css from "./Login.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "components/Redux/auth/authOperations.js";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
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
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className={css["container-login"]}>
        <form onSubmit={handleSubmit} className={css.form}>
          <p className={css.title}>Login</p>
          <label className={css.label} htmlFor="email">
            Email:
          </label>
          <input
            className={css.input}
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            value={email}
            required
            title="Enter email address"
          ></input>
          <label className={css.label} htmlFor="pass">
            Password:
          </label>
          <input
            className={css.input}
            onChange={handleChange}
            type="password"
            id="pass"
            name="password"
            value={password}
            required
            title="Enter Your Password"
          ></input>
          <button className={css["btn-login"]} type="submit">
            Sign in
          </button>
        </form>
      </div>
    </HelmetProvider>
  );
};

export default Login;
