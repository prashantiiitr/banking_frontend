
import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '../store/authStore';

function Navbar() {
  const navigate = useNavigate();

  const logout =
    useAuthStore(
      (state) => state.logout,
    );

  const handleLogout = () => {
    logout();

    navigate('/login');
  };

  return (
    <div className="bg-white shadow px-8 py-4 flex justify-between">
      <h1 className="text-2xl font-bold">
        Banking System
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;

