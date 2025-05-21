import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { Phone, Video, User, MoreVertical, Send, MessageCirclePlusIcon } from "lucide-react";
import FormInput from "../components/formInput";

const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg",
    lastMessage:
      "I'm interested in scheduling a viewing for the downtown apartment",
    time: "10:32 AM",
    unread: 2,
  },
  {
    id: 2,
    name: "Michael Brown",
    avatar: "/placeholder.svg",
    lastMessage: "What's the asking price for the Ocean Ave property?",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: 3,
    name: "Emily Davis",
    avatar: "/placeholder.svg",
    lastMessage: "Thanks for the information. I'll get back to you soon.",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: 4,
    name: "Robert Wilson",
    avatar: "/placeholder.svg",
    lastMessage: "Is the property still available?",
    time: "Monday",
    unread: 0,
  },
  {
    id: 5,
    name: "Jennifer Lee",
    avatar: "/placeholder.svg",
    lastMessage: "Can we negotiate on the price?",
    time: "Sunday",
    unread: 0,
  },
  {
    id: 6,
    name: "Jennifer Lee",
    avatar: "/placeholder.svg",
    lastMessage: "Can we negotiate on the price?",
    time: "Sunday",
    unread: 0,
  },
  {
    id: 7,
    name: "Jennifer Lee",
    avatar: "/placeholder.svg",
    lastMessage: "Can we negotiate on the price?",
    time: "Sunday",
    unread: 0,
  },
  {
    id: 8,
    name: "Jennifer Lee",
    avatar: "/placeholder.svg",
    lastMessage: "Can we negotiate on the price?",
    time: "Sunday",
    unread: 0,
  },
  {
    id: 9,
    name: "Jennifer Lee",
    avatar: "/placeholder.svg",
    lastMessage: "Can we negotiate on the price?",
    time: "Sunday",
    unread: 0,
  },
  {
    id: 10,
    name: "Jennifer Lee",
    avatar: "/placeholder.svg",
    lastMessage: "Can we negotiate on the price?",
    time: "Sunday",
    unread: 0,
  },
  {
    id: 11,
    name: "Jennifer Lee",
    avatar: "/placeholder.svg",
    lastMessage: "Can we negotiate on the price?",
    time: "Sunday",
    unread: 0,
  },
  {
    id: 12,
    name: "Jennifer Lee",
    avatar: "/placeholder.svg",
    lastMessage: "Can we negotiate on the price?",
    time: "Sunday",
    unread: 0,
  },
  {
    id: 13,
    name: "Jennifer Lee",
    avatar: "/placeholder.svg",
    lastMessage: "Can we negotiate on the price?",
    time: "Sunday",
    unread: 1,
  },
];

const messageHistory = [
  {
    id: 1,
    sender: "client",
    content:
      "Hi there! I'm interested in the Modern Apartment in Downtown that I saw on your website.",
    time: "10:24 AM",
  },
  {
    id: 2,
    sender: "agent",
    content:
      "Hello Sarah! Thank you for your interest. The Modern Apartment in Downtown is still available for viewing.",
    time: "10:26 AM",
  },
  {
    id: 3,
    sender: "client",
    content:
      "Great! I'd like to schedule a viewing. Is it possible to see it this weekend?",
    time: "10:28 AM",
  },
  {
    id: 4,
    sender: "agent",
    content:
      "I have availability on Saturday at 2 PM or Sunday at 11 AM. Which would work better for you?",
    time: "10:30 AM",
  },
  {
    id: 5,
    sender: "client",
    content:
      "I'm interested in scheduling a viewing for the downtown apartment. Saturday at 2 PM works for me!",
    time: "10:32 AM",
  },
];

export function Messages() {
  const [activeConversation, setActiveConversation] = useState(
    conversations[0]
  );
  const [messageText, setMessageText] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log("Sending message:", messageText);
      setMessageText("");
    }
  };

  const filteredConversations = conversations
    .filter((p) =>
      filter === "all" ? true : filter === "unread" ? p.unread > 0 : true
    )
    .filter((p) =>
      [p.name].some((val) => val.toLowerCase().includes(search.toLowerCase()))
    );

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold">Messages</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Panel - Conversations */}
        <div className="col-span-1 flex flex-col h-screen">
          <FormInput
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search by name"
          />
          <div className="flex flex-wrap gap-3 items-center justify-between px-4 py-2 bg-white">
          <div className="flex flex-wrap gap-2 items-center">
            {["all", "unread"].map((key) => (
              <button
                onClick={() => setFilter(key)}
                className={`${
                  filter === key
                    ? "bg-blue-500 text-white hover:bg-blue-600 transition"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } rounded-xl px-4 py-2 text-sm font-semibold`}
                key={key}
              >
                {key === "all" ? "All" : key === "unread" ? "Unread" : "Read"}
              </button>
            ))}
          </div>
          <MessageCirclePlusIcon size={25} color="green" />
          </div>
          <div className="pt-0 flex-1 overflow-y-auto">
            <List>
              {filteredConversations.map((conversation) => (
                <>
                <ListItem
                  key={conversation.id}
                  button
                  selected={activeConversation.id === conversation.id}
                  onClick={() => setActiveConversation(conversation)}
                  className="hover:bg-gray-100 rounded-md mb-1"
                >
                  <ListItemAvatar>
                    <Avatar src={conversation.avatar}>
                      {conversation.name.charAt(0)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        fontWeight={
                          activeConversation.id === conversation.id
                            ? "bold"
                            : "normal"
                        }
                      >
                        <p>{conversation.name}</p>
                      </Typography>
                    }
                    secondary={<p className="truncate w-[270px] text-sm">{conversation.lastMessage}</p>}
                  />
                  <div className="flex flex-col items-end">
                    <Typography variant="caption" color="textSecondary">
                      <p>{conversation.time}</p>
                    </Typography>
                    {conversation.unread > 0 && (
                      <div className="bg-blue-600 text-white rounded-full px-2 text-xs mt-1">
                        <p>{conversation.unread}</p>
                      </div>
                    )}
                  </div>
                </ListItem>
                  <Divider />
                  </>
              ))}
            </List>
          </div>
        </div>

        {/* Right Panel - Chat Area */}
        <Card className="col-span-2 flex flex-col">
          <CardHeader
            avatar={
              <Avatar src={activeConversation.avatar}>
                {activeConversation.name.charAt(0)}
              </Avatar>
            }
            title={
              <Typography variant="subtitle1" fontWeight="bold">
                <p>{activeConversation.name}</p>
              </Typography>
            }
            subheader={
              <Typography variant="caption">
                <p>Last active: 5 minutes ago</p>
              </Typography>
            }
            action={
              <div className="flex gap-2">
                <IconButton>
                  <Phone />
                </IconButton>
                <IconButton>
                  <Video />
                </IconButton>
                <IconButton>
                  <User />
                </IconButton>
                <IconButton>
                  <MoreVertical />
                </IconButton>
              </div>
            }
          />
          <Divider />
          <CardContent className="flex-1 overflow-y-auto space-y-4">
            {messageHistory.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "agent" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "client" && (
                  <Avatar src={activeConversation.avatar} className="mr-2">
                    {activeConversation.name.charAt(0)}
                  </Avatar>
                )}
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 text-sm shadow-sm ${
                    message.sender === "agent"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-black"
                  }`}
                >
                  <Typography variant="body2">
                    <p>{message.content}</p>
                  </Typography>
                  <Typography
                    variant="caption"
                    className="block text-right text-xs mt-1"
                  >
                    <p>{message.time}</p>
                  </Typography>
                </div>
              </div>
            ))}
          </CardContent>
          <Divider />
          <CardActions className="p-4">
            <TextField
              fullWidth
              placeholder="Type your message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
              size="small"
            />
            <IconButton onClick={handleSendMessage} color="primary">
              <Send />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
