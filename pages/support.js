import Image from "next/image";
import NavBar from "../src/components/NavBar";

const support = () => {
  return (
    <>
    <NavBar/>
    <section className="mx-auto container flex items-center px-4 flex-col justify-center mt-14">
      <div className="flex flex-col justify-center items-center">
        {/* <Image src="/logo.png" width={110} height={110} alt="logo" /> */}
        <h2 className="lg:text-4xl text-3xl py-4 text-center">Support Us at Empower Her Community</h2>
        <p className="text-center lg:w-6/12 w-9/12 text-xl leading-9">
          Funds to support the women in tech BootCamp for over 300 ladies in
          Nigeria, Nairobi, America, UK, Ghana and Cote d'ivoire.
        </p>
      </div>
      <div className="border rounded-2xl mt-10 px-7 py-7 bg-grey">
        <h1 className="text-3xl mb-4">Donate Cash</h1>
        <p className="lg:text-lg text-xl w-96 mb-6">
          Funds to support the women in tech BootCamp for over 300 ladies in
          Nigeria, Nairobi, America, UK, Ghana and Cote d'ivoire.
        </p>
        <button class="bg-support text-white inline-flex w-full justify-center items-center border text-xl h-14 rounded-full">
          <span>Pay with&nbsp;</span>
          <span class="font-semibold">interswitch</span>
          <img src="/switch.svg" alt="Interswitch" class="h-6 ml-2" />
        </button>
      </div>
      <div className="border rounded-2xl mt-10 px-7 py-7 bg-grey">
        <h1 className="text-3xl mb-4">Donate Materials</h1>
        <p className="lg:text-lg text-xl w-96 mb-6">
          Funds to support the women in tech BootCamp for over 300 ladies in
          Nigeria, Nairobi, America, UK, Ghana and Cote d'ivoire.
        </p>
        <p className="lg:text-xl text-xl text-blogSearch mb-6">Choose Materials to donate:</p>
        <form className="flex flex-col">
          <label className="text-xl mb-4">
            <input className="mr-2" type="checkbox"></input>
            Laptops
          </label>
          <label className="text-xl mb-4">
            <input className="mr-2" type="checkbox"></input>
            Paid Courses
          </label>
          <label className="text-xl mb-4">
            <input className="mr-2" type="checkbox"></input>
            Data Stipends
          </label>
          <label className="text-xl mb-4">
            <input className="mr-2" type="checkbox"></input>
            Others
          </label>

          <input
            placeholder="Enter your email"
            className="placeholder:text-xl border-2 px-4 py-2 my-8 w-96 h-14 rounded-xl"
          ></input>
          <button className="bg-support text-white w-full border text-xl h-14 rounded-full">
            Donate Selected
          </button>
        </form>
      </div>
    </section>
    </>

  );
};

export default support;
