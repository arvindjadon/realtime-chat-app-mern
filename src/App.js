import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

export default function App() {
  return (
    <div className="app">
      <div className="app-body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
