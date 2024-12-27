import { useEffect, useState } from "react";
import { Contact } from "../types";
import { getDb } from "../config/instantDb";
import { loadCachedData, saveToCache } from "../utils/storage";

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const db = getDb();

  useEffect(() => {
    const loadContacts = async () => {
      const { contacts: cachedContacts } = await loadCachedData();
      if (cachedContacts) {
        setContacts(cachedContacts);
      }

      if (db) {
        const unsubscribe = db.subscribe("contacts", (data: Contact[]) => {
          setContacts(data);
          saveToCache("contacts", data);
        });
        return () => unsubscribe();
      }
    };

    loadContacts();
  }, [db]);

  return contacts;
};
