import React from "react";
import { Divider } from "@mui/material";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

const salesData = [
  { month: "Jan", sales: 10 },
  { month: "Feb", sales: 14 },
  { month: "Mar", sales: 18 },
  { month: "Apr", sales: 12 },
  { month: "May", sales: 20 },
  { month: "Jun", sales: 16 },
];

const AnalyticSales = () => (
  <div className="py-6 px-10 rounded-lg border-2 border-gray-200">
    <h3 className="mt-4 mb-2">Monthly Sales Overview</h3>
    <Divider variant="full" component="hr" />
    <div className="h-[400px] w-full mt-5">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#00C49F" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default AnalyticSales;