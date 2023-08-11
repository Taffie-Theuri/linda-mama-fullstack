import React, { useState, useEffect } from 'react';
import './DietBlog.js';
import './DietBlog.css'



const ChatForum = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  function fetchMessages() {
    fetch(`/messages/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => setMessages(data))
      // .catch((error) => {
      //   console.log('Error fetching messages:', error);
      // });
  }

  function handleCreateMessage() {
    const message = {
      content: newMessage,
      sender: 'User',
      timestamp: new Date().toLocaleString(),
    };
    fetch(`/messages/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((r) => r.json())
      .then((response) => {
        setMessages([...messages, response]);
        setNewMessage('');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  }
  return (
    <div className="chat-container">

      <h2 className="chat-title">Chat Forum</h2>
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className="chat-message">
            <p className="message-sender">{message.sender}</p>
            <p className="message-content">{message.content}</p>
            <p className="message-timestamp">{message.timestamp}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <textarea
          rows="3"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={handleCreateMessage}>Send</button>
      </div>
    </div>
  );
};
export default ChatForum;