"use client"

import { useState } from "react"
import {
  Plus,
  MoreVertical,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Edit,
  Trash2,
  FileText,
} from "lucide-react"

const projectsData = [
  {
    id: 1,
    title: "Luxury Apartment Development",
    description: "Development of 24 luxury apartments in downtown area",
    status: "In Progress",
    progress: 65,
    dueDate: "2023-08-15",
    team: ["JD", "JS", "RB", "EW"],
    tasks: { total: 24, completed: 16 },
  },
  {
    id: 2,
    title: "Commercial Office Renovation",
    description: "Renovation of 10,000 sq ft office space for corporate client",
    status: "Planning",
    progress: 25,
    dueDate: "2023-09-30",
    team: ["JD", "MT", "LT"],
    tasks: { total: 18, completed: 5 },
  },
  {
    id: 3,
    title: "Residential Community Master Plan",
    description: "Master planning for 50-acre residential community with amenities",
    status: "On Hold",
    progress: 40,
    dueDate: "2023-10-15",
    team: ["JS", "RB", "EW", "MT"],
    tasks: { total: 32, completed: 12 },
  },
  {
    id: 4,
    title: "Retail Space Leasing",
    description: "Leasing campaign for new shopping center development",
    status: "Completed",
    progress: 100,
    dueDate: "2023-05-01",
    team: ["JD", "JS"],
    tasks: { total: 15, completed: 15 },
  },
]

const statusClasses = {
  Planning: "bg-blue-100 text-blue-600",
  "In Progress": "bg-yellow-100 text-yellow-700",
  "On Hold": "bg-purple-100 text-purple-700",
  Completed: "bg-green-100 text-green-600",
}

export default function ProjectManagement() {
  const [menuOpenId, setMenuOpenId] = useState(null)

  const toggleMenu = (id) => {
    setMenuOpenId(menuOpenId === id ? null : id)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Project Management</h1>
        <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-white text-semibold rounded-lg bg-blue-500 hover:bg-blue-100 hover:text-blue-500 transition duration-300 mt-3">
          <Plus size={16} />
          Add New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-white border-2 border-gray-200 shadow-md rounded-lg p-5 relative">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-lg font-medium">{project.title}</h2>
              <button onClick={() => toggleMenu(project.id)}>
                <MoreVertical size={18} className="text-gray-500" />
              </button>

              {/* Dropdown menu */}
              {menuOpenId === project.id && (
                <div className="absolute right-5 top-12 bg-white border rounded shadow-md z-10 w-40">
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2">
                    <Edit size={14} /> Edit Project
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2">
                    <FileText size={14} /> View Details
                  </button>
                  <hr />
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2">
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs px-2 py-0.5 rounded ${statusClasses[project.status]}`}>
                {project.status}
              </span>
              <div className="flex items-center text-xs text-gray-500 gap-1">
                <Calendar size={14} />
                Due: {project.dueDate}
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-3">{project.description}</p>

            <div className="mb-2">
              <div className="flex justify-between text-sm text-gray-700 mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded">
                <div
                  className={`h-2 rounded ${project.status === "Completed" ? "bg-green-600" : "bg-black"}`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="flex gap-4 items-center text-sm text-gray-700 mt-3 mb-4">
              <div className="flex items-center gap-1">
                <CheckCircle size={14} className="text-green-600" />
                {project.tasks.completed}/{project.tasks.total} Tasks
              </div>

              {project.status === "In Progress" && (
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-yellow-700" />
                  In Progress
                </div>
              )}

              {project.status === "On Hold" && (
                <div className="flex items-center gap-1">
                  <AlertCircle size={14} className="text-purple-700" />
                  On Hold
                </div>
              )}
            </div>

            <div className="border-t pt-3 flex justify-between items-center text-sm text-gray-700">
              <span>Team Members</span>
              <div className="flex -space-x-2">
                {project.team.map((member, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-medium border-2 border-white"
                  >
                    {member}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

