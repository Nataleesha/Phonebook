import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "components/Loader/Loader.jsx";
import css from "components/Navigation/Navigation.module.css";
import UserMenu from "./UserMenu";
import AuthMenu from "./AuthMenu";

const Navigation = () => {
  return (
    <div className={css.container}>
      <nav className={css["nav-container"]}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
        <AuthMenu />
        <UserMenu />
      </nav>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Navigation;
