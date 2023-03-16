import React, { useEffect, useState } from "react";
import axios from "axios";

interface IPost {
  id: number;
  image: string;
  title: string;
}

const App = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [postAmount, setpostAmount] = useState(1);

  const fetchPosts = async (limit = 20) => {
    try {
      setIsLoading(true);
      const response = await axios.get<{ results: IPost[] }>(
        `https://studapi.teachmeskills.by/blog/posts/?limit=${postAmount}`
      );
      setPosts(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <input
        value={postAmount}
        onChange={(e) => setpostAmount(+e.target.value)}
        placeholder="Number input"
      ></input>
      <button onClick={() => fetchPosts()}>Get posts</button>
      {isLoading ? (
        <h1>Идет загрузка</h1>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
