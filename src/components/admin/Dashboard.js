import { useState, useEffect } from "react";
import EventDashboard from "./EventsDashboard";
import BlogDashboard from "./BlogDashboard";
import FeaturedDashboard from "./FeaturedDashboard";

const Dashboard = ({display, handleDisplay}) => {


  return (
    <>
      {display === "events" ? (
        <EventDashboard />
      ) : display === "posts" ? (
        <BlogDashboard  />
      ) : display === "featured" ? (
        <FeaturedDashboard  />
      ) : null }
    </>
  );
};

export default Dashboard;
