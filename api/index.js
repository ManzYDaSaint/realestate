// index.js
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

// Send Message
const sendMessage = async (to, message) => {
  try {
    const response = await axios({
      method: "POST",
      url: process.env.WHATSAPP_API_URL,
      data: {
        messaging_product: "whatsapp",
        to: to,
        text: {
          body: message,
        },
      },
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    console.log("✅ Message sent successfully:", response.data);
    console.log("Response Status:", response.status);
    console.log("Response Headers:", response.headers);
  } catch (error) {
    console.error("❌ Failed to send message:", error.response?.data || error.message);
    console.log("Error details:", error); // Additional error details
  }
};


// Reply Message
const replyMessage = async (to, message, messageId) => {
  try {
    const response = await axios({
      method: "POST",
      url: process.env.WHATSAPP_API_URL,
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        messaging_product: "whatsapp",
        to: to,
        type: "text",
        text: {
          body: message,
        },
        context: {
          message_id: messageId, 
        },
      }),
    });

    console.log("✅ Message sent successfully:", response.data);
    console.log("Response Status:", response.status);
    console.log("Response Headers:", response.headers);
  } catch (error) {
    console.error("❌ Failed to send message:", error.response?.data || error.message);
    console.log("Error details:", error); // Additional error details
  }
};

// sendMessage('265993533315', 'Hello from WhatsApp API!'); // Replace with a valid phone number

// Webhook GET route for incoming messages
app.get("/", (req, res) => {
  res.send("Hello from WhatsApp API!");
});

// Webhook POST route for incoming messages
app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const challenge = req.query["hub.challenge"];
  const token = req.query["hub.verify_token"];

  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  if (mode && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.post("/webhook", (req, res) => {
  const { entry } = req.body;

  if(!entry || entry.length === 0) {
    return res.status(400).send('Invalid Request');
  }

  const changes = entry[0].changes

  if(!changes || changes.length === 0) {
    return res.status(400).send('Invalid request');
  }

  const statuses = changes[0].value.statuses ? changes[0].value.statuses[0] : null;
  const messages = changes[0].value.messages ? changes[0].value.messages[0] : null;

  if(statuses) {
    // Handle message status
    console.log(`
      MESSAGE STATUS UPDATE: 
      ID: ${statuses.id}
      STATUS: ${statuses.status}  
    `)
  }

  if(messages) {
    // Handle received messages
    if(messages.type === 'text') {
      if(messages.text.body.toLowerCase() === 'hello') {
        replyMessage(messages.from, "Hello, How are you?", messages.id);
      }
    }

    console.log(JSON.stringify(messages, null, 2))
  }

  res.status(200).send('Webhook processed');
})

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
