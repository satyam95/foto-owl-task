import { Check, CheckCheck, MessageCircle, MoreVertical, Search } from "lucide-react";
import { useChat } from "../context/ChatContext";
import { format } from "date-fns";
import { Contact } from "../types";
import { useState } from "react";

const ContactList = () => {
  const { state, dispatch } = useChat();
  const [searchQuery, setSearchQuery] = useState('');

  const selectContact = (contact: Contact) => {
    dispatch({ type: "SELECT_CONTACT", payload: contact });
  };

  const getLastMessage = (contactId: string) => {
    return state.messages
      .filter(
        (m) =>
          (m.senderId === contactId && m.receiverId === state.currentUser.id) ||
          (m.senderId === state.currentUser.id && m.receiverId === contactId)
      )
      .sort((a, b) => b.timestamp - a.timestamp)[0];
  };

  const filteredContacts = state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="w-full h-full bg-white border-r">
      <div className="sticky top-0 z-10">
        <div className="p-2 bg-[#f0f2f5] flex items-center justify-between">
          <img
            src={state.currentUser.avatar}
            alt={state.currentUser.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <MessageCircle size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <MoreVertical size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
        <div className="p-2 bg-white">
          <div className="bg-[#f0f2f5] rounded-lg flex items-center px-4 py-2">
            <Search size={20} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search or start new chat"
              className="bg-transparent flex-1 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-105px)]">
        {filteredContacts.map((contact) => {
          const lastMessage = getLastMessage(contact.id);
          const isSelected = state.selectedContact?.id === contact.id;

          return (
            <div
              key={contact.id}
              className={`flex items-center p-3 cursor-pointer hover:bg-[#f5f6f6] ${
                isSelected ? 'bg-[#f0f2f5]' : ''
              }`}
              onClick={() => selectContact(contact)}
            >
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div className="flex-1 min-w-0 border-b border-gray-200 pb-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold truncate">{contact.name}</h3>
                  {lastMessage && (
                    <span className="text-xs text-gray-500">
                      {format(lastMessage.timestamp, 'HH:mm')}
                    </span>
                  )}
                </div>
                {lastMessage && (
                  <div className="flex items-center text-sm text-gray-500">
                    {lastMessage.senderId === state.currentUser.id && (
                      <span className="mr-1">
                        {lastMessage.status === 'read' ? (
                          <CheckCheck size={16} className="text-blue-500" />
                        ) : (
                          <Check size={16} />
                        )}
                      </span>
                    )}
                    <p className="truncate">{lastMessage.content}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactList;
