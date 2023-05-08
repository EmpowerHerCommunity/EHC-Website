import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Support = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  const [isloading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const [mail, setMail] = React.useState({
    email: false,
    laptops: false,
    courses: false,
    stipends: false,
    others: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      (submit.current && mail.email) ||
      mail.laptops ||
      mail.courses ||
      mail.stipends ||
      mail.others
    ) {
      try {
        setIsLoading(true);
        await emailjs.sendForm(
          "service_sqhbqh5",
          "template_h207e6g",
          submit.current,
          "v_22EFbmmIAh7jydz"
        );
        toast.success("mail sent successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsLoading(false);
        setTimeout(() => {
          router.reload(); // This will refresh the page after the form is submitted
        }, 1000)
      } catch (error) {
        setIsLoading(false);
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
    }
  };

  const submit = useRef(null);

  return (
      <section className="mx-auto mb-5 container flex items-center px-4 flex-col justify-center mt-8">
        <div
          className="flex flex-col justify-center items-center first-letter:first-line"
          data-aos="zoom-in"
        >
          {/* <Image src="/logo.png" width={110} height={110} alt="logo" /> */}
          <h2 className="lg:text-xl font-bold text-lg py-3 text-center">
            Support Us at Empower Her Community
          </h2>
          <p className="text-center text-base max-w-sm leading-6">
            Funds to support the women in tech BootCamp for over 300 ladies in
            Nigeria, Nairobi, America, UK, Ghana and Cote d'ivoire.
          </p>
        </div>
        <div
          className="border rounded-2xl mt-5 p-6 bg-supportb border-support"
          data-aos="zoom-in"
        >
          <h1 className="text-xl font-bold">Donate Cash</h1>
          <p className=" text-base w-96 py-3 leading-6">
            Funds to support the women in tech BootCamp for over 300 ladies in
            Nigeria, Nairobi, America, UK, Ghana and Cote d'ivoire.
          </p>
          <button class="bg-payment cursor-pointer text-white inline-flex w-full justify-center items-center border text-lg h-14 rounded-full">
            <span>Pay with&nbsp;</span>
            <span class="font-semibold">interswitch</span>
            <img src="/switch.svg" alt="Interswitch" class="h-6 ml-2" />
          </button>
        </div>
        <div
          className="border border-support bg-supportb rounded-2xl mt-10 px-7 py-7 bg-grey"
          data-aos="zoom-in"
        >
          <h1 className="text-xl font-bold">Donate Materials</h1>
          <p className="text-base w-96 py-3 leading-6">
            Funds to support the women in tech BootCamp for over 300 ladies in
            Nigeria, Nairobi, America, UK, Ghana and Cote d'ivoire.
          </p>
          <p className="lg:text-lg text-base text-blogSearch">
            Choose Materials to donate:
          </p>
          <form
            className="flex flex-col text-lg mt-2 cursor-pointer"
            onSubmit={handleSubmit}
            ref={submit}
          >
            <label className="mb-4 flex items-center">
              <input
                className="mr-2 h-5 w-5"
                type="checkbox"
                name="from_laptops"
                id="laptops"
                onChange={(e) => setMail({ ...mail, laptops: true })}
              />
              Laptops
            </label>
            <label className="mb-4 flex items-center">
              <input
                className="mr-2 h-5 w-5"
                type="checkbox"
                name="form_paidcourses"
                id="courses"
                onChange={(e) => setMail({ ...mail, courses: true })}
              />
              Paid Courses
            </label>
            <label className="mb-4 flex items-center">
              <input
                className="mr-2 h-5 w-5"
                type="checkbox"
                name="form_stipends"
                id="stipends"
                onChange={(e) => setMail({ ...mail, stipends: true })}
              />
              Data Stipends
            </label>
            <label className="mb-4 flex items-center">
              <input
                className="mr-2 h-5 w-5"
                type="checkbox"
                name="form_others"
                id="others"
                onChange={(e) => setMail({ ...mail, others: true })}
              />
              Others
            </label>
            <input
              placeholder="Enter your email"
              className="placeholder:text-xl border-2 px-4 py-2 mt-2 w-96 h-14 rounded-xl"
              name="form_email"
              id="email"
              required
              onChange={(e) => setMail({ ...mail, email: e.target.value })}
            />
            <button className="bg-payment mt-6 text-white w-full border text-xl h-14 rounded-full">
              {!isloading ? "Donate Selected" : "Your request is being sent"}
            </button>
          </form>
        </div>
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
      </section>
  );
};

export default Support;
