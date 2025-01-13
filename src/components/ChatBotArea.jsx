import React, { useState } from "react";

const ChatBotArea = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setInput("");
    }
  };

  return (
    <section id="chat" className="bg-white py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          Chat with AI Bot
        </h2>
        <div className="bg-gray-100 rounded-lg p-6 shadow-md">
          <div className="h-64 overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${
                  msg.user ? "bg-indigo-100 self-end text-right" : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="bg-indigo-600 text-white px-6 py-2 rounded-r-lg hover:bg-indigo-500"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBotArea;
