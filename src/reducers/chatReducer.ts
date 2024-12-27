import { ChatState, Contact, Message } from "../types";

type ChatAction =
  | { type: "SET_MESSAGES"; payload: Message[] }
  | { type: "SET_CONTACTS"; payload: Contact[] }
  | { type: "ADD_MESSAGE"; payload: Message }
  | { type: "SELECT_CONTACT"; payload: Contact };

export const chatReducer = (
  state: ChatState,
  action: ChatAction
): ChatState => {
  switch (action.type) {
    case "SET_MESSAGES":
      return {
        ...state,
        messages: action.payload,
      };
    case "SET_CONTACTS":
      return {
        ...state,
        contacts: action.payload,
      };
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: state.messages.some((msg) => msg.id === action.payload.id)
      ? state.messages
      : [...state.messages, action.payload],
      };
    case "SELECT_CONTACT":
      return {
        ...state,
        selectedContact: action.payload,
      };
    default:
      return state;
  }
};
