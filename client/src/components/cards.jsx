import React from "react";
import { Card, CardContent, CardHeader, Typography, Box } from "@mui/material";
import { ArrowUp, ArrowDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export function StatsCards() {
  const data = [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 3000 },
    { name: "Mar", value: 2000 },
    { name: "Apr", value: 2780 },
    { name: "May", value: 1890 },
  ];

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "20.1%",
      changeType: "up",
      icon: <ArrowUp size={16} color="green" />,
    },
    {
      title: "Active Listings",
      value: "24",
      change: "8.2%",
      changeType: "up",
      icon: <ArrowUp size={16} color="green" />,
    },
    {
      title: "New Clients",
      value: "12",
      change: "12.5%",
      changeType: "up",
      icon: <ArrowUp size={16} color="green" />,
    },
    {
      title: "Pending Sales",
      value: "$12,234.00",
      change: "4.3%",
      changeType: "down",
      icon: <ArrowDown size={16} color="red" />,
    },
  ];

  return (
    <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={2}>
      {stats.map((stat, index) => (
        <Card key={index} variant="outlined">
          <CardHeader
            title={<Typography variant="subtitle1">{stat.title}</Typography>}
            action={stat.icon}
            style={{ paddingBottom: 0 }}
          />
          <CardContent>
            <Typography variant="h5" fontWeight="bold">
              {stat.value}
            </Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <Typography
                variant="body2"
                style={{
                  color: stat.changeType === "up" ? "green" : "red",
                  display: "flex",
                  alignItems: "center",
                  marginRight: 8,
                }}
              >
                {stat.icon}
                {stat.change}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                from last month
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
      <Card variant="outlined" style={{ gridColumn: "span 2" }}>
        <CardHeader
          title={<Typography variant="subtitle1">Sales Overview</Typography>}
        />
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Box>
  );
}
