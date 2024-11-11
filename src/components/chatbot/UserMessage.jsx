import React from "react";

const UserMessage = ({ text }) => {
  return (
    <div className="message-container">
      <div className="user-message">{text}</div>
    </div>
  );
}

export default UserMessage;