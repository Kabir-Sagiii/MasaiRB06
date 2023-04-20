import React from "react";

function PostItems({ posts }) {
  return (
    <div>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      ) : (
        <h2 style={{ color: "red" }}>No Post Titles Information</h2>
      )}
    </div>
  );
}

export default PostItems;
