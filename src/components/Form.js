import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Form = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  const [loading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const [mail, setMail] = useState({
    name: "",
    email: "",
    number: "",
    nationality: "",
    message: "",
  });
  
    //regex for email
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail?.email);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (
      isValidEmail &&
      submit.current &&
      mail.name !== "" &&
      mail.email !== "" &&
      mail.number !== "" &&
      mail.message !== "" &&
      mail.message !== ""
    ) {
      try {
        await emailjs.sendForm(
          "service_sqhbqh5",
          "template_ayka0t2",
          submit.current,
          "v_22EFbmmIAh7jydz"
        );
        toast.success("Your request has been sent successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          router.reload(); // This will refresh the page after the form is submitted
        }, 3000);
      } catch (error) {
        toast.error("Network error, please try again.", {
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
      setIsLoading(false);
    }
    else{
      toast.error("Invalid Email Address")
    }
  };

  const submit = useRef(null);

  return (
    <div className="m-4">
      <form className="form text-dark" onSubmit={handleSubmit} ref={submit}>
        <div className="flex flex-wrap sm:flex-nowrap gap-4">
          <div
            className="input-group w-full py-2 sm:flex-1"
            data-aos="fade-right"
          >
            <label htmlFor="name" className="uppercase text-lg">
              name
            </label>
            <input
              type="text"
              name="from_name"
              id="name"
              required
              className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2 placeholder:text-2xl lg:placeholder:text-xl"
              placeholder="Enter your name"
              value={mail.name}
              onChange={(e) => setMail({ ...mail, name: e.target.value })}
            />
          </div>
          <div
            className="input-group w-full py-2 sm:flex-1"
            data-aos="fade-left"
          >
            <label htmlFor="email" className="uppercase text-lg">
              email
            </label>
            <input
              type="email"
              name="from_email"
              required
              id="email"
              className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2 placeholder:text-2xl lg:placeholder:text-xl"
              placeholder="Enter your email address"
              value={mail.email}
              onChange={(e) => setMail({ ...mail, email: e.target.value })}
            />
          </div>
        </div>
        <div
          className="flex flex-wrap sm:flex-nowrap gap-4"
          data-aos="fade-right"
        >
          <div className="input-group w-full py-2 sm:flex-1">
            <label htmlFor="mobile-number" className="uppercase text-lg">
              mobile number
            </label>
            <input
              type="text"
              name="from_mobileNumber"
              required
              id="mobile-number"
              className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2 placeholder:text-2xl lg:placeholder:text-xl"
              placeholder="Enter your mobile number"
              value={mail.number}
              onChange={(e) => setMail({ ...mail, number: e.target.value })}
            />
          </div>
          <div
            className="input-group w-full py-2 sm:flex-1"
            data-aos="fade-left"
          >
            <label htmlFor="nationality" className="uppercase text-lg">
              Nationality
            </label>
            <input
              type="text"
              name="from_nationality"
              required
              id="nationality"
              className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2 placeholder:text-2xl lg:placeholder:text-xl"
              placeholder="Enter your country"
              value={mail.nationality}
              onChange={(e) =>
                setMail({ ...mail, nationality: e.target.value })
              }
            />
          </div>
        </div>
        <div className="" data-aos="fade-right">
          <div className="input-group w-full py-2">
            <label htmlFor="" className="uppercase text-xl">
              message
            </label>
            <textarea
              name="from_message"
              required
              id="message"
              cols="30"
              rows="10"
              className="outline-none border-b-2 border-primary w-full px-3 py-2.5 my-2 placeholder:text-2xl lg:placeholder:text-xl"
              value={mail.message}
              onChange={(e) => setMail({ ...mail, message: e.target.value })}
              placeholder="Hello there..."
            ></textarea>
          </div>
        </div>
        <div className="input-group w-full py-2" data-aos="zoom-in">
          {loading ? (
            <button
              className="bg-primary text-white text-4xl w-full p-3 rounded-md"
              type="submit"
            >
              Sending...🙂
            </button>
          ) : (
            <button
              className="bg-primary text-white text-4xl w-full p-3 rounded-md"
              type="submit"
            >
              Submit 🙂
            </button>
          )}
        </div>
      </form>
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
  );
};

export default Form;
