
import { Bell } from 'lucide-react';

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
    <div className="bg-white h-[80px] shadow-sm flex items-center justify-between px-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Welcome Back 👋
        </h1>

        <p className="text-slate-500">
          Manage your banking activities
        </p>
      </div>

      <div className="flex items-center gap-6">
        <Bell className="cursor-pointer" />

        <button
          onClick={handleLogout}
          className="bg-black text-white px-5 py-2 rounded-xl"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;

