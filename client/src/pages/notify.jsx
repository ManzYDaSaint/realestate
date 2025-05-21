import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  IconButton,
  Chip,

} from "@mui/material"
import {
  Bell,
  Users,
  DollarSign,
  Calendar,
  Home,
  MessageSquare,
  FileText,
  Trash2,
  CheckCircle,
  Clock,
  Filter,
} from "lucide-react"

// Sample data for notifications
const notificationsData = [
  {
    id: 1,
    type: "lead",
    title: "New Lead",
    message: "Sarah Johnson submitted a contact form for the Oak Street property",
    time: "10 minutes ago",
    read: false,
    icon: <Users size={20} color="#1976d2" />,
    iconBg: "#e3f2fd",
  },
  {
    id: 2,
    type: "deal",
    title: "Deal Update",
    message: "The offer for 123 Main Street has been accepted",
    time: "1 hour ago",
    read: false,
    icon: <DollarSign size={20} color="#f57c00" />,
    iconBg: "#fff8e1",
  },
  {
    id: 3,
    type: "appointment",
    title: "Upcoming Appointment",
    message: "Property viewing with Michael Brown tomorrow at 2:00 PM",
    time: "3 hours ago",
    read: true,
    icon: <Calendar size={20} color="#388e3c" />,
    iconBg: "#e8f5e9",
  },
  {
    id: 4,
    type: "property",
    title: "New Property",
    message: "A new property has been added to your listings",
    time: "Yesterday",
    read: true,
    icon: <Home size={20} color="#7b1fa2" />,
    iconBg: "#f3e5f5",
  },
  {
    id: 5,
    type: "message",
    title: "New Message",
    message: "You have a new message from Emma Wilson",
    time: "Yesterday",
    read: true,
    icon: <MessageSquare size={20} color="#0288d1" />,
    iconBg: "#e1f5fe",
  },
  {
    id: 6,
    type: "document",
    title: "Document Signed",
    message: "Robert Smith signed the purchase agreement",
    time: "2 days ago",
    read: true,
    icon: <FileText size={20} color="#00796b" />,
    iconBg: "#e0f2f1",
  },
]

const Notify = ({ setUnreadCount }) => {
  const [notifications, setNotifications] = useState(notificationsData)
  


  const handleMarkAsRead = (id) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const handleClearAll = () => {
    setNotifications([])
  }

  const unreadCount = notifications.filter((notification) => !notification.read).length
  setUnreadCount(unreadCount);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Notifications</h1>
      </div>
      <div className="py-6 px-10 rounded-lg border-2 border-gray-200">
      <Box>

        <>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Box>
              <Button
                variant="text"
                color="primary"
                startIcon={<CheckCircle size={18} />}
                sx={{ textTransform: "none", mr: 2 }}
                onClick={handleMarkAllAsRead}
                disabled={notifications.every((notification) => notification.read)}
              >
               <p>Mark All as Read</p>
              </Button>
              <Button
                variant="text"
                color="error"
                startIcon={<Trash2 size={18} />}
                sx={{ textTransform: "none" }}
                onClick={handleClearAll}
                disabled={notifications.length === 0}
              >
                <p>Clear All</p>
              </Button>
            </Box>
            <Button variant="text" color="primary" startIcon={<Filter size={18} />} sx={{ textTransform: "none" }}>
              <p>Filter</p>
            </Button>
          </Box>

          <Paper>
            {notifications.length > 0 ? (
              <List>
                {notifications.map((notification, index) => (
                  <React.Fragment key={notification.id}>
                    <ListItem
                      alignItems="flex-start"
                      sx={{
                        bgcolor: notification.read ? "transparent" : "rgba(176, 106, 77, 0.05)",
                        py: 1.5,
                      }}
                      secondaryAction={
                        <Box>
                          <IconButton
                            edge="end"
                            size="small"
                            onClick={() => handleMarkAsRead(notification.id)}
                            sx={{ mr: 1 }}
                            disabled={notification.read}
                          >
                            <CheckCircle size={18} />
                          </IconButton>
                          <IconButton edge="end" size="small" onClick={() => handleDeleteNotification(notification.id)}>
                            <Trash2 size={18} />
                          </IconButton>
                        </Box>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: notification.iconBg }}>{notification.icon}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography
                              variant="subtitle1"
                              sx={{ fontWeight: notification.read ? "regular" : "medium" }}
                            >
                              <p>{notification.title}</p>
                            </Typography>
                            {!notification.read && (
                              <Chip
                                label="New"
                                size="small"
                                sx={{
                                  ml: 1,
                                  height: 20,
                                  fontSize: "0.7rem",
                                  bgcolor: "primary.main",
                                  color: "white",
                                }}
                              />
                            )}
                          </Box>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              color="text.primary"
                              sx={{ display: "block", mb: 0.5 }}
                            >
                              <p>{notification.message}</p>
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Clock size={14} style={{ marginRight: "4px" }} />
                              <Typography variant="caption" color="text.secondary">
                                <p>{notification.time}</p>
                              </Typography>
                            </Box>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    {index < notifications.length - 1 && <Divider component="li" />}
                  </React.Fragment>
                ))}
              </List>
            ) : (
              <Box sx={{ p: 4, textAlign: "center" }}>
                <Bell size={48} className="block mx-auto" style={{ color: "#b06a4d", opacity: 0.5, marginBottom: "16px" }} />
                <Typography variant="h6"><p>No Notifications</p></Typography>
                <Typography variant="body2" color="text.secondary">
                  <p>You don't have any notifications at the moment.</p>
                </Typography>
              </Box>
            )}
          </Paper>
        </>

    </Box>
      </div>
    </div>
  );
};

export default Notify;
