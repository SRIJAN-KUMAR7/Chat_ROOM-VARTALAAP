import React from "react";

const Chat = ({ user, message, setMessage, messages, handleSendMessage }) => {
  return (
    <div className="card w-100 bg-dark text-white border-light">
      <div className="row vh-95">
        <div className="col-12 col-lg-12 col-xl-12 d-flex flex-column">
          <div className="py-2 px-4 w-100 border-bottom border-light bg-dark">
            <div className="d-flex align-items-center py-1">
              <div className="position-relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBC3iJ_22NYdh9fswNxS3twlJ3O0YyBtOUWQ&s"
                  className="rounded-circle mx-2"
                  alt={user}
                  width="40"
                  height="40"
                />
              </div>
              <div className="flex-grow-1">
                <strong>Logged in as {user}</strong>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow-1 px-3 overflow-auto">
            {messages.map((msg, index) => (
              <div key={index} className="py-1">
                <strong>{msg.user}:</strong> {msg.text}
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="align-items-end py-3 px-4 border-top">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message..."
                value={message}
                onChange={({ currentTarget: input }) => setMessage(input.value)}
              />
              <button className="btn btn-info" onClick={handleSendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
