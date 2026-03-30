import { Streamdown } from "streamdown"; 
import { code } from "@streamdown/code";
import { mermaid } from "@streamdown/mermaid";
import { math } from "@streamdown/math";
import { cjk } from "@streamdown/cjk";
// import { Dots } from "@uiball/loaders"; 
import Dots from "./Dots.jsx"; 

export default function Message({ role, content, isStreaming, isThinking }) {
  const isUser = role === "user";
  // const isDark = document.documentElement.classList.contains('dark');
  if (isThinking) {
    return (
      // <div className="text-slate-400 italic animate-pulse">
      //   <Dots />
      // </div>
      <div className="flex flex-col items-start group">
      <div className="flex items-center gap-3 mb-2 px-1">
        <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
          Assistant
        </span>
      </div>

      <div className="max-w-[85%] px-6 py-5 rounded-2xl shadow-xl leading-relaxed glass-morphism bg-white/5 text-slate-300 rounded-tl-none">
        <Dots />
      </div>
    </div>
    );
  }

  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} group`}>
      <div className="flex items-center gap-3 mb-2 px-1">
        <span className={`text-[11px] font-bold uppercase tracking-widest ${
          isUser ? "text-slate-500" : "text-primary"
        }`}>
          {isUser ? "You" : "Assistant"}
        </span>
      </div>

      <div
        className={`max-w-[85%] px-6 py-5 rounded-2xl shadow-xl leading-relaxed ${
          isUser
            ? "bg-white/5 border border-white/10 text-slate-200 rounded-tr-none"
            : "glass-morphism bg-white/5 text-slate-300 rounded-tl-none"
        }`}
      >
        <Streamdown 
          plugins={{ 
            code: code, 
            mermaid: mermaid, 
            math: math, 
            cjk: cjk,   
          }}
          shikiTheme={['github-light', 'github-dark']}
          isAnimating= {isStreaming} 
        >
          {content}
        </Streamdown>
      </div>
    </div>
  );
}