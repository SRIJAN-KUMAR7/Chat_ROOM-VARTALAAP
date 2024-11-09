import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import NewUser from "./components/NewUser";
import Chat from "./components/Chat";

const socket = io("http://localhost:5000"); 

const Main = () => {
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); 
  useEffect(() => {
   
    socket.on("user-connected", (username) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: "System", text: `${username} has joined the chat.` },
      ]);
    });

    socket.on("message", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("user-connected");
      socket.off("message");
    };
  }, []);

  function handleChange({ currentTarget: input }) {
    setNewUser(input.value);
  }

  function logNewUser() {
    setUser(newUser);
    socket.emit("newUser", newUser); 
  }

  function handleSendMessage() {
    const newMessage = { user, text: message };
    socket.emit("sendMessage", newMessage); 
    setMessages([...messages, newMessage]); 
    setMessage(""); 
  }

  return (
    <main className="content bg-dark text-white min-vh-100">
      <div className="container mt-3">
        {user ? (
          <Chat
            user={user}
            message={message}
            setMessage={setMessage}
            messages={messages}
            handleSendMessage={handleSendMessage}
          />
        ) : (
          <NewUser
            newUser={newUser}
            handleChange={handleChange}
            logNewUser={logNewUser}
          />
        )}
      </div>
    </main>
  );
};

export default Main;
