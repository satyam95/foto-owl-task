import { useState } from "react";
import { useChat } from "../context/ChatContext";
import { Mic, Paperclip, Send, Smile } from "lucide-react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="p-4 bg-gray-50 border-t">
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <button type="button" className="p-2 hover:bg-gray-200 rounded-full">
          <Smile size={24} className="text-gray-600" />
        </button>
        <button type="button" className="p-2 hover:bg-gray-200 rounded-full">
          <Paperclip size={24} className="text-gray-600" />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
        />
        {message ? (
          <button type="submit" className="p-2 hover:bg-gray-200 rounded-full">
            <Send size={24} className="text-gray-600" />
          </button>
        ) : (
          <button type="button" className="p-2 hover:bg-gray-200 rounded-full">
            <Mic size={24} className="text-gray-600" />
          </button>
        )}
      </form>
    </div>
  );
};

export default MessageInput;
