import NavBar from "../src/components/NavBar";
import Support from "../src/components/Support";
import Footer from "../src/components/Footer"

const support = () => {
  return (
    <div className="overflow-y-hidden">
      <NavBar />
      <Support />
      <Footer/>
    </div>
  );
};

export default support;
