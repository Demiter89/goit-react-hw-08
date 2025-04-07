import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" style={{ marginRight: '1rem' }}>Home</NavLink>
    </nav>
  );
};

export default Navigation;