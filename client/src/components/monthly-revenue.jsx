import React from "react";
import Para from "./paragraph";
import { Divider } from "@mui/material";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

const MonthlyRevenue = () => {
  // Mock data for analytics
  const monthlyRevenue = [
    { name: "Jan", revenue: 12000 },
    { name: "Feb", revenue: 15000 },
    { name: "Mar", revenue: 18000 },
    { name: "Apr", revenue: 16000 },
    { name: "May", revenue: 21000 },
    { name: "Jun", revenue: 19000 },
    { name: "Jul", revenue: 22000 },
    { name: "Aug", revenue: 25000 },
    { name: "Sep", revenue: 23000 },
    { name: "Oct", revenue: 27000 },
    { name: "Nov", revenue: 29000 },
    { name: "Dec", revenue: 32000 },
  ];

  const propertyTypeData = [
    { name: "Apartment", value: 35 },
    { name: "House", value: 25 },
    { name: "Condo", value: 20 },
    { name: "Townhouse", value: 15 },
    { name: "Other", value: 5 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const listingData = [
    { name: "Week 1", forSale: 12, forRent: 8 },
    { name: "Week 2", forSale: 15, forRent: 10 },
    { name: "Week 3", forSale: 18, forRent: 12 },
    { name: "Week 4", forSale: 16, forRent: 9 },
  ];

  return (
    <>
      <div className="flex items-center align-middle justify-between gap-4 mb-4">
        <div className="py-6 px-10 rounded-lg border-2 border-gray-200 w-3/4">
          <h3 className="mt-4">Monthly revenue for the current year</h3>
          <Para>
            <span className="block text-left">
              Overview of the monthly revenue for this year.
            </span>
          </Para>
          <Divider variant="full" component={"hr"} />

          <div className="mt-5">
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyRevenue}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `MK${value / 1000}k`} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8884d8"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="py-6 px-10 rounded-lg border-2 border-gray-200 w-1/4">
          <h3 className="mt-4 mb-4">Distribution by property type</h3>
          <Divider variant="full" component={"hr"} />
          <div className="mt-5">
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={propertyTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {propertyTypeData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 py-6 px-10 rounded-lg border-2 border-gray-200">
        <h3 className="mt-4 mb-3">New listings by week</h3>
        <Divider variant="full" component={"hr"} />
        <div className="h-[500px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={listingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="forSale" fill="#8884d8" name="For Sale" />
              <Bar dataKey="forRent" fill="#82ca9d" name="For Rent" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default MonthlyRevenue;
