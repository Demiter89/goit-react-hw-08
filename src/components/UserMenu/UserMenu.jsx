import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/authOps';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>Welcome, {name}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;