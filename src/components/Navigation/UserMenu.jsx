import { useSelector } from "react-redux";
import { getUserEmail } from "components/Redux/selectors";

const UserMenu = () => {
  const userEmail = useSelector(getUserEmail);
  return (
    <div>
      <p>{userEmail}</p>
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;
