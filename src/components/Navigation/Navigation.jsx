import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" style={{ marginRight: '1rem' }}>Home</NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" style={{ marginRight: '1rem' }}>Contacts</NavLink>
      )}
    </nav>
  );
};

export default Navigation;