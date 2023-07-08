import Mainbod from "../../src/components/admin/Mainbod";
import Link from "next/link";

function Admin() {
  return (
    <>
      <section className="xl:block hidden">
        <Mainbod />
      </section>
      <section className="xl:hidden h-screen lg:text-2xl md:text-xl text-xl px-4 flex justify-center text-center items-center">
        {" "}
        <h1>
          Sorry, this page is not available on your current screen size. Please
          go back to the{" "}
          <Link href="/" className="underline text-primary">
            {" "}
            home page
          </Link>{" "}
          to continue browsing.
        </h1>
      </section>
    </>
  );
}

export default Admin;
