import { MessageSquare } from "lucide-react";

const WelcomeScreen = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-[#f0f2f5] min-h-screen">
      <div className="text-center max-w-md px-4">
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#25D366] flex items-center justify-center">
            <MessageSquare size={32} className="text-white" />
          </div>
          <h1 className="text-[#41525d] text-3xl font-light mb-4">
            WhatsApp Web
          </h1>
        </div>

        <p className="text-[#41525d] text-xl font-light mb-3">
          Select a chat to start messaging
        </p>
        <p className="text-[#667781] text-sm">
          Send and receive messages without keeping your phone online.
        </p>

        <div className="mt-8 border-t border-[#e9edef] pt-8">
          <p className="text-[#8696a0] text-sm">
            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
