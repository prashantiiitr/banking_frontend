
import Sidebar from '../components/Sidebar';

import Navbar from '../components/Navbar';

interface Props {
  children: React.ReactNode;
}

function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;

