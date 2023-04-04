import Post from "../../src/components/Post.js/Post";
import Head from "next/head";

export default function Blog({ blogs }) {

  return (
    <section className="overflow-hidden">
       <Head>
        <title>Empower Her Community Website</title>
        <meta
          name="description"
          content="Join our content writing program by signing up as a content writer!"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
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
