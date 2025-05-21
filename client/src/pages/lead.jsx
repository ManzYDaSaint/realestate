"use client";

import { useState } from "react";
import {
  Plus,
  Filter,
  Mail,
  Phone,
  Edit,
  Trash2,
  Download,
  Search,
} from "lucide-react";
import Modal from "../components/modal";

// Sample data for leads
const leadsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "(555) 123-4567",
    status: "New",
    source: "Website",
    assignedTo: "John Doe",
    lastContact: "2023-05-15",
    propertyInterest: "Residential",
  },
  {
    id: 2,
    name: "Michael Brown",
    email: "michael.b@example.com",
    phone: "(555) 234-5678",
    status: "Contacted",
    source: "Referral",
    assignedTo: "John Doe",
    lastContact: "2023-05-12",
    propertyInterest: "Commercial",
  },
  {
    id: 3,
    name: "Emma Wilson",
    email: "emma.w@example.com",
    phone: "(555) 345-6789",
    status: "Qualified",
    source: "Social Media",
    assignedTo: "Jane Smith",
    lastContact: "2023-05-10",
    propertyInterest: "Residential",
  },
  {
    id: 4,
    name: "Robert Smith",
    email: "robert.s@example.com",
    phone: "(555) 456-7890",
    status: "Negotiation",
    source: "Website",
    assignedTo: "John Doe",
    lastContact: "2023-05-08",
    propertyInterest: "Land",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa.t@example.com",
    phone: "(555) 567-8901",
    status: "Closed",
    source: "Referral",
    assignedTo: "Jane Smith",
    lastContact: "2023-05-05",
    propertyInterest: "Residential",
  },
];

// Status chip colors
const statusColors = {
  New: { bg: "#e3f2fd", color: "#1976d2" },
  Contacted: { bg: "#fff8e1", color: "#f57c00" },
  Qualified: { bg: "#e8f5e9", color: "#388e3c" },
  Negotiation: { bg: "#f3e5f5", color: "#7b1fa2" },
  Closed: { bg: "#e0f2f1", color: "#00796b" },
  Lost: { bg: "#fafafa", color: "#757575" },
};

function LeadManagement() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const tabs = ["all", "new", "contacted", "qualified", "negotiation", "closed"];
  const [open, setOpen] = useState(false)

  const filtered = leadsData
    .filter((p) =>
      filter === "all" ? true : p.status.toLowerCase().includes(filter)
    )
    .filter((p) =>
      [p.name, p.propertyInterest, p.status].some((val) =>
        val.toLowerCase().includes(search.toLowerCase())
      )
    );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Lead Management</h1>
        <button 
          onClick={() => setOpen(true)}
          className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-white text-semibold rounded-lg bg-blue-500 hover:bg-blue-100 hover:text-blue-500 transition duration-300 mt-3">
            <Plus size={16} />
          Add Lead
        </button>
      </div>

      {/* Modal for adding new lead */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Add New Lead"
      >
        <p>This is a slick, modern modal with Tailwind CSS.</p>
        <p>It can be used to display any content you want.</p>

      </Modal>

      {/* Tabs */}
      <div className="border-b">
      <div className="flex space-x-4 text-sm font-medium">
        {tabs.map(
          (key) => (
            <button
              onClick={() => setFilter(key)}
              className={`py-2 px-3 -mb-px border-b-2 ${
                filter === key ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500"
              }`}
              key={key}
            >
              {key === "all"
                ? "All Leads"
                : key === "new"
                ? "New"
                : key === "contacted"
                ? "Contacted"
                : key === "qualified"
                ? "Qualified"
                : key === "negotiation"
                ? "Negotiation"
                : "Closed"}
            </button>
          )
        )}
      </div>
      </div>

      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
            type="text"
            placeholder="Search leads..."
            className="pl-10 pr-4 py-2 border rounded-md text-sm w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center px-3 py-2 border rounded-md text-sm text-gray-600 hover:bg-gray-100">
            <Filter className="w-4 h-4 mr-1" />
            Filter
          </button>
          <button className="flex items-center px-3 py-2 border rounded-md text-sm text-gray-600 hover:bg-gray-100">
            <Download className="w-4 h-4 mr-1" />
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-sm uppercase tracking-wider text-gray-600">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Assigned To</th>
              <th className="px-4 py-3">Last Contact</th>
              <th className="px-4 py-3">Property Interest</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((lead) => (
              <tr key={lead.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
                      {lead.name.charAt(0)}
                    </div>
                    <span>{lead.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-4 h-4 mr-1" />
                      <span className="text-sm">{lead.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-1" />
                      <span className="text-sm">{lead.phone}</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium `}  
                    style={{
                      backgroundColor: statusColors[lead.status].bg,
                      color: statusColors[lead.status].color,
                    }}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="px-4 py-3">{lead.source}</td>
                <td className="px-4 py-3">{lead.assignedTo}</td>
                <td className="px-4 py-3">{lead.lastContact}</td>
                <td className="px-4 py-3">{lead.propertyInterest}</td>
                <td className="px-4 py-2 text-right space-x-2">
                  <button className="text-gray-500 hover:text-blue-600">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-gray-500 hover:text-yellow-600">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="text-gray-500 hover:text-green-600">
                    <Phone className="w-4 h-4" />
                  </button>
                  <button className="text-gray-500 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeadManagement;
