import React from "react";

const PostItem = ({ post, onDelete }) => {
  const handleDelete = () => {
    onDelete(post.id);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow mb-4">
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="mb-4">{post.content}</p>
      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2"
      >
        Delete
      </button>
    </div>
  );
};

export default PostItem;
