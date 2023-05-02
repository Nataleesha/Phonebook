import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "components/Redux/auth/authOperations.js";
import css from "./Register.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <HelmetProvider>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className={css["container-login"]}>
        <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
          <p className={css.title}>Create Account</p>
          <label lassName={css.label} htmlFor="name">
            Name
          </label>
          <input
            className={css.input}
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            value={name}
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          ></input>
          <label lassName={css.label} htmlFor="email">
            Email
          </label>
          <input
            className={css.input}
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            value={email}
            required
            pattern="^.+@[^\.].*\.[a-z]{2,}$"
            title="Enter your email address"
          ></input>
          <label lassName={css.label} htmlFor="pass">
            Password
          </label>
          <input
            className={css.input}
            onChange={handleChange}
            type="password"
            id="pass"
            name="password"
            value={password}
            required
            pattern="^.{8,20}$"
            title="Matches any string between 8 and 20 characters in length"
          ></input>
          <button className={css["btn-login"]} type="submit">
            Sign up
          </button>
        </form>
      </div>
    </HelmetProvider>
  );
};

export default Register;
