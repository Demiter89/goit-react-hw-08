import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors';

const PrivateRoute = ({ component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) return null; // або спінер

  return isLoggedIn ? component : <Navigate to="/login" />;
};

export default PrivateRoute;