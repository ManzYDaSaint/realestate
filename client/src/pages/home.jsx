import React from "react";
import dash from "../assets/dashimg.png";
import PropertyStatCards from "../components/car";
import AnalyticSales from "../components/sales";
import ITable from "../components/invoice-table";
import { Divider } from "@mui/material";

const HomeDashboard = () => {
  const name = "Emmanuel Nyangazi";

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold">
          {name.charAt(0)}
        </div>
        <h1 className="font-semibold py-4 text-2xl">Welcome, <br /> {name}</h1>
      </div>

    <Divider variant="middle"
          component={"hr"}
          sx={{ borderBottomWidth: "3px" }} 
    />

      {/* Cards */}
      <div className="flex w-full items-stretch gap-3 items-center justify-between px-4 py-2">
        <div
          className="w-3/5 px-10 py-4 rounded-lg shadow-md text-white flex items-center justify-between relative border border-gray-100"
          style={{
            backgroundImage: "linear-gradient(to right, #38359A, #9D61F2)",
          }}
        >
          <div>
            <h6 className="text-3xl font-bold">
              Enjoy A Huge <br /> Discount During This Offer
            </h6>
            <p className="text-sm mt-2">
              Get up to 50% off on selected plans. Limited time offer!
            </p>
            <button className="bg-white text-blue-600 px-6 py-2 mt-4 rounded-md font-semibold text-sm">
              Shop Now
            </button>
          </div>
          <img
            src={dash}
            className="absolute bottom-0 right-3"
            style={{ width: "22rem", height: "auto", maxWidth: "100%" }}
            alt="dash"
          />
        </div>
        <div className="w-2/5 flex-1">
          <PropertyStatCards />
        </div>
      </div>

      {/* Sales */}
      <div className="py-10 flex items-center items-stretch gap-3 justify-between">
        <div className="w-3/4">
          <AnalyticSales />
        </div>
        <div className="w-1/4 p-2 border-2 border-gray-200 rounded-lg">
          <h4 className="font-medium py-2">Recent Activities</h4>
          <Divider />
        </div>
      </div>

      {/* Latest invoices */}
      <div className="py-10">
        <ITable />
      </div>
    </div>
  );
};

export default HomeDashboard;
