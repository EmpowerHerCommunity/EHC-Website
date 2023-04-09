import EventDashboard from "./EventsDashboard";
import BlogDashboard from "./BlogDashboard";
import FeaturedDashboard from "./FeaturedDashboard";
import Create from "../New/Create";
import Publish from "../New/Publish";

const Dashboard = ({ display }) => {
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
      ) : <EventDashboard/>}
    </>
  );
};

export default Dashboard;
