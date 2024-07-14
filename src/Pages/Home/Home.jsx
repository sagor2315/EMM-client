import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import Services from "./Services/Services";
import WhyChooseUs from "./WhyChooseUs/WhyChooseus";
import OurPartners from "./OurPartners/OurPartners";
// import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="max-w-screen-xl mx-auto">
      <Hero />
      <Services data={data} />
      <WhyChooseUs />
      <OurPartners />
    </div>
  );
};

export default Home;
