import axios from "axios";
import React, { useEffect, useState } from "react";
import { IPost, IPosts } from "./types/Posts";

const App = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      setLoading(true);
      const response = await axios.get<IPosts>(
        "https://studapi.teachmeskills.by/blog/posts/?limit=20"
      );
      setPosts(response.data.results);
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
        <div style={{ display: "flex", flexDirection: "column", marginBottom:20}}>
          {posts.map((post) => (
            <div key={post.id}>
              <img
                style={{ width: "500px", height: "500px" }}
                src={post.image}
                alt=""
              />
              <div style={{fontSize:30}}>{post.date}</div>
              <div style={{fontSize:50}}>{post.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
