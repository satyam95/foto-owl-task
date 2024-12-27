export interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastSeen: string;
  status: "online" | "offline";
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: number;
  status: "sent" | "delivered" | "read";
}

export interface ChatState {
  contacts: Contact[];
  messages: Message[];
  selectedContact: Contact | null;
  currentUser: {
    id: string;
    name: string;
    avatar: string;
  };
}
