import React, { useState, useEffect } from "react";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import Messages from "./Messages";
import Input from "./Input";
import API from "./ChatbotAPI";
import "../../App.css";
import { Close } from "@material-ui/icons";

const ChatbotOpen = ({setIsOpen}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () => await API.GetChatbotResponse("hi")}
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async text => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponse(text)}
      />
    );
    setMessages(newMessages);
  };

  return (
    <div className="chatbot">
      <div className="header">&nbsp;Masoud's Chatbot</div>
      <Messages messages={messages} />
      <Input onSend={send} />
      <div className="absolute text-white top-4 right-4 cursor-pointer" onClick={() => setIsOpen(false)}>
        <Close />
      </div>
    </div>
  );
}

export default ChatbotOpen;