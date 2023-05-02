import { Link } from "react-router-dom";
import css from "components/Navigation/Navigation.module.css";

const AuthMenu = () => {
  return (
    <ul className={css["auth-menu"]}>
      <li>
        <Link to="/login">Log In</Link>
      </li>
      <li>
        <Link className={css.register} to="/register">
          Sign Up
        </Link>
      </li>
    </ul>
  );
};

export default AuthMenu;
