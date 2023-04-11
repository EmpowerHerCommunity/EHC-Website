import Mainbod from "../../src/components/admin/Mainbod";
import Link from "next/link";
import {useRouter} from "next/router";
import { useEffect } from "react";

function Admin() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    if (!token) {
      router.push("/login");
    }
    else{
      router.push("/admin")
    }
  }, []);

  return (
    <>
      <section className="xl:block hidden 2xl:mx-auto 2xl:container">
        <Mainbod />
      </section>
      <section className="xl:hidden h-screen lg:text-2xl md:text-xl text-xl px-4 flex justify-center text-center items-center">
      <h1>Sorry, this page is not available on your current screen size. Please go back to the <Link href='/'><a  className="underline text-primary">home page</a></Link> to continue browsing.</h1>
      </section>
    </>
  );
}

export default Admin;
