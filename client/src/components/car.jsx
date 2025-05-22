import React from "react";
import { BanknoteArrowDown, BanknoteArrowUp, ChartSpline } from "lucide-react";

const stats = [
  {
    label: "Income",
    value: "230k",
    icon: <BanknoteArrowDown className="text-white w-6 h-6" />,
    gradient: "linear-gradient(to top, #D510D7, #E25BDF)",
  },
  {
    label: "Expenses",
    value: "78k",
    icon: <BanknoteArrowUp className="text-white w-6 h-6" />,
    gradient: "linear-gradient(to top, #4C56F9, #15C1BC)",
  },
  {
    label: "Profits",
    value: "469.9k",
    icon: <ChartSpline className="text-white w-6 h-6" />,
    gradient: "linear-gradient(to top, #E55917, #F8951E)",
  },
];

export default function PropertyStatCards() {
  return (
    <div className="flex gap-4 w-full h-full">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          style={{ backgroundImage: stat.gradient }}
          className={`rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex-1 relative`}
        >
          <div className="flex flex-col items-start justify-between gap-4">
            <div className="bg-white/30 backdrop-blur-md shadow-inner p-2 rounded-xl border-4 border-gray-100">
              <div className="p-2 rounded-lg flex items-center justify-center">
                {stat.icon}
              </div>
            </div>
            <div className="flex flex-col items-end p-2">
              <p className="font-semibold text-gray-100 text-xl">
                MK{stat.value}
              </p>
              <p className="text-sm text-gray-100">{stat.label}</p>
            </div>
          </div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-4 border-white/20 rounded-full"></div>
            <div className="absolute bottom-0 right-4 w-10 h-10 border-4 border-white/20 rounded-full"></div>
            <div className="absolute bottom-4 right-0 w-10 h-10 border-4 border-white/20 rounded-full"></div>
        </div>
      ))}
    </div>
  );
}
