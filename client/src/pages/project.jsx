"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  LinearProgress,
  Divider,
  Grid,
  Avatar,
  AvatarGroup,
  Menu,
  MenuItem,
} from "@mui/material"
import { Plus, MoreVertical, Calendar, CheckCircle, Clock, AlertCircle, Edit, Trash2, FileText } from "lucide-react"

// Sample data for projects
const projectsData = [
  {
    id: 1,
    title: "Luxury Apartment Development",
    description: "Development of 24 luxury apartments in downtown area",
    status: "In Progress",
    progress: 65,
    dueDate: "2023-08-15",
    team: ["JD", "JS", "RB", "EW"],
    tasks: {
      total: 24,
      completed: 16,
    },
  },
  {
    id: 2,
    title: "Commercial Office Renovation",
    description: "Renovation of 10,000 sq ft office space for corporate client",
    status: "Planning",
    progress: 25,
    dueDate: "2023-09-30",
    team: ["JD", "MT", "LT"],
    tasks: {
      total: 18,
      completed: 5,
    },
  },
  {
    id: 3,
    title: "Residential Community Master Plan",
    description: "Master planning for 50-acre residential community with amenities",
    status: "On Hold",
    progress: 40,
    dueDate: "2023-10-15",
    team: ["JS", "RB", "EW", "MT"],
    tasks: {
      total: 32,
      completed: 12,
    },
  },
  {
    id: 4,
    title: "Retail Space Leasing",
    description: "Leasing campaign for new shopping center development",
    status: "Completed",
    progress: 100,
    dueDate: "2023-05-01",
    team: ["JD", "JS"],
    tasks: {
      total: 15,
      completed: 15,
    },
  },
]

// Status chip colors
const statusColors = {
  Planning: { bg: "#e3f2fd", color: "#1976d2" },
  "In Progress": { bg: "#fff8e1", color: "#f57c00" },
  "On Hold": { bg: "#f3e5f5", color: "#7b1fa2" },
  Completed: { bg: "#e8f5e9", color: "#388e3c" },
}

function ProjectManagement() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleMenuOpen = (event, project) => {
    setAnchorEl(event.currentTarget)
    setSelectedProject(project)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: "medium" }}>
          Project Management
        </Typography>
        <Button variant="contained" color="primary" startIcon={<Plus size={18} />} sx={{ textTransform: "none" }}>
          Add New Project
        </Button>
      </Box>

      <Grid container spacing={3}>
        {projectsData.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <Card>
              <CardHeader
                title={
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h6">{project.title}</Typography>
                    <IconButton size="small" onClick={(e) => handleMenuOpen(e, project)}>
                      <MoreVertical size={18} />
                    </IconButton>
                  </Box>
                }
                subheader={
                  <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                    <Chip
                      label={project.status}
                      size="small"
                      sx={{
                        backgroundColor: statusColors[project.status]?.bg,
                        color: statusColors[project.status]?.color,
                        fontWeight: "medium",
                      }}
                    />
                    <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
                      <Calendar size={14} style={{ marginRight: "4px" }} />
                      <Typography variant="body2" color="text.secondary">
                        Due: {project.dueDate}
                      </Typography>
                    </Box>
                  </Box>
                }
                sx={{ pb: 0 }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
                    <Typography variant="body2" fontWeight="medium">
                      Progress
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                      {project.progress}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={project.progress}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: "rgba(0, 0, 0, 0.08)",
                      "& .MuiLinearProgress-bar": {
                        borderRadius: 3,
                        backgroundColor: project.status === "Completed" ? "#388e3c" : "primary.main",
                      },
                    }}
                  />
                </Box>

                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CheckCircle size={16} style={{ marginRight: "4px", color: "#388e3c" }} />
                    <Typography variant="body2">
                      {project.tasks.completed}/{project.tasks.total} Tasks
                    </Typography>
                  </Box>

                  {project.status === "In Progress" && (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Clock size={16} style={{ marginRight: "4px", color: "#f57c00" }} />
                      <Typography variant="body2">In Progress</Typography>
                    </Box>
                  )}

                  {project.status === "On Hold" && (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <AlertCircle size={16} style={{ marginRight: "4px", color: "#7b1fa2" }} />
                      <Typography variant="body2">On Hold</Typography>
                    </Box>
                  )}
                </Box>

                <Divider sx={{ mb: 2 }} />

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant="body2" fontWeight="medium">
                    Team Members
                  </Typography>
                  <AvatarGroup max={4}>
                    {project.team.map((member, index) => (
                      <Avatar key={index} sx={{ width: 28, height: 28, fontSize: "0.75rem", bgcolor: "primary.main" }}>
                        {member}
                      </Avatar>
                    ))}
                  </AvatarGroup>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>
          <Edit size={16} style={{ marginRight: "8px" }} />
          Edit Project
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <FileText size={16} style={{ marginRight: "8px" }} />
          View Details
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose} sx={{ color: "error.main" }}>
          <Trash2 size={16} style={{ marginRight: "8px" }} />
          Delete Project
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default ProjectManagement
