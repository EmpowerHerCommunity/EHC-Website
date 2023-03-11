// import "./App.css";
import React from "react";
import { useEffect, useState, useCallback } from "react";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import BlogCard from "../src/components/BlogCard";
import FeaturedBlog from "../src/components/FeaturedBlog";

const App = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <FeaturedBlog/>
      <BlogCard />
      <Footer />
    </div>
  );
};

export default App;
