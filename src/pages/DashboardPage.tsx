
import DashboardLayout from '../layouts/DashboardLayout';

import DashboardCards from '../components/DashboardCards';

import BalanceChart from '../components/BalanceChart';

import RecentTransactions from '../components/RecentTransactions';

import { useDashboardData } from '../hooks/useDashboardData';

function DashboardPage() {
  const {
    data,
    isLoading,
  } = useDashboardData();

  if (isLoading) {
    return (
      <DashboardLayout>
        <h1>Loading...</h1>
      </DashboardLayout>
    );
  }

  const totalBalance =
    data?.accounts?.reduce(
      (
        acc: number,
        item: any,
      ) => acc + item.balance,
      0,
    ) || 0;

  return (
    <DashboardLayout>
      <DashboardCards
        totalBalance={
          totalBalance
        }
        transactionCount={
          data?.transactions
            ?.length || 0
        }
        loanCount={
          data?.loans?.length || 0
        }
      />

      <BalanceChart />

      <RecentTransactions
        transactions={
          data?.transactions || []
        }
      />
    </DashboardLayout>
  );
}

export default DashboardPage;

