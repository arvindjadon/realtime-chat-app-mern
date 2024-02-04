import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SearchOutlined } from "@mui/icons-material";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar
          alt="User Picture"
          src="https://w0.peakpx.com/wallpaper/2/207/HD-wallpaper-shri-krishna-bab-calf-sri-krishna-baby-calf-lord-god.jpg"
        />
        <div className="sidebar-headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar-search">
        <div className="sidebar-searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar-chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}
