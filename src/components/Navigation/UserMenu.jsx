import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "components/Redux/selectors";
import { logOut } from "components/Redux/auth/authOperations";
import css from "components/Navigation/Navigation.module.css";

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <div className={css.usermenu}>
      <p>
        Welcome, <span className={css.username}>{userName}</span>
      </p>
      <button className={css["btn-logout"]} onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
