import React, { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const { data } = await axios.get(url);
      setData(data);
      setIsLoading(false);
    };
    fetchPosts();
  }, [url]);
  return {
    data,
    isLoading,
  };
}
export default useFetch;
