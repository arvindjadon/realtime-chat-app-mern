import { Avatar, IconButton } from "@mui/material";
import "./Chat.css";
import {
  AttachFile,
  InsertEmoticon,
  MicOutlined,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";

export default function Chat() {
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />

        <div className="chat-headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat-headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat-body">
        <p className="chat-message">
          <span className="chat-name">Sonny</span>This is a message
          <span className="chat-timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat-message chat-receiver">
          <span className="chat-name">Sonny</span>This is a message
          <span className="chat-timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat-footer">
        {/* <InsertEmoticonIcon /> */}
        <InsertEmoticon />
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send a message</button>
        </form>
        {/* <MicIcon /> */}
        <MicOutlined />
      </div>
    </div>
  );
}
