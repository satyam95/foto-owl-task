import type { Contact, Message } from "../types";

export const mockContacts: Contact[] = [
  {
    id: "contact1",
    name: "Alice Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    lastSeen: "2024-02-20T10:30:00Z",
    status: "online",
  },
  {
    id: "contact2",
    name: "Bob Smith",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
    lastSeen: "2024-02-20T09:45:00Z",
    status: "offline",
  },
  {
    id: "contact3",
    name: "Emma Wilson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    lastSeen: "2024-02-20T11:15:00Z",
    status: "online",
  },
  {
    id: "contact4",
    name: "David Brown",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop",
    lastSeen: "2024-02-20T08:30:00Z",
    status: "offline",
  },
  {
    id: "contact5",
    name: "Sarah Davis",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    lastSeen: "2024-02-20T12:00:00Z",
    status: "online",
  },
  {
    id: "contact6",
    name: "Michael Lee",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    lastSeen: "2024-02-20T10:00:00Z",
    status: "online",
  },
  {
    id: "contact7",
    name: "Jennifer Taylor",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    lastSeen: "2024-02-20T09:30:00Z",
    status: "offline",
  },
  {
    id: "contact8",
    name: "James Wilson",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    lastSeen: "2024-02-20T11:45:00Z",
    status: "online",
  },
  {
    id: "contact9",
    name: "Lisa Anderson",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    lastSeen: "2024-02-20T08:45:00Z",
    status: "offline",
  },
  {
    id: "contact10",
    name: "Robert Martinez",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    lastSeen: "2024-02-20T12:15:00Z",
    status: "online",
  },
];

export const mockMessages: Message[] = [
  {
    id: "m1",
    senderId: "user1",
    receiverId: "contact1",
    content: "Hey Alice! How are you?",
    timestamp: Date.now() - 3600000,
    status: "read",
  },
  {
    id: "m2",
    senderId: "contact1",
    receiverId: "user1",
    content: "Hi! I'm good, thanks! How about you?",
    timestamp: Date.now() - 3500000,
    status: "read",
  },
  {
    id: "m3",
    senderId: "user1",
    receiverId: "contact2",
    content: "Hi Bob, did you check the project files?",
    timestamp: Date.now() - 7200000,
    status: "read",
  },
  {
    id: "m4",
    senderId: "contact2",
    receiverId: "user1",
    content: "Yes, I'll review them today!",
    timestamp: Date.now() - 7100000,
    status: "read",
  },
];
