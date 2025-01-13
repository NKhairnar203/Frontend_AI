import { createContext, useState } from "react";

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [aiMessage, setAiMessage] = useState([
    
  ]);
  // console.log(aiMessage);
  return (
    <ChatContext.Provider value={{ setAiMessage, aiMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
