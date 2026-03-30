import PlusIcon  from "../icons/PlusIcon.jsx";
import MessageIcon from "../icons/MessageIcon.jsx";
import SettingsIcon from "../icons/SettingsIcon.jsx";
import LogoutIcon from "../icons/LogoutIcon.jsx";

export default function Sidebar() {
  return (
    <aside className="w-72 glass-morphism bg-glass-dark flex flex-col border-r border-white/5">

      {/* Header */}
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center font-bold text-white">
            AI
          </div>
          <div>
            <p className="text-sm font-semibold">Assistant</p>
            <p className="text-xs text-slate-400">v1.0</p>
          </div>
        </div>
      </div>

      {/* New Chat Button */}
      <div className="p-4">
        <button className="w-full flex items-center gap-2 bg-primary/90 hover:bg-primary transition px-4 py-3 rounded-xl text-sm font-medium">
          <PlusIcon size={16} />
          Nueva conversación
        </button>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-4 space-y-2">
        <SidebarItem title="Consulta Laravel pagos" active />
        <SidebarItem title="Config Mikrotik PPPoE" />
        <SidebarItem title="Error Streamdown React" />
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-white/5 space-y-2">
        <SidebarFooterItem icon={<SettingsIcon size={16} />} label="Configuración" />
        <SidebarFooterItem icon={<LogoutIcon size={16} />} label="Cerrar sesión" />
      </div>
    </aside>
  );
}

function SidebarItem({ title, active }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition 
        ${active
          ? "bg-white/10 text-white"
          : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
    >
      <MessageIcon size={15} />
      <span className="truncate">{title}</span>
    </button>
  );
}

function SidebarFooterItem({ icon, label }) {
  return (
    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:bg-white/5 hover:text-white transition">
      {icon}
      {label}
    </button>
  );
}