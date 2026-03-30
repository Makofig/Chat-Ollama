import Sidebar from "./layout/Sidebar.jsx" 
import ChatContainer from "./chat/ChatContainer.jsx"  

function App() {

  return (
    <div className="flex h-dvh w-full text-slate-100 antialiased">
      <Sidebar />
      <ChatContainer />
    </div>
  )
}

export default App
