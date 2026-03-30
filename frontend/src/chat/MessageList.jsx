import { useRef, useEffect } from "react";
import Message from "./Message.jsx";

export default function MessageList({ messages = [], isStreaming, isWaitingResponse }) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto custom-scrollbar p-8 pb-32"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        {messages.map((msg, index) => {
          const isLastMessage = index === messages.length - 1;
          const streamingThisMessage =
            isStreaming && isLastMessage && msg.role === "assistant";

          return (
            <Message
              key={index}
              {...msg}
              isStreaming={streamingThisMessage}
            />
          );
        })}
        {/* 👇 Loader mientras espera */}
        {isWaitingResponse && (
          <Message role="assistant" content="..." isThinking />
        )}
      </div>
    </div>
  );
}