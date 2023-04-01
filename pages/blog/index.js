import Post from "../../src/components/Post.js/Post";

export default function Blog({ blogs }) {
  return (
    <section className="overflow-hidden">
      <Post blogs={blogs} />
    </section>
  );
}

export async function getServerSideProps({}) {
  const response = await fetch(
    "https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/"
  );

  const data = await response.json();
  const results = data.results;

  return {
    props: {
      blogs: results,
    },
  };
}
