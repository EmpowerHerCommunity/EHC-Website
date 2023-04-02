import Mainbod from "../../src/components/admin/Mainbod";
import { useEffect, useState } from "react";
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
        <h1>This page is unavailable for your screen size</h1>
      </section>
    </>
  );
}

export default Admin;
