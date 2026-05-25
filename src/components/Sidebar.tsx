
import {
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  Landmark,
} from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-[250px] h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-10">
        Banking App
      </h1>

      <div className="space-y-6">
        <div className="flex items-center gap-3 cursor-pointer">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <Wallet size={20} />
          <span>Accounts</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <ArrowLeftRight size={20} />
          <span>Transactions</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <Landmark size={20} />
          <span>Loans</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

