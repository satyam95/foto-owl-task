import { format } from "date-fns";
import { Message as MessageType } from "../types";
import { Check, CheckCheck } from "lucide-react";

interface MessageProps {
  message: MessageType;
  isOwn: boolean;
}

const Message: React.FC<MessageProps> = ({ message, isOwn }) => {
  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          isOwn ? "bg-[#dcf8c6]" : "bg-white"
        }`}
      >
        <p className="text-gray-800">{message.content}</p>
        <div className="flex items-center justify-end mt-1 space-x-1">
          <span className="text-xs text-gray-500">
            {format(message.timestamp, "HH:mm")}
          </span>
          {isOwn && (
            <span>
              {message.status === "read" ? (
                <CheckCheck size={16} className="text-blue-500" />
              ) : (
                <Check size={16} className="text-gray-500" />
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
