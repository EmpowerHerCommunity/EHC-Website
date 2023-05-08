import NavBar from "../src/components/NavBar";
import Support from "../src/components/Support";
import Footer from "../src/components/Footer"
import SupportHero from "../src/components/SupportHero";
import SupportPartnership from "../src/components/SupportPartnership";

const support = () => {
  return (
    <div className="overflow-y-hidden">
      <NavBar />
      <SupportHero />
      <SupportPartnership/>
      <Support />
      <Footer/>
    </div>
  );
};

export default support;
