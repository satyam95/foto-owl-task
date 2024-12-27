import { mockContacts, mockMessages } from "./mockData";

class MockDB {
  private subscribers: Record<string, Function[]> = {
    messages: [],
    contacts: [],
  };

  subscribe(collection: string, callback: Function) {
    this.subscribers[collection] = this.subscribers[collection] || [];
    this.subscribers[collection].push(callback);

    if (collection === "messages") callback(mockMessages);
    if (collection === "contacts") callback(mockContacts);

    return () => {
      this.subscribers[collection] = this.subscribers[collection].filter(
        (cb) => cb !== callback
      );
    };
  }

  async insert(collection: string, data: any) {
    if (collection === "messages") {
      mockMessages.push(data);
      this.notify("messages", mockMessages);
    }
  }

  private notify(collection: string, data: any) {
    this.subscribers[collection].forEach((calkback) => calkback(data));
  }
}

export const db = new MockDB();
export const getDb = () => db;
