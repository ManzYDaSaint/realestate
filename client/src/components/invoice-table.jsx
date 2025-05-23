import React from 'react'
import {
  Eye,
  Edit,
  Trash2,
  Send,
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

const statusColors = {
  Paid: "bg-green-100 text-green-600",
  Pending: "bg-yellow-100 text-yellow-700",
  Overdue: "bg-red-100 text-red-600",
  Draft: "bg-gray-100 text-gray-500",
}

const ITable = () => {
  return (
    
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
            {invoicesData.map((invoice) => (
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
  )
}

export default ITable