import { HomeIcon, CreditCardIcon, UserIcon, ChartPieIcon, ClipboardDocumentIcon } from "@heroicons/react/24/solid";

export const SideBarData = [
    {
        key:1,
        title: "Dashboard",
        path: "/home",
        icon: <HomeIcon />,
        cName:"nav-text"
    },
    {
        key:2,
        title: "Order",
        path: "/",
        icon: <CreditCardIcon />,
        cName:"nav-text"
    },
    {
        key:3,
        title: "Statistics",
        path: "/statistics",
        icon: <ChartPieIcon/>,
        cName:"nav-text"
    },
    {
        key:4,
        title: "Product",
        path: "/product",
        icon: <UserIcon />,
        cName:"nav-text"
    },
    {
        key:5,
        title: "stock",
        path: "/billing",
        icon: <UserIcon />,
        cName:"nav-text"
    },
    {
        key:6,
        title: "offer",
        path: "/offer",
        icon: <ClipboardDocumentIcon />,
        cName:"nav-text"
    },
]


