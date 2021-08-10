import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import PostCard from "../components/PostCard";
const api = axios.create({
  baseURL: `https://gorest.co.in/public/v1`,
});

function Posts(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let id = localStorage.getItem("id");

    api.get(`/users/${id}/posts`).then((res) => {
      console.log(res.data.data);
      setPosts(res.data.data);
    });
  }, []);


  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post}></PostCard>
        </div>
      ))}
    </div>
  );
}

export default Posts;
