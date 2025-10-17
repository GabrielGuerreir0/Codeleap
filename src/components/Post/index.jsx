import React, { useMemo } from "react";
import { useAuth } from "../../context/AuthContext";
import { getTimeDifference } from "../../utils/getTimeDifference";

import deleteIcon from "../../assets/delete.png";
import editIcon from "../../assets/edit.png";

import "./Post.css";

const Post = ({ post, onDeleteClick, onEditClick }) => {
  const { username: loggedInUsername } = useAuth();
  const { title, username, created_datetime, content } = post;

  const isMyPost = loggedInUsername === username;

  const timeSincePost = useMemo(
    () => getTimeDifference(created_datetime),
    [created_datetime]
  );

  const paragraphs = useMemo(() => {
    const words = content.split(" ");
    const result = [];
    let temp = [];
    words.forEach((word, index) => {
      temp.push(word);
      if ((index + 1) % 35 === 0) {
        result.push(temp.join(" "));
        temp = [];
      }
    });
    if (temp.length > 0) result.push(temp.join(" "));
    return result;
  }, [content]);

  return (
    <div className="post">
      <div className="post-header">
        <h2 className="post-title">{title}</h2>
        {isMyPost && (
          <div className="post-actions">
            <a
              onClick={onDeleteClick}
              className="action-button"
              aria-label="Delete post"
            >
              <img src={deleteIcon} alt="Delete" />
            </a>
            <a
              onClick={onEditClick}
              className="action-button"
              aria-label="Edit post"
            >
              <img src={editIcon} alt="Edit" />
            </a>
          </div>
        )}
      </div>
      <div className="post-body">
        <div className="post-info">
          <p className="post-author">@{username}</p>
          <p className="post-time">{timeSincePost}</p>
        </div>
        <div className="post-text">
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="post-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
