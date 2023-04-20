import { useState } from "react";
import PostItems from "./PostItems";

function Post(props) {
  const [posts, setPosts] = useState([]);
  const getPostDetails = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
  };
  return (
    <div>
      <h2>Post Component</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ratione
        provident deserunt ipsa ipsam! Autem velit, officiis ab modi voluptatem
        tempora. Hic molestias voluptas expedita praesentium exercitationem
        aliquam eligendi natus? Quasi, in, nihil fugit laudantium eius porro
        ipsam recusandae eum architecto cupiditate aut impedit doloremque
        veritatis, natus voluptatum deleniti fuga incidunt quisquam consequatur
        obcaecati debitis laboriosam maxime. Possimus voluptatibus corporis
        porro cum iste eius reprehenderit voluptatem eum explicabo, voluptas
        corrupti, quidem illum perspiciatis ratione blanditiis provident,
        commodi unde est. A impedit placeat explicabo officia harum?
        Reprehenderit harum illo, iste a deserunt totam eum corporis, inventore
        sapiente reiciendis eveniet, nihil repellendus.
      </p>
      <button onClick={getPostDetails}>Get Posts</button>&nbsp;&nbsp;
      <button
        onClick={() => {
          setPosts([]);
        }}
      >
        Hide Posts
      </button>
      <PostItems posts={posts} />
    </div>
  );
}

export default Post;
