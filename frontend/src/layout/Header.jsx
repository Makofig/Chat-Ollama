import SunIcon from "../icons/SunIcon.jsx";
import MoonIcon from "../icons/MoonIcon.jsx";
import BotIcon from "../icons/BotIcon.jsx";
import { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <header className="h-16 px-8 border-b border-white/5 flex items-center justify-between backdrop-blur-md bg-black/20">

      {/* Left side */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
          <BotIcon size={18} className="text-primary" />
        </div>
        <div>
          <h1 className="text-sm font-semibold tracking-wide">
            AI Assistant
          </h1>
          <p className="text-xs text-slate-400">
            Modelo GPT
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-white/5 transition"
        >
          {dark ? (
            <SunIcon size={18} className="text-slate-400" />
          ) : (
            <MoonIcon size={18} className="text-slate-400" />
          )}
        </button>

        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold">
          AA
        </div>

      </div>
    </header>
  );
}