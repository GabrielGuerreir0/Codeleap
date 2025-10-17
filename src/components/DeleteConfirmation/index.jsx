import "./DeleteConfirmation.css";

const DeleteConfirmation = ({ onCancel, onConfirm, isLoading }) => {
  return (
    <div className="delete-confirmation">
      <h2 className="delete-title">
        Are you sure you want to delete this item?
      </h2>
      <div className="modal-actions">
        <button onClick={onCancel} className="cancel-button">
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="confirm-delete-button"
          disabled={isLoading}
        >
          {isLoading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
