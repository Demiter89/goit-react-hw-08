// src/components/SharedLayout/SharedLayout.jsx

import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header style={{ padding: '1rem', backgroundColor: '#1f1f1f' }}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>

        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;