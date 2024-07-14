import Logo1 from "../../../assets/logo1.jpg";
import Logo2 from "../../../assets/logo2.jpg";
import Logo3 from "../../../assets/logo3.jpg";
import Logo4 from "../../../assets/logo4.jpg";
import Logo5 from "../../../assets/logo5.jpg";
import Logo6 from "../../../assets/logo6.jpg";
import Logo7 from "../../../assets/logo7.jpg";
import Logo8 from "../../../assets/logo8.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const OurPartners = () => {
  return (
    <div id="parents">
      <div
        className="bg-[#2B4F43] text-[#FFF] flex justify-center mt-10 py-3"
        id="parents"
      >
        <div data-aos="flip-up">
          <h1 className="md:text-5xl text-center text-2xl font-bold border-[#2B4F43] border-b-0 ">
            Our Partners
          </h1>
          <p className="text-center text-normal">Know about our sponsors</p>
        </div>
      </div>

      <div
        id="parents"
        className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-0 mb-0 border-[1px] border-[#2B4F43] border-y-0"
      >
        <div
          data-aos="fade-right"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          className="border-[1px] border-[#2B4F43] flex justify-center items-center border-t-0 border-l-0"
        >
          <img className="block" src={Logo1} alt="" />
        </div>
        <div
          data-aos="fade-right"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          className="border-[1px] border-[#2B4F43] flex justify-center items-center border-l-0 border-t-0"
        >
          <img className="block" src={Logo2} alt="" />
        </div>
        <div
          data-aos="fade-right"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          className="border-[1px] border-[#2B4F43] flex justify-center items-center border-l-0 border-t-0"
        >
          <img className="block" src={Logo3} alt="" />
        </div>
        <div
          data-aos="zoom-in"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          className="border-[1px] border-[#2B4F43] flex justify-center items-center border-l-0 border-t-0 lg:border-r-0"
        >
          <img className="block" src={Logo4} alt="" />
        </div>
        <div
          data-aos="zoom-in"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          className="border-[1px] border-[#2B4F43] flex justify-center items-center  border-t-0 border-l-0 lg:border-b-0"
        >
          <img className="block" src={Logo5} alt="" />
        </div>
        <div
          data-aos="zoom-in"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          className="border-[1px] border-[#2B4F43] flex justify-center items-center border-l-0 border-t-0 lg:border-b-0"
        >
          <img className="block" src={Logo6} alt="" />
        </div>
        <div
          data-aos="zoom-in"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          className="border-[1px] border-[#2B4F43] flex justify-center items-center border-l-0 md:border-t-0 border-t-0 border-b-0"
        >
          <img className="block" src={Logo7} alt="" />
        </div>
        <div
          data-aos="zoom-in"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          className="border-[1px] border-[#2B4F43] flex justify-center items-center border-l-0 md:border-t-0 border-t-0 border-b-0 lg:border-r-0"
        >
          <img className="block" src={Logo8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
