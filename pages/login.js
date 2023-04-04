import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const login = () => {
  const router = useRouter();
  const URL = "https://empowerher.pythonanywhere.com/api/v1/adminapi/login/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  async function handleLogin() {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken":"Zt9no1wuUPTBoy8BukNZYLQcD9NZOYj2zW9loe9fGbdSIzuyxWvbKN2e4RdHSz69",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // Login successful, store user data in session storage
        const data = await response.json();
        setToken(data.data.access)
        // sessionStorage.setItem('user', JSON.stringify(data));
        toast.warning("Successfully Logged in", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })     
        // Redirect to user profile page

        setTimeout(() => {
          // router.push("/admin");
        }, 1500);
      } else {
        // Login failed, display error message
        setError(error);
        console.log(error);
        toast.warning("Incorrect Email or Password", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      // Network error occurred, display error message
      console.log(error);
      toast.warning("Network error occurred", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleLogin(email, password);
  }

  return (
    <>
      <div className="overflow-hidden xl:block hidden">
        <NavBar />
        <main className="main">
          <section className="flex flex-col justify-center h-screen">
            <div className="lg:max-w-xl w-full m-auto bg-white rounded-md shadow-2xl px-6 py-8">
              <h1 className="login text-4xl text-center font-semibold mb-4">
                Log in
              </h1>
              <form className="px-6 py-8">
                <div>
                  <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold text-slate-700">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      required
                      onChange={(event) => setEmail(event.target.value)}
                      className="h-12 px-4 placeholder:text-lg bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <div>
                  <label className="block py-8">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-bold text-slate-700">
                      Password
                    </span>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      required
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Enter your password"
                      className="h-12 px-4 placeholder:text-lg bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    />
                  </label>
                </div>

                <div className="mt-8">
                  <button
                    onClick={handleSubmit}
                    className="sub-btn w-full bg-purple-700 px-4 py-2 text-lg text-white rounded focus:outline-none"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <section className="xl:hidden h-screen lg:text-2xl md:text-xl text-xl px-4 flex justify-center text-center items-center">
        <h1>Sorry, this page is not available on your current screen size. Please go back to the <Link href='/'><a  className="underline text-primary">home page</a></Link> to continue browsing.</h1>
      </section>
    </>
  );
};

export default login;
