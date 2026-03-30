import { useState, useEffect } from "react";
import { Streamdown } from "streamdown";
import Header from "../layout/Header.jsx"
import MessageList from "./MessageList.jsx";
import ChatInput from "./ChatInput.jsx";

export default function ChatContainer() {
    const API_URL = import.meta.env.VITE_API_URL || "http:localhost:3000";

    const [messages, setMessages] = useState([]);
    const [isWaitingResponse, setIsWaitingResponse] = useState(false);
    const [pendingMessage, setPendingMessage] = useState(null);
    const [isStreaming, setIsStreaming] = useState(false);
    
    const handleSend = (text) => {
        const newMessage = {
          role: "user",
          content: text,
        };  

        setMessages((prev) => [...prev, newMessage]);
        setPendingMessage(newMessage);

        setIsWaitingResponse(true); 
        setIsStreaming(true);
    }

    useEffect(() => {
        if (!pendingMessage) return; 
        
        const fetchResponse = async () => {
          try {
            const response = await fetch(`${API_URL}/api/chat`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                messages: [...messages, pendingMessage], 
              })
            });
            
            if (!response.ok) {
              throw new Error("Error en la respuesta del servidor"); 
            }
            
            const render = response.body.getReader(); 
            const decoder = new TextDecoder("utf-8");
            
            let assistantMessage = { role: "assistant", content: "" };
            
            setIsWaitingResponse(false); 

            setMessages((prev) => [
              ...prev, 
              assistantMessage
            ]);

            while (true) {
              const { done, value } = await render.read(); 

              if (done) {
                setIsStreaming(false);
                break;
              } 
              
              const chunk = decoder.decode(value, { stream: true });  
    
              assistantMessage.content += chunk; 

              setMessages((prev) => {
                const updated = [...prev]; 
                updated[updated.length - 1] = {
                  ...assistantMessage,
                }; 
    
                return updated; 
              }); 
            }
    
          } catch (err) {
            console.error("Error:", err);
          } finally {
            setIsStreaming(false); 
          }
        }; 
    
        fetchResponse(); 
    
    }, [pendingMessage]);

    return (
        <main className="flex-1 flex flex-col relative">
            <Header />
            <MessageList 
              messages={messages} 
              isStreaming={isStreaming}
              isWaitingResponse={isWaitingResponse}  
            />
            <ChatInput onSend={handleSend} />
        </main>
    );
}