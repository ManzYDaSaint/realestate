"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  Tabs,
  Tab,
  Divider,
  Card,
  CardContent,
  Grid,
} from "@mui/material"
import {
  Plus,
  Search,
  Filter,
  MoreVertical,
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

// Sample data for invoices
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

// Status chip colors
const statusColors = {
  Paid: { bg: "#e8f5e9", color: "#388e3c" },
  Pending: { bg: "#fff8e1", color: "#f57c00" },
  Overdue: { bg: "#ffebee", color: "#d32f2f" },
  Draft: { bg: "#f5f5f5", color: "#757575" },
}

// Summary data
const summaryData = [
  {
    title: "Total Revenue",
    value: "$11,100.00",
    change: "+15%",
    icon: <DollarSign size={24} />,
    positive: true,
  },
  {
    title: "Outstanding",
    value: "$7,100.00",
    change: "+5%",
    icon: <FileText size={24} />,
    positive: false,
  },
  {
    title: "Paid Invoices",
    value: "2",
    change: "0%",
    icon: <CreditCard size={24} />,
    positive: true,
  },
  {
    title: "Overdue",
    value: "2",
    change: "+1",
    icon: <Calendar size={24} />,
    positive: false,
  },
]

function InvoicingBilling() {
  const [tabValue, setTabValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedInvoice, setSelectedInvoice] = useState(null)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const handleMenuOpen = (event, invoice) => {
    setAnchorEl(event.currentTarget)
    setSelectedInvoice(invoice)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: "medium" }}>
          Invoicing & Billing
        </Typography>
        <Button variant="contained" color="primary" startIcon={<Plus size={18} />} sx={{ textTransform: "none" }}>
          Create New Invoice
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        {summaryData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      bgcolor: "primary.light",
                      color: "white",
                      mr: 2,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h6" component="div">
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="h4" component="div" sx={{ fontWeight: "medium", mb: 1 }}>
                  {item.value}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TrendingUp
                    size={16}
                    color={item.positive ? "#4caf50" : "#f44336"}
                    style={{ transform: item.positive ? "none" : "rotate(180deg)" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      ml: 0.5,
                      color: item.positive ? "success.main" : "error.main",
                    }}
                  >
                    {item.change} from last month
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            "& .MuiTab-root": {
              textTransform: "none",
              minWidth: 100,
            },
            "& .Mui-selected": {
              color: "primary.main",
              fontWeight: "medium",
            },
          }}
        >
          <Tab label="All Invoices" />
          <Tab label="Paid" />
          <Tab label="Pending" />
          <Tab label="Overdue" />
          <Tab label="Drafts" />
        </Tabs>
      </Paper>

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <TextField
          placeholder="Search invoices..."
          variant="outlined"
          size="small"
          sx={{ width: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={20} />
              </InputAdornment>
            ),
          }}
        />
        <Box>
          <Button variant="outlined" startIcon={<Filter size={18} />} sx={{ mr: 2, textTransform: "none" }}>
            Filter
          </Button>
          <Button variant="outlined" startIcon={<Download size={18} />} sx={{ textTransform: "none" }}>
            Export
          </Button>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: "secondary.light" }}>
            <TableRow>
              <TableCell>Invoice #</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Property</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoicesData.map((invoice) => (
              <TableRow key={invoice.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Typography variant="body2" fontWeight="medium">
                    {invoice.id}
                  </Typography>
                </TableCell>
                <TableCell>{invoice.client}</TableCell>
                <TableCell>{invoice.property}</TableCell>
                <TableCell>
                  <Typography variant="body2" fontWeight="medium">
                    {invoice.amount}
                  </Typography>
                </TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.dueDate}</TableCell>
                <TableCell>{invoice.type}</TableCell>
                <TableCell>
                  <Chip
                    label={invoice.status}
                    size="small"
                    sx={{
                      backgroundColor: statusColors[invoice.status]?.bg,
                      color: statusColors[invoice.status]?.color,
                      fontWeight: "medium",
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton size="small" onClick={(e) => handleMenuOpen(e, invoice)}>
                    <MoreVertical size={18} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>
          <Eye size={16} style={{ marginRight: "8px" }} />
          View Invoice
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Edit size={16} style={{ marginRight: "8px" }} />
          Edit Invoice
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Send size={16} style={{ marginRight: "8px" }} />
          Send Invoice
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Download size={16} style={{ marginRight: "8px" }} />
          Download PDF
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose} sx={{ color: "error.main" }}>
          <Trash2 size={16} style={{ marginRight: "8px" }} />
          Delete Invoice
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default InvoicingBilling