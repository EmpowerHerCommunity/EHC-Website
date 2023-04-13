import { useState } from "react";
import Post from "../../src/components/Post.js/Post";
import Head from "next/head";

export default function Blog({ blogs, raw, currentPage, totalPages }) {
  return (
    <section className="overflow-hidden">
      <Head>
        <title>"Empower Her Community"</title>
        <meta charSet="UTF-8" />
        <meta
          name="title"
          property="og:title"
          content="Empower Her Community"
        />
        <link rel="icon" href="/logo.png" />
        <meta
          name="image"
          property="og:image"
          content="https://empower-her-community.vercel.app/preview.png"
        />
        <meta name="twitter:title" content="Empower Her Community" />
        <meta
          name="twitter:description"
          content="We are a female community seeing to the growth and progress of all women in tech worldwide"
        />
        <meta name="twitter:image" content="/preview.png" />
        <meta
          name="description"
          content="We are a female community seeing to the growth and progress of all women in tech worldwide"
        />
        <meta
          property="og:site_name"
          content="https://empower-her-community.vercel.app/"
        />
        <meta
          property="og:image:secure_url"
          content="https://empower-her-community.vercel.app/preview.png"
        />
        <meta
          property="og:url"
          content="https://empower-her-community.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="logo" />
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

export async function getServerSideProps({ query }) {
  const currentPage = 1; // get the current page from the query parameters or default to page 1
  const pageSize = 9; // set the number of items per page

  const response = await fetch(
    `https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/?page=${currentPage}&page_size=${pageSize}`
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
