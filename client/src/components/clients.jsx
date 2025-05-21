import React from "react";
import { Divider } from "@mui/material";
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const clientTypes = [
  { name: "Buyers", value: 45 },
  { name: "Sellers", value: 30 },
  { name: "Tenants", value: 15 },
  { name: "Landlords", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AnalyticClients = () => (
  <div className="py-6 px-10 rounded-lg border-2 border-gray-200">
    <h3 className="mt-4 mb-3">Client Type Distribution</h3>
    <Divider variant="full" component="hr" />
    <div className="h-[400px] w-full mt-5">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={clientTypes}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {clientTypes.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default AnalyticClients;