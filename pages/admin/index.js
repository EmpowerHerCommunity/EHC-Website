import Mainbod from "../../src/components/admin/Mainbod";
import { useEffect, useState } from "react";
import Link from "next/link";

function Admin() {
  const URL =
    "https://empowerher.pythonanywhere.com/api/v1/indexapi/adminapi/profile";

  const [login, setLogin] = useState(false);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const profileFetch = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        setProfile(data);
        setLogin(true);
      } catch (error) {
        setError(error.message);
      }
    };
    profileFetch();
  }, [URL]);
  return (
    <>
      <section className="xl:block hidden">
        <Mainbod />
      </section>
      <section className="xl:hidden h-screen text-2xl px-4 flex justify-center items-center">
      <h1>Sorry, this page is not available on your current screen size. Please go back to the <Link href='/'><a  className="underline text-primary">home page</a></Link> to continue browsing.</h1>
      </section>
    </>
  );
}

export default Admin;
