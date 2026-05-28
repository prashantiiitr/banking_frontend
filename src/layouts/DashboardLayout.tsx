
import Sidebar from '../components/Sidebar';

import Navbar from '../components/Navbar';

interface Props {
  children: React.ReactNode;
}

function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="flex bg-[#f8fafc]">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;

