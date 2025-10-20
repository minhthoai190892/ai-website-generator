import React, { useState } from "react";
import { ChatType } from "../utils/ChatType";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
interface ChatSessionProps {
  messages: ChatType[];
  sendMessage: (input: string) => void;
}
export default function ChatSession({
  messages,
  sendMessage,
}: ChatSessionProps) {
  const [input, setInput] = useState<string | undefined>();
  const handleSend = () => {
    if (!input?.trim()) {
      return;
    }
    sendMessage(input);
    setInput("");
  };
  return (
    <div className="w-72 shadow h-[88vh] p-4 flex flex-col">
      {/* Message section */}
      <div className="flex flex-1 overflow-y-auto p-4 space-y-3 flex-col">
        {messages.length === 0 ? (
          <p className="text-gray-400 text-center">No Message Yet</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-gray-100 text-black"
                    : "bg-gray-300 text-black"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))
        )}
      </div>
      {/* Footer Input */}
      <div className="p-3 border-t flex items-center gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name=""
          className="flex-1 resize-none border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 "
          id=""
          placeholder="Describe your website design idea"
        ></textarea>
        <Button onClick={() => handleSend()} className="cursor-pointer">
          <ArrowUp />
        </Button>
      </div>
    </div>
  );
}
