import { Avatar } from "@mui/material";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebar-chat">
      <Avatar />
      <div className="sidebarChat-info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
