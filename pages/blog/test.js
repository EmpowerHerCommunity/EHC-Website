// const [page, setPage] = useState(1);
// const [limit, setLimit] = useState(12);

// async function fetchBlogs() {
//     try {
//       const response = await fetch(`${URL}?page=${page}&limit=${limit}`);
//       const data = await response.json();
//       setBlogs(data.results);
//       setIsFetching(false);
//     } catch (error) {
//       setError(error);
//       console.log("Failed to fetch events data: ", error);
//     }
//   }

//   <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
// <button disabled={blogs && blogs.length < limit} onClick={() => setPage(page + 1)}>Next</button>
