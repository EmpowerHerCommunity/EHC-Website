import { useState } from "react";
import Post from "../../src/components/Post.js/Post";
import Head from "next/head";

export default function Blog({ blogs, raw, currentPage, totalPages }) {

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
      <Post blogs={blogs} currentPage={currentPage} totalPages={totalPages} raw={raw}/>
    </section>
  );
}


export async function getServerSideProps({ query }) {

  const currentPage = 1 // get the current page from the query parameters or default to page 1
  const pageSize = 9; // set the number of items per page

  const response = await fetch(
    `https://empowerher.pythonanywhere.com/api/v1/indexapi/blogpost/?page=${currentPage}&page_size=${pageSize}`
  );

  const data = await response.json();
  const results = data.results;

  return {
    props: {
      blogs: results,
      raw:data,
      currentPage: currentPage,
      totalPages: Math.ceil(data.count / pageSize),
    },
  };
}
