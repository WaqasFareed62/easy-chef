import React, { useState, useEffect } from "react";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post._id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p>{post.content}</p>

            <div className="mt-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
