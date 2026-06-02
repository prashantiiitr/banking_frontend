import {
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[260px] min-h-screen bg-[#0f172a] text-white p-6">
      <h1 className="text-3xl font-bold mb-12">NeoBank</h1>

      <div className="space-y-3">
        <Link
          to="/"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1e293b]"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/accounts"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1e293b]"
        >
          <Wallet size={20} />
          Accounts
        </Link>

        <Link
          to="/beneficiaries"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1e293b]"
        >
          Beneficiaries
        </Link>

        <Link
          to="/transfer"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1e293b]"
        >
          <ArrowLeftRight size={20} />
          Transfers
        </Link>

        <Link
          to="/loans"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1e293b]"
        >
          <Landmark size={20} />
          Loans
        </Link>

        <Link
          to="/admin"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1e293b]"
        >
          <ShieldCheck size={20} />
          Admin
        </Link>
        <Link to="/kyc">KYC</Link>

        <Link to="/nominee">Nominee</Link>

        <Link to="/manager">Manager</Link>

        <Link to="/kyc-approval">KYC Approval</Link>
      </div>
    </div>
  );
}

export default Sidebar;
