import EventDashboard from "./EventsDashboard";
import BlogDashboard from "./BlogDashboard";
import FeaturedDashboard from "./FeaturedDashboard";
import Create from "./Create";
import Publish from "./Publish";

const Dashboard = ({ display, handleDisplay }) => {
  return (
    <>
      {display === "events" ? (
        <EventDashboard />
      ) : display === "posts" ? (
        <BlogDashboard />
      ) : display === "featured" ? (
        <FeaturedDashboard />
      ) : display === "create" ? (
        <Create />
      ) : display === "publish" ? (
        <Publish />
      ) : null}
    </>
  );
};

export default Dashboard;
