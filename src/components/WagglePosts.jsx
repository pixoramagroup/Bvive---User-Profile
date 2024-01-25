import React from "react";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import "./WagglePosts.scss";

const Message = ({ size = 24, fill, ...props }) => {
  return (
    <svg height={size} role="img" viewBox="0 0 24 24" width={size} {...props}>
      <line
        fill="none"
        stroke={fill}
        strokeLinejoin="round"
        strokeWidth="2"
        x1="22"
        x2="9.218"
        y1="3"
        y2="10.083"
      />
      <polygon
        fill="none"
        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
        stroke={fill}
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
const WagglePosts = ({ currentMedia }) => {
    const { content, date, user, likes, comments } = currentMedia;

    return (
      <div  className="post" style={{ padding: "15px" }}>
        <div className="user-data">
          <div className="user-info">
            <Avatar
              src={user.profilePic}
              alt="Profile"
              className="profile-pic"
            />
            <span className="username">{user.username}</span>
          </div>
          <div className="post-date">{date}</div>
        </div>
  
        <p>{content}</p>
  
        <div className="post-actions">
          <FavoriteBorderIcon className="action-icon" />
          <ChatBubbleOutlineOutlinedIcon className="action-icon" />
          <Message size={24} fill="#333" />{" "}
        </div>
  
        <div className="post-likes">
          {likes} likes . {comments} comments
        </div>
      </div>
    );
  };
  
  export default WagglePosts;