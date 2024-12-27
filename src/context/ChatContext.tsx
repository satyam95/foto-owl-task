import React, { createContext, useContext, useReducer } from "react";
import { ChatState, Message } from "../types";
import { chatReducer } from "../reducers/chatReducer";
import { useContacts } from "../hooks/useContacts";
import { useMessages } from "../hooks/useMessages";

const initialState: ChatState = {
  contacts: [],
  messages: [],
  selectedContact: null,
  currentUser: {
    id: "user1",
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
};

const ChatContext = createContext<{
  state: ChatState;
  dispatch: React.Dispatch<any>;
  sendMessage: (content: string) => void;
} | null>(null);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const contacts = useContacts();
  const { messages, sendMessage: sendMessageToDb } = useMessages();

  React.useEffect(() => {
    dispatch({ type: "SET_CONTACTS", payload: contacts });
  }, [contacts]);

  React.useEffect(() => {
    dispatch({ type: "SET_MESSAGES", payload: messages });
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!state.selectedContact) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: state.currentUser.id,
      receiverId: state.selectedContact.id,
      content,
      timestamp: Date.now(),
      status: "sent",
    };

    dispatch({ type: "ADD_MESSAGE", payload: newMessage });
    try {
      await sendMessageToDb(newMessage);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <ChatContext.Provider value={{ state, dispatch, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
