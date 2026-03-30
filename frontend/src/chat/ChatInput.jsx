import { useState } from "react"; 
import  SendIcon from "../icons/SendIcon.jsx"; 

export default function ChatInput({ onSend }) {
  const [message, setMessage] = useState(""); 

  const handleSubmit = () => {
      if (!message.trim()) return; 
      
      onSend(message.trim()); 
      setMessage(""); 
  }; 

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftkey) {
      e.preventDefault();
      handleSubmit();
    } 
  }; 
  return (
    <div className="absolute bottom-0 left-0 w-full p-8">
      <div className="max-w-3xl mx-auto">
        <div className="relative glass-morphism bg-white/5 rounded-2xl p-2 shadow-2xl">
          <div className="flex items-end gap-2">
            <textarea
              className="flex-1 bg-transparent border-none focus:ring-0 text-slate-200 p-3 resize-none custom-scrollbar max-h-40"
              placeholder="Message Assistant..."
              rows="1"
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button
              onClick={handleSubmit}
              className="p-3 rounded-xl bg-primary hover:bg-primary/80 transition"
            >
              <SendIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}