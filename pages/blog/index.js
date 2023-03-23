import { useEffect, useState } from "react";
import Post from "../../src/components/Post.js/Post";
export default function Blog() {
  const [blogs, setBlogs] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const URL = "https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/";

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(URL + "?limit=6");
        const data = await response.json();
        setBlogs(data.results);
        setIsFetching(false);
      } catch (error) {
        setError(error);
        console.log("Failed to fetch events data: ", error);
      }
    }
    if (isFetching) {
      fetchBlogs();
    }
  }, [isFetching]);

  return (
    <section className="overflow-hidden">
      <Post blogs={blogs} isFetching={isFetching}/>
    </section>
  );
}
