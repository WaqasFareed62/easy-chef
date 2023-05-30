import React, { useState } from "react";

const CreatePostForm = ({ createPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      createPost({ title, content });
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <textarea
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;
