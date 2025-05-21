import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Button,
  TextField,
  Menu,
  MenuItem,
} from "@mui/material";
import { Search, UserPlus, MoreVertical } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

// Mock data for clients
const clients = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    status: "Active",
    lastContact: "2 days ago",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "(555) 987-6543",
    status: "Active",
    lastContact: "1 week ago",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.b@example.com",
    phone: "(555) 456-7890",
    status: "Inactive",
    lastContact: "3 weeks ago",
    avatar: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.d@example.com",
    phone: "(555) 234-5678",
    status: "Active",
    lastContact: "Yesterday",
    avatar: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Robert Wilson",
    email: "robert.w@example.com",
    phone: "(555) 876-5432",
    status: "Active",
    lastContact: "4 days ago",
    avatar: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Jennifer Lee",
    email: "jennifer.l@example.com",
    phone: "(555) 345-6789",
    status: "Inactive",
    lastContact: "2 months ago",
    avatar: "/placeholder.svg",
  },
  {
    id: 7,
    name: "David Martinez",
    email: "david.m@example.com",
    phone: "(555) 654-3210",
    status: "Active",
    lastContact: "5 days ago",
    avatar: "/placeholder.svg",
  },
  {
    id: 8,
    name: "Lisa Taylor",
    email: "lisa.t@example.com",
    phone: "(555) 789-0123",
    status: "Active",
    lastContact: "1 day ago",
    avatar: "/placeholder.svg",
  },
];

const chartData = [
  { name: "Active", value: clients.filter((c) => c.status === "Active").length },
  { name: "Inactive", value: clients.filter((c) => c.status === "Inactive").length },
];

const COLORS = ["#0088FE", "#FF8042"];

export default function ClientList({ limit }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const displayClients = limit ? clients.slice(0, limit) : clients;

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card>
      <CardHeader
        title={<Typography variant="h6">Clients</Typography>}
        action={
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {!limit && (
              <TextField
                size="small"
                variant="outlined"
                placeholder="Search clients..."
                InputProps={{
                  startAdornment: <Search style={{ marginRight: "8px" }} />,
                }}
              />
            )}
            <Button
              variant="contained"
              size="small"
              startIcon={<UserPlus />}
              style={{ textTransform: "none" }}
            >
              {limit ? null : "Add Client"}
            </Button>
          </div>
        }
      />
      <CardContent>
        <div style={{ marginBottom: "16px" }}>
          <PieChart width={200} height={200}>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        {displayClients.map((client) => (
          <div
            key={client.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Avatar src={client.avatar || "/placeholder.svg"} alt={client.name}>
                {client.name.charAt(0)}
              </Avatar>
              <div>
                <Typography variant="body1" style={{ fontWeight: 500 }}>
                  {client.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {client.email}
                </Typography>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography variant="body2" color="textSecondary">
                {client.lastContact}
              </Typography>
              <IconButton onClick={handleMenuOpen}>
                <MoreVertical />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>View profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>Send email</MenuItem>
                <MenuItem onClick={handleMenuClose}>Call client</MenuItem>
                <MenuItem onClick={handleMenuClose}>Edit details</MenuItem>
              </Menu>
            </div>
          </div>
        ))}
        {limit && (
          <Button variant="outlined" fullWidth>
            View All Clients
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
