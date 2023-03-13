import axios from "axios";
import React, { useEffect, useState } from "react";
import { IPost, IPosts } from "./types/Posts";

const App = () => {
  const [posts, setPosts] = useState<IPosts>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchPosts();
  });

  async function fetchPosts() {
    try {
      setLoading(true);
      const response = await axios.get<IPosts>(
        "https://studapi.teachmeskills.by/blog/posts/?limit=20"
      );
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id}>{post.image}-{post.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
