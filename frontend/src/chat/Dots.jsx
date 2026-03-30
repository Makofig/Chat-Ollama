
export default function Dots() {
  return (
    // <span className="flex gap-1">
    //   <span className="animate-bounce">.</span>
    //   <span className="animate-bounce delay-150">.</span>
    //   <span className="animate-bounce delay-300">.</span>
    // </span>
    <span className="inline-flex items-center gap-1">
      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
    </span>
  );
};