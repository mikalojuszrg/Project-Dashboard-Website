import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", sales: 100 },
  { month: "Feb", sales: 200 },
  { month: "Mar", sales: 300 },
  { month: "Apr", sales: 400 },
  { month: "May", sales: 500 },
];

const DashboardGraphs = () => {
  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="sales" fill="#8884d8" />
    </BarChart>
  );
};

export default DashboardGraphs;
