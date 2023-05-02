import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import Loader from "components/Loader/Loader.jsx";
import css from "components/Navigation/Navigation.module.css";
import UserMenu from "./UserMenu";
import AuthMenu from "./AuthMenu";
import { getIsLoggedIn } from "components/Redux/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className={css.container}>
      <header>
        <nav className={css["nav-container"]}>
          <ul className={css.nav}>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            )}
          </ul>
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Navigation;
