"use client"

import { useState } from "react"
import {
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Send,
  DollarSign,
  CreditCard,
  FileText,
  Calendar,
  TrendingUp,
} from "lucide-react"

const invoicesData = [
  {
    id: "INV-2023-001",
    client: "Sarah Johnson",
    property: "123 Oak Street",
    amount: "$2,500.00",
    date: "2023-05-15",
    dueDate: "2023-06-15",
    status: "Paid",
    type: "Commission",
  },
  {
    id: "INV-2023-002",
    client: "Michael Brown",
    property: "456 Pine Avenue",
    amount: "$1,800.00",
    date: "2023-05-10",
    dueDate: "2023-06-10",
    status: "Pending",
    type: "Service Fee",
  },
  {
    id: "INV-2023-003",
    client: "Emma Wilson",
    property: "789 Maple Drive",
    amount: "$3,200.00",
    date: "2023-05-05",
    dueDate: "2023-06-05",
    status: "Overdue",
    type: "Commission",
  },
  {
    id: "INV-2023-004",
    client: "Robert Smith",
    property: "101 Cedar Lane",
    amount: "$1,500.00",
    date: "2023-05-01",
    dueDate: "2023-06-01",
    status: "Paid",
    type: "Listing Fee",
  },
  {
    id: "INV-2023-005",
    client: "Lisa Thompson",
    property: "202 Birch Street",
    amount: "$2,100.00",
    date: "2023-04-25",
    dueDate: "2023-05-25",
    status: "Overdue",
    type: "Service Fee",
  },
]

const summaryData = [
  {
    title: "Total Revenue",
    value: "$11,100.00",
    change: "+15%",
    icon: <DollarSign className="w-5 h-5" />,
    positive: true,
  },
  {
    title: "Outstanding",
    value: "$7,100.00",
    change: "+5%",
    icon: <FileText className="w-5 h-5" />,
    positive: false,
  },
  {
    title: "Paid Invoices",
    value: "2",
    change: "0%",
    icon: <CreditCard className="w-5 h-5" />,
    positive: true,
  },
  {
    title: "Overdue",
    value: "2",
    change: "+1",
    icon: <Calendar className="w-5 h-5" />,
    positive: false,
  },
]

const statusColors = {
  Paid: "bg-green-100 text-green-600",
  Pending: "bg-yellow-100 text-yellow-700",
  Overdue: "bg-red-100 text-red-600",
  Draft: "bg-gray-100 text-gray-500",
}

export default function InvoicingBilling() {
  const tabs = ["all", "paid", "pending", "overdue", "drafts"]
  const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");

  const filtered = invoicesData
    .filter((p) =>
      filter === "all" ? true : p.status.toLowerCase().includes(filter)
    )
    .filter((p) =>
      [p.client, p.property, p.status].some((val) =>
        val.toLowerCase().includes(search.toLowerCase())
      )
    );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Invoicing & Billing</h1>
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
          <Plus className="w-4 h-4 mr-2" />
          Create New Invoice
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {summaryData.map((item, index) => (
          <div key={index} className="bg-white border rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 rounded-full bg-blue-100 text-blue-600">{item.icon}</div>
              <h2 className="text-sm font-medium">{item.title}</h2>
            </div>
            <p className="text-xl font-semibold">{item.value}</p>
            <div className="flex items-center text-sm mt-1">
              <TrendingUp
                className={`w-4 h-4 mr-1 ${item.positive ? "text-green-500" : "rotate-180 text-red-500"}`}
              />
              <span className={`${item.positive ? "text-green-500" : "text-red-500"}`}>
                {item.change} from last month
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="border-b">
        <div className="flex space-x-4 text-sm font-medium">
          {tabs.map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`py-2 px-3 -mb-px border-b-2 ${
                filter === key ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500"
              }`}
            >
              {key === "all"
                ? "All Invoices"
                : key === "paid"
                ? "Paid"
                : key === "pending"
                ? "Pending"
                : key === "overdue"
                ? "Overdue"
                : "Drafts"
              }
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
            type="text"
            placeholder="Search invoices..."
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
              <th className="px-4 py-3">Invoice #</th>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Property</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Due Date</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((invoice) => (
              <tr key={invoice.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{invoice.id}</td>
                <td className="px-4 py-3">{invoice.client}</td>
                <td className="px-4 py-3">{invoice.property}</td>
                <td className="px-4 py-3 font-medium">{invoice.amount}</td>
                <td className="px-4 py-3">{invoice.date}</td>
                <td className="px-4 py-3">{invoice.dueDate}</td>
                <td className="px-4 py-3">{invoice.type}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded ${statusColors[invoice.status]}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-right space-x-2">
                  <button className="text-gray-500 hover:text-blue-600">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="text-gray-500 hover:text-yellow-600">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-gray-500 hover:text-green-600">
                    <Send className="w-4 h-4" />
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
  )
}