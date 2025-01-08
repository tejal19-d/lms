import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const sendMessage = () => {
    if (userInput.trim()) {
      setMessages([...messages, { text: userInput, sender: "user" }]);
      setUserInput("");

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Thank you for your message! We will respond shortly.", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div style={styles.chatbotContainer}>
      <div
        style={styles.chatbotIcon}
        onClick={toggleChat}
      >
        {/* Updated icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30"
          height="30"
          style={styles.icon}
        >
          <path
            fill="none"
            d="M0 0h24v24H0z"
          />
          <path
            d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6v-8h12v8zm0-10H6V5h12v8z"
            fill="#fff"
          />
        </svg>
      </div>

      {isOpen && (
        <div style={styles.chatbotWindow}>
          <div style={styles.chatbotMessages}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  alignSelf: message.sender === "bot" ? "flex-start" : "flex-end",
                  backgroundColor: message.sender === "bot" ? "#f1f1f1" : "#4CAF50",
                  color: message.sender === "bot" ? "#333" : "#fff",
                }}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div style={styles.chatbotInput}>
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              style={styles.input}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage} style={styles.sendButton}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  chatbotContainer: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
  },
  chatbotIcon: {
    cursor: "pointer",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #4CAF50, #81C784)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform: "scale(1.1)",
  },
  icon: {
    width: "35px",
    height: "35px",
  },
  chatbotWindow: {
    position: "absolute",
    bottom: "70px",
    right: "0",
    width: "300px",
    height: "400px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
  },
  chatbotMessages: {
    flex: "1",
    padding: "10px",
    overflowY: "auto",
  },
  message: {
    padding: "8px 12px",
    borderRadius: "8px",
    margin: "5px 0",
    maxWidth: "80%",
  },
  chatbotInput: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ddd",
  },
  input: {
    flex: "1",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  sendButton: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    marginLeft: "10px",
    cursor: "pointer",
  },
};

export default Chatbot;
