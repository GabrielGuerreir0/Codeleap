import { useState, useEffect } from "react";
import "./EditPostForm.css";

const EditPostForm = ({ postToEdit, onSubmit, onCancel, isLoading }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
    }
  }, [postToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <div className="edit-form-container">
      <h2 className="edit-title">Edit item</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="edit-title">Title</label>
        <input
          id="edit-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="edit-content">Content</label>
        <textarea
          id="edit-content"
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="modal-actions">
          <button type="button" onClick={onCancel} className="cancel-button">
            Cancel
          </button>
          <button
            type="submit"
            className="save-button"
            disabled={!title.trim() || !content.trim() || isLoading}
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPostForm;
