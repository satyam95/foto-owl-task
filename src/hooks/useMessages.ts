import { useEffect, useState } from "react";
import { Message } from "../types";
import { getDb } from "../config/instantDb";
import { loadCachedData, saveToCache } from "../utils/storage";

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const db = getDb();

  useEffect(() => {
    const loadMessages = async () => {
      const { messages: cachedMessages } = await loadCachedData();
      if (cachedMessages) {
        setMessages(cachedMessages);
      }

      if (db) {
        const unsubscribe = db.subscribe("messages", (data: Message[]) => {
          setMessages(data);
          saveToCache("messages", data);
        });
        return () => unsubscribe();
      }
    };

    loadMessages();
  }, [db]);

  const sendMessage = async (message: Message) => {
    if (db) {
      await db.insert("messages", message);
    }
  };
  return { messages, sendMessage };
};
