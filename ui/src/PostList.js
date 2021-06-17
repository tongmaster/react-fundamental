import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "./useFetch";
export default function PostList() {
  const { data: posts, isLoading } = useFetch("/posts");
  if (isLoading) return <div>Loading....</div>;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
}
