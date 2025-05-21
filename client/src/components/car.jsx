import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import {
  Building2,
  Home,
  DollarSign,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    label: "Total Properties",
    value: 124,
    icon: <Building2 className="text-blue-600 w-6 h-6" />,
    color: "bg-blue-50",
  },
  {
    label: "For Sale",
    value: 78,
    icon: <TrendingUp className="text-green-600 w-6 h-6" />,
    color: "bg-green-50",
  },
  {
    label: "For Rent",
    value: 46,
    icon: <Home className="text-purple-600 w-6 h-6" />,
    color: "bg-purple-50",
  },
  {
    label: "Total Revenue",
    value: "$1.25M",
    icon: <DollarSign className="text-yellow-600 w-6 h-6" />,
    color: "bg-yellow-50",
  },
];

export default function PropertyStatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {stats.map((stat, idx) => (
        <Card
          key={idx}
          className="rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
        >
          <CardContent className="flex items-center gap-4 p-6">
            <div
              className={`p-3 rounded-full ${stat.color} flex items-center justify-center`}
            >
              {stat.icon}
            </div>
            <div className="flex flex-col">
              <Typography
                variant="body2"
                className="text-gray-500 font-medium"
              >
                {stat.label}
              </Typography>
              <Typography variant="h6" className="font-semibold text-gray-900">
                {stat.value}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
