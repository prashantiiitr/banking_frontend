
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', balance: 4000 },
  { month: 'Feb', balance: 6000 },
  { month: 'Mar', balance: 8000 },
  { month: 'Apr', balance: 7500 },
  { month: 'May', balance: 10000 },
];

function BalanceChart() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Balance Analytics
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={data}>
            <XAxis dataKey="month" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="balance"
              stroke="#0f172a"
              fill="#cbd5e1"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BalanceChart;

