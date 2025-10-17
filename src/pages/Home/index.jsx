import { useState } from "react";

import { useAuth } from "../../context/AuthContext";
import {
  usePosts,
  useCreatePost,
  useDeletePost,
  useUpdatePost,
} from "../../hooks/usePosts";

import FormPost from "../../components/FormPost";
import Post from "../../components/Post";
import Modal from "../../components/Modal";
import DeleteConfirmation from "../../components/DeleteConfirmation";
import EditPostForm from "../../components/EditPostForm";

import "./Home.css";

const Main = () => {
  const { username } = useAuth();
  const { data: posts, error, isLoading } = usePosts();
  const createPostMutation = useCreatePost();
  const deletePostMutation = useDeletePost();
  const updatePostMutation = useUpdatePost();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const handleCreatePost = (postData) => {
    createPostMutation.mutate(postData);
  };
  const handleUpdatePost = (updatedData) => {
    updatePostMutation.mutate(
      { id: selectedPost.id, ...updatedData },
      { onSuccess: handleCloseModals }
    );
  };
  const handleConfirmDelete = () => {
    deletePostMutation.mutate(selectedPost.id, {
      onSuccess: handleCloseModals,
    });
  };
  const handleOpenDeleteModal = (post) => {
    setSelectedPost(post);
    setDeleteModalOpen(true);
  };
  const handleOpenEditModal = (post) => {
    setSelectedPost(post);
    setEditModalOpen(true);
  };
  const handleCloseModals = () => {
    setSelectedPost(null);
    setDeleteModalOpen(false);
    setEditModalOpen(false);
  };

  if (isLoading) return <p>Carregando posts...</p>;
  if (error) return <p>Erro ao carregar posts.</p>;

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <h1 className="title">CodeLeap Network</h1>
        </header>

        <div className="content">
          <FormPost
            username={username}
            onSubmit={handleCreatePost}
            isLoading={createPostMutation.isLoading}
          />
          {posts &&
            posts.map((post) => (
              <Post
                key={post.id}
                post={post}
                onDeleteClick={() => handleOpenDeleteModal(post)}
                onEditClick={() => handleOpenEditModal(post)}
              />
            ))}
        </div>
      </div>

      <Modal show={isDeleteModalOpen} onClose={handleCloseModals}>
        <DeleteConfirmation
          onCancel={handleCloseModals}
          onConfirm={handleConfirmDelete}
          isLoading={deletePostMutation.isLoading}
        />
      </Modal>

      <Modal show={isEditModalOpen} onClose={handleCloseModals}>
        <EditPostForm
          postToEdit={selectedPost}
          onSubmit={handleUpdatePost}
          onCancel={handleCloseModals}
          isLoading={updatePostMutation.isLoading}
        />
      </Modal>
    </div>
  );
};

export default Main;
