import {MdOutlineArticle,MdOutlineVolunteerActivism, MdSupervisedUserCircle, MdEmojiEvents} from "react-icons/md"
export const SideBarData = [
    {
        key:1,
        title: "Users",
        path: "/admin",
        icon: <MdSupervisedUserCircle />,
        cName:"nav-text"
    },
    {
        key:2,
        title: "Events",
        path: "/admin/events",
        icon: <MdEmojiEvents />,
        cName:"nav-text"
    },
    {
        key:3,
        title: "Blog Posts",
        path: "/admin/posts",
        icon: <MdOutlineArticle/>,
        cName:"nav-text"
    },
    {
        key:4,
        title: "Featured Blogs",
        path: "/admin/featured",
        icon: <MdOutlineArticle />,
        cName:"nav-text"
    },
    {
        key:5,
        title: "Volunteers",
        path: "/volunteer",
        icon: <MdOutlineVolunteerActivism />,
        cName:"nav-text"
    },
    {
        key:7,
        title: "Log Out",
        path: "/",
        icon: <MdSupervisedUserCircle />,
        cName:"nav-text"
    },
]


