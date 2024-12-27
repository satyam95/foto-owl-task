import { ArrowLeft, MoreVertical, Phone, Search, Video } from "lucide-react";
import { useChat } from "../context/ChatContext";
import MessageInput from "./MessageInput";
import React from "react";
import Message from "./Message";
import WelcomeScreen from "./WelcomeScreen";

const ChatWindow = () => {
  const { state } = useChat();
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [state.messages]);

  if (!state.selectedContact) {
    return <WelcomeScreen />;
  }

  const chatMessages = state.messages.filter(
    (message) =>
      (message.senderId === state.selectedContact?.id &&
        message.receiverId === state.currentUser.id) ||
      (message.senderId === state.currentUser.id &&
        message.receiverId === state.selectedContact?.id)
  );

  return (
    <div className="flex-1 flex flex-col h-full bg-[#efeae2]">
      <div className="p-2 bg-[#f0f2f5] border-l border-gray-300 flex items-center justify-between">
        <div className="flex items-center flex-1">
          <button className="md:hidden p-2 hover:bg-gray-200 rounded-full mr-2">
            <ArrowLeft size={20} />
          </button>
          <img
            src={state.selectedContact.avatar}
            alt={state.selectedContact.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h2 className="font-semibold">{state.selectedContact.name}</h2>
            <p className="text-sm text-gray-500">
              {state.selectedContact.status}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <Search size={20} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <Phone size={20} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <Video size={20} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <MoreVertical size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-[#efeae2] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]">
        <div className="space-y-1">
          {chatMessages.map((message) => (
            <Message
              key={message.id}
              message={message}
              isOwn={message.senderId === state.currentUser.id}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatWindow;
