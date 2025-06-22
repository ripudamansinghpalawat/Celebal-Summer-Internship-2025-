// src/pages/Dashboard.jsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "Jan", uv: 400 },
  { name: "Feb", uv: 700 },
  { name: "Mar", uv: 500 },
  { name: "Apr", uv: 800 },
];

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl mb-4 font-bold">Dashboard</h2>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-bold mb-4">Visitors Overview</h2>
  <LineChart width={500} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="uv" stroke="#3b82f6" strokeWidth={2} />
  </LineChart>
</div>
