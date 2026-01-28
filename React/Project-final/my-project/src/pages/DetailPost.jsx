import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailPost() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const handle = async () => {
    const respondPost = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    setPost(respondPost.data);
    console.log(respondPost.data);
  };

  useEffect(() => {
    handle();
  }, []);
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-1">Posts</h2>
          <p className="text-gray-500">Browse Detail posts</p>
        </div>
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </>
  );
}

export default DetailPost;
