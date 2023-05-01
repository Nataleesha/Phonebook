import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "components/Redux/selectors";
import { logOut } from "components/Redux/auth/authOperations";
import avatar from "img/cat.png";

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <div>
      <img src={avatar} alt="avatar" width="35"></img>
      <p>
        Welcome, <b>{userName}</b>
      </p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};

export default UserMenu;
