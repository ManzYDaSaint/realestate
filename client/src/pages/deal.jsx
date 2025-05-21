"use client"

import { useState } from "react"
import {
  Plus,
  Search,
  MoreVertical,
  Mail,
  Edit,
  Trash2,
  DollarSign,
  Calendar,
  Home,
  User,
  ArrowRight,
} from "lucide-react"

// Sample data for deals
const dealsData = {
  New: [
    {
      id: 1,
      title: "Luxury Apartment Purchase",
      client: "Sarah Johnson",
      property: "123 Luxury Ave, Beverly Hills",
      value: "$1,250,000",
      agent: "John Doe",
      date: "2023-05-15",
      stage: "New",
    },
    {
      id: 2,
      title: "Commercial Office Space",
      client: "Robert Smith",
      property: "456 Business Blvd, Downtown",
      value: "$2,500,000",
      agent: "John Doe",
      date: "2023-05-12",
      stage: "New",
    },
  ],
  Qualified: [
    {
      id: 3,
      title: "Beachfront Property",
      client: "Emma Wilson",
      property: "789 Ocean Dr, Malibu",
      value: "$3,750,000",
      agent: "Jane Smith",
      date: "2023-05-10",
      stage: "Qualified",
    },
  ],
  Proposal: [
    {
      id: 4,
      title: "Suburban Family Home",
      client: "Michael Brown",
      property: "101 Family Rd, Suburbia",
      value: "$850,000",
      agent: "John Doe",
      date: "2023-05-08",
      stage: "Proposal",
    },
    {
      id: 5,
      title: "Downtown Condo",
      client: "Lisa Thompson",
      property: "202 Urban St, City Center",
      value: "$650,000",
      agent: "Jane Smith",
      date: "2023-05-05",
      stage: "Proposal",
    },
  ],
  Negotiation: [
    {
      id: 6,
      title: "Country Estate",
      client: "David Miller",
      property: "303 Country Lane, Countryside",
      value: "$1,950,000",
      agent: "John Doe",
      date: "2023-05-03",
      stage: "Negotiation",
    },
  ],
  Closed: [
    {
      id: 7,
      title: "Mountain Retreat",
      client: "James Anderson",
      property: "404 Mountain View, Aspen",
      value: "$2,150,000",
      agent: "Jane Smith",
      date: "2023-05-01",
      stage: "Closed",
    },
  ],
}

// Stage colors
const stageColors = {
  New: { bg: "#e3f2fd", color: "#1976d2" },
  Qualified: { bg: "#fff8e1", color: "#f57c00" },
  Proposal: { bg: "#e8f5e9", color: "#388e3c" },
  Negotiation: { bg: "#f3e5f5", color: "#7b1fa2" },
  Closed: { bg: "#e0f2f1", color: "#00796b" },
}


function DealManagement() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [search, setSearch] = useState("");

  const handleMenuOpen = (event, deal) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const allDeals = Object.values(dealsData).flat();

const filtered = allDeals.filter((deal) =>
  [deal.title, deal.agent, deal.property, deal.stage].some((val) =>
    val.toLowerCase().includes(search.toLowerCase())
  )
);

// Re-group by stage (to use Object.entries)
const filteredGrouped = filtered.reduce((acc, deal) => {
  if (!acc[deal.stage]) acc[deal.stage] = [];
  acc[deal.stage].push(deal);
  return acc;
}, {});


  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl font-semibold">Deal Management</h1>
        <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-white text-semibold rounded-lg bg-blue-500 hover:bg-blue-100 hover:text-blue-500 transition duration-300 mt-3">
          <Plus size={16} />
          Add New Deal
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
            type="text"
            placeholder="Search deals..."
            className="pl-10 pr-4 py-2 border rounded-md text-sm w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Deal Stages */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {Object.entries(filteredGrouped).map(([stage, deals]) => (
          <div
            key={stage}
            className="min-w-[300px] max-w-[300px] bg-white shadow rounded-md flex flex-col"
          >
            <div
              className={`p-3 flex justify-between items-center rounded-t-md text-sm font-medium ${
                stageColors[stage]?.bg || "bg-gray-100"
              } ${stageColors[stage]?.color || "text-black"}`}
              style={
                stageColors[stage]
                  ? { backgroundColor: stageColors[stage].bg, color: stageColors[stage].color }
                  : {}
              }
            >
              <span>{stage}</span>
              <span className="bg-white text-black px-2 py-1 text-xs rounded-full font-bold">
                {deals.length}
              </span>
            </div>
            <div className="p-2">
              {deals.map((deal) => (
                <div key={deal.id} className="mb-2 bg-gray-50 rounded-md shadow-sm">
                  <div className="p-3">
                    <div className="flex justify-between mb-2">
                      <h2 className="text-sm font-medium">{deal.title}</h2>
                      <button
                        onClick={(e) => handleMenuOpen(e, deal)}
                        className="text-gray-500 hover:text-gray-800"
                      >
                        <MoreVertical size={16} />
                      </button>
                    </div>
                    <div className="text-sm text-gray-600 flex items-center mb-1">
                      <User size={14} className="mr-1" /> {deal.client}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center mb-1 truncate">
                      <Home size={14} className="mr-1" /> {deal.property}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center mb-1">
                      <DollarSign size={14} className="mr-1" /> {deal.value}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center">
                      <Calendar size={14} className="mr-1" /> {deal.date}
                    </div>
                    <div className="my-2 border-t" />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center mr-2">
                          {deal.agent
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <span className="text-sm">{deal.agent}</span>
                      </div>
                      <button className="text-blue-600 text-sm hover:underline inline-flex items-center">
                        Move <ArrowRight size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button className="mt-2 w-full flex items-center justify-center gap-1 border border-blue-600 text-blue-600 text-sm py-2 rounded-md hover:bg-blue-50">
                <Plus size={16} /> Add Deal
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dropdown Menu */}
      {anchorEl && (
        <div className="absolute bg-white shadow-md rounded-md p-2 z-10" style={{ top: anchorEl?.offsetTop + 30, left: anchorEl?.offsetLeft }}>
          <button
            onClick={handleMenuClose}
            className="flex items-center gap-2 text-sm text-gray-700 px-2 py-1 hover:bg-gray-100 w-full text-left"
          >
            <Edit size={16} /> Edit Deal
          </button>
          <button
            onClick={handleMenuClose}
            className="flex items-center gap-2 text-sm text-gray-700 px-2 py-1 hover:bg-gray-100 w-full text-left"
          >
            <Mail size={16} /> Contact Client
          </button>
          <hr className="my-1" />
          <button
            onClick={handleMenuClose}
            className="flex items-center gap-2 text-sm text-red-600 px-2 py-1 hover:bg-red-50 w-full text-left"
          >
            <Trash2 size={16} /> Delete Deal
          </button>
        </div>
      )}
    </div>
  )
}

export default DealManagement
