import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import AOS from "aos";
import { useRouter } from "next/router";

const NavBar = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  const router = useRouter();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="overflow-hidden px-5 cursor-pointer lg:bg-white lg:bg-opacity-0  bg-primary bg-opacity-10  ">
      <nav className="flex lg:flex-row items-center container mx-auto  py-10 lg:py-3 flex-col-reverse lg:justify-center">
        <ul
          className={`${
            active ? "block" : "hidden"
          }  lg:inline-flex lg:flex-row xl:w-5/12 lg:w-96 md:w-12/12 w-12/12 flex flex-col lg:h-0 h-96 justify-between lg:pt-0 pt-10 items-start lg:items-center lg:justify-between lg:text-lg text-2xl lg:font-normal font-semibold `}
        >
          <li
            className={`${
              router.pathname === "/"
                ? "border-b-2 border-primary  "
                : "hover:font-light"
            } hover:font-medium`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${
              router.pathname === "/aboutUs"
                ? "border-b-2 border-primary"
                : "hover:font-light"
            } hover:font-medium`}
          >
            <Link href="/aboutUs">About Us</Link>
          </li>
          <li
            className={`${
              router.pathname === "/events"
                ? "border-b-2 border-primary"
                : "hover:font-light"
            } hover:font-medium`}
          >
            <Link href="/events">Events</Link>
          </li>
          <li
            className={`${
              router.pathname === "/blog"
                ? "border-b-2 border-primary"
                : "hover:font-light"
            } hover:font-medium`}
          >
            <Link href="/blog">Blog</Link>
          </li>
          <li
            className={`${
              router.pathname === "/volunteer"
                ? "border-b-2 border-primary"
                : "hover:font-light"
            } hover:font-medium`}
          >
            <Link href="/volunteer">Volunteer</Link>
          </li>
          <li
            className={`${
              router.pathname === "/contact"
                ? "border-b-2 border-primary"
                : "hover:font-light"
            } hover:font-medium`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <figure className=" flex justify-between w-full lg:h-0 h-10 px-1 lg:px-2 xl:w-3/12 lg:w-2/12 lg:justify-center items-center">
          <Link href="/" legacyBehavior>
            <a className="border-none">
              <Image src="/logo.png" width={110} height={110} alt="logo" />
            </a>
          </Link>
          {active ? (
            <h1
              className="text-4xl flex items-center lg:hidden font-medium"
              onClick={handleClick}
            >
              X
            </h1>
          ) : (
            <button
              className=" rounded lg:hidden text-white ml-auto hover:text-white active:bg-white outline-none"
              onClick={handleClick}
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </figure>
        <div className="w-4/12 md:w-5/12 lg:flex hidden lg:flex-row flex-col justify-around items-center h-56 lg:h-0 lg-py-0 py-11">
          <Link
            legacyBehavior
            href="https://docs.google.com/forms/d/e/1FAIpQLSdiqxcF-QKi9bf97M6XaNUEmr1dc-5wOLpeAJqNWaCtRjTb5A/viewform "
            className="border-none"
          >
            <a target="_blank">
              <button className="lg:w-36 md:w-28 rounded-md h-12  text-primary font-medium border-primary border-2 font-mono hover:scale-105">
                Join Us
              </button>
            </a>
          </Link>
          <Link
            legacyBehavior
            href="/support"
          >
            <a target="_blank">
              <button className="lg:w-52 md:w-48 rounded-md h-12 border bg-primary font-medium text-white font-mono hover:scale-105">
                Support Our Vision
              </button>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
