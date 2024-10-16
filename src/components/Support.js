import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DonationSection from './DonationSection'

const Support = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);
  const accounts = [
    {
      type: 'International Bank Account Number (Fidelity Bank)',
      name: 'EMPOWER HER COMMUNITY',
      number: 4110139398,
      swiftCode: 'FIDTNGLA'
    },
    {
      type: 'Dollar',
      name: 'Empower her community foundation',
      number: 5240057626,
    },
    {
      type: 'Pounds',
      name: 'Empower her community foundation',
      number: 5240057619,
    },
    {
      type: 'Euro',
      name: 'Empower her community foundation',
      number: 5240057602,
    },
  ];
  const [isloading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const [mail, setMail] = React.useState({
    email: "",
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
        toast.success("mail sent successfully");
        setIsLoading(false);
        setTimeout(() => {
          router.reload(); // This will refresh the page after the form is submitted
        }, 3000);
      } catch (error) {
        setIsLoading(false);
        toast.error("Network error, please try again.");
      }
    }
  };

  const submit = useRef(null);

  return (
<section className="mx-auto my-16 flex-wrap container flex items-center px-4 flex-col lg:flex-row justify-center lg:justify-around mt-8">
  {/* Cash Donation Section */}
  <div
    className="border rounded-2xl md:w-1/2 mt-5 p-6 px-12 bg-supportb border-support"
    data-aos="zoom-in"
  >
    <h1 className="text-2xl font-bold">Donate Cash</h1>
    <p className="text-xl lg:text-lg text-justify  py-5 leading-6">
      Your support will make a tangible difference in the lives of these aspiring female technologists. Donate today and help us empower women in tech.
    </p>
    <Link href="https://paystack.com/pay/empowerhercommunity" legacyBehavior>
      <a target="_blank">
        <button className="bg-payment cursor-pointer text-white inline-flex w-full justify-center items-center border text-xl h-14 my-3 rounded-full">
          <span>Pay with&nbsp;</span>
          <span className="font-semibold">Paystack</span>
        </button>
      </a>
    </Link>
  </div>

  {/* Material Donation Section */}
  <div
    className="border md:w-1/2 border-support bg-supportb rounded-2xl mt-10 px-12 py-7 bg-grey"
    data-aos="zoom-in"
  >
    <h1 className="text-2xl font-bold">Donate Materials</h1>
    <p className="text-xl lg:text-lg text-justify py-3 leading-6">
      Your generous donation will directly impact the lives of women in tech. Every contribution, matters.
    </p>
    <p className="lg:text-lg text-xl text-blogSearch">
      Choose Materials to donate:
    </p>
    <form
      className="flex flex-col text-xl mt-2 cursor-pointer"
      onSubmit={handleSubmit}
      ref={submit}
    >
      <label className="mb-4 flex items-center">
        <input
          className="mr-2 h-5 w-5"
          type="checkbox"
          name="form_laptops"
          id="laptops"
          value={mail.laptops}
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
          value={mail.courses}
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
          value={mail.stipends}
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
          value={mail.others}
          onChange={(e) => setMail({ ...mail, others: true })}
        />
        Others
      </label>
      <input
        placeholder="Enter your email"
        className="placeholder:text-xl border-2 px-4 py-2 mt-2 h-14 rounded-xl"
        name="form_email"
        id="email"
        required
        value={mail.email}
        onChange={(e) => setMail({ ...mail, email: e.target.value })}
      />
      <button className="bg-payment mt-6 text-white w-full border text-xl h-14 rounded-full">
        {!isloading ? "Donate Selected" : "Your request is being sent"}
      </button>
    </form>
  </div>

  {/* Bank Account Donation Section */}
  <div className="md:w-1/2 mt-10">
    <DonationSection accounts={accounts} />
  </div>
</section>
  );
};

export default Support;
