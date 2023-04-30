const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          title="Enter your email address"
        ></input>
        <label htmlFor="pass">Password:</label>
        <input
          type="password"
          id="pass"
          name="password"
          required
          title="Enter your password"
        ></input>
        <input type="submit" value="Sign in"></input>
      </form>
    </>
  );
};

export default Login;
