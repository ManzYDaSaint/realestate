import React from "react";
import { Divider } from "@mui/material";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const listingStats = [
  { week: "Week 1", active: 10, expired: 2 },
  { week: "Week 2", active: 14, expired: 4 },
  { week: "Week 3", active: 13, expired: 3 },
  { week: "Week 4", active: 16, expired: 1 },
];

const AnalyticListing = () => (
  <div className="py-6 px-10 rounded-lg border-2 border-gray-200">
    <h3 className="mt-4 mb-3">Weekly Listings Activity</h3>
    <Divider variant="full" component="hr" />
    <div className="h-[500px] w-full mt-5">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={listingStats}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="active" fill="#8884d8" name="Active Listings" />
          <Bar dataKey="expired" fill="#FF8042" name="Expired Listings" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default AnalyticListing;