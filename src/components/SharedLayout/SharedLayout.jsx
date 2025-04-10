import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar'; // ✅ Імпорт AppBar

const SharedLayout = () => {
  return (
    <div>
      <AppBar /> {/* ✅ Додаємо AppBar */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;