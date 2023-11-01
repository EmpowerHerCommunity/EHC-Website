import Post from "../../src/components/Post/Post";
import Head from "next/head";

export default function Blog({ blogs, raw, currentPage, totalPages }) {
  return (
    <section className="overflow-hidden">
      <Head>
        <title>Empower Her Community</title>
        <meta
          name="description"
          content="We are a female community seeing to the growth and progress of all women in tech worldwide"
        />

        <meta
          property="og:url"
          content="https://empower-her-community.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Empower Her Community" />
        <meta
          property="og:description"
          content="We are a female community seeing to the growth and progress of all women in tech worldwide"
        />
        <meta
          property="og:image"
          content="https://empower-her-community.vercel.app/preview.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="empower-her-community.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://empower-her-community.vercel.app/"
        />
        <meta name="twitter:title" content="Empower Her Community" />
        <meta
          name="twitter:description"
          content="We are a female community seeing to the growth and progress of all women in tech worldwide"
        />
        <meta
          name="twitter:image"
          content="https://empower-her-community.vercel.app/preview.png"
        />
      </Head>
      <Post
        blogs={blogs}
        currentPage={currentPage}
        totalPages={totalPages}
        raw={raw}
      />
    </section>
  );
}

export async function getStaticProps() {
  const currentPage = 1;
  const pageSize = 9; 

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL  + `/api/v1/indexapi/blogpost/?page=${currentPage}&page_size=${pageSize}`
  );

  const data = await response.json();
  const results = data.results;

  return {
    props: {
      blogs: results,
      raw: data,
      currentPage: currentPage,
      totalPages: Math.ceil(data.count / pageSize),
    },
  };
}
