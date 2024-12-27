import { openDB } from "idb";
import { Contact, Message } from "../types";

const DB_NAME = "whatsapp-clone";
const DB_VERSION = 1;

export const initializeDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("messages")) {
        db.createObjectStore("messages");
      }
      if (!db.objectStoreNames.contains("contacts")) {
        db.createObjectStore("contacts");
      }
    },
  });
};

export const loadCachedData = async () => {
  const db = await initializeDB();
  const messages = ((await db.get("messages", "all")) as Message[]) || [];
  const contacts = ((await db.get("contacts", "all")) as Contact[]) || [];
  return { messages, contacts };
};

export const saveToCache = async (
  store: "messages" | "contacts",
  data: any
) => {
  const db = await initializeDB();
  await db.put(store, data, "all");
};
