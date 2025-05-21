import React from "react";
import { Card, CardContent, CardHeader, Typography, Avatar, Box } from "@mui/material";
import { MessageCircle, Home, User, CheckCircle, Calendar } from "lucide-react";

// Mock data for recent activities
const activities = [
  {
    id: 1,
    type: "message",
    description: "New message from Sarah Johnson",
    time: "10 minutes ago",
    icon: <MessageCircle size={20} />,
  },
  {
    id: 2,
    type: "property",
    description: "New property listing approved",
    time: "2 hours ago",
    icon: <Home size={20} />,
  },
  {
    id: 3,
    type: "client",
    description: "David Martinez scheduled a viewing",
    time: "Yesterday at 4:30 PM",
    icon: <User size={20} />,
  },
  {
    id: 4,
    type: "task",
    description: "Completed property inspection",
    time: "Yesterday at 2:15 PM",
    icon: <CheckCircle size={20} />,
  },
  {
    id: 5,
    type: "appointment",
    description: "Meeting with Robert Wilson",
    time: "Tomorrow at 10:00 AM",
    icon: <Calendar size={20} />,
  },
];

export function RecentActivity() {
  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <CardHeader
        title={
          <Typography variant="h6" component="div" sx={{ fontWeight: "medium" }}>
            Recent Activity
          </Typography>
        }
        sx={{ pb: 1 }}
      />
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {activities.map((activity) => (
            <Box key={activity.id} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Avatar sx={{ bgcolor: "grey.300", width: 36, height: 36 }}>
                {activity.icon}
              </Avatar>
              <Box>
                <Typography variant="body2">{activity.description}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {activity.time}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
