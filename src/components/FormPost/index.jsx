import { useState, useEffect } from "react";
import "./FormPost.css";

const FormPost = ({
  username,
  onSubmit,
  isLoading,
  initialData = null,
  titleText = "What's on your mind?",
  submitButtonText = "Create",
}) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, title, content });

    if (!initialData) {
      setTitle("");
      setContent("");
    }
  };

  return (
    <form className="form-post" onSubmit={handleSubmit}>
      <h1 className="form-post-title">{titleText}</h1>

      <label className="input-title" htmlFor="title">
        Title
      </label>
      <input
        id="title"
        type="text"
        className="form-post-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Hello world"
      />
      <label className="input-title" htmlFor="content">
        Content
      </label>
      <textarea
        id="content"
        className="form-post-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content here"
        rows="4"
      />
      <div className="form-post-button">
        <button
          type="submit"
          className="form-post-submit"
          disabled={!title.trim() || !content.trim() || isLoading}
        >
          {isLoading ? "Saving..." : submitButtonText}
        </button>
      </div>
    </form>
  );
};

export default FormPost;
