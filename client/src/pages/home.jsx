import React from "react";
import dash from "../assets/dashimg.png";
import PropertyStatCards from "../components/car";
import AnalyticSales from "../components/sales";

const HomeDashboard = () => {
  const name = "Emmanuel Nyangazi";

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
          {name.charAt(0)}
        </div>
        <h1 className="font-semibold">Welcome, {name}</h1>
      </div>

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
        <AnalyticSales />
    </div>
  );
};

export default HomeDashboard;
