import {MdOutlineArticle,MdOutlineVolunteerActivism, MdSupervisedUserCircle, MdEmojiEvents} from "react-icons/md"
export const SideBarData = [
    {
        key:1,
        title: "Users",
        path: "/home",
        icon: <MdSupervisedUserCircle />,
        cName:"nav-text"
    },
    {
        key:2,
        title: "Events",
        path: "/",
        icon: <MdEmojiEvents />,
        cName:"nav-text"
    },
    {
        key:3,
        title: "Blog Posts",
        path: "/statistics",
        icon: <MdOutlineArticle/>,
        cName:"nav-text"
    },
    {
        key:4,
        title: "Featured Blogs",
        path: "/product",
        icon: <MdOutlineArticle />,
        cName:"nav-text"
    },
    {
        key:5,
        title: "Volunteers",
        path: "/billing",
        icon: <MdOutlineVolunteerActivism />,
        cName:"nav-text"
    },
    {
        key:1,
        title: "Log Out",
        path: "/home",
        icon: <MdSupervisedUserCircle />,
        cName:"nav-text"
    },
]


