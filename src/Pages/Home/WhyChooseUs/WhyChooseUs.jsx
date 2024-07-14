// import WhyChooseCards from "./WhyChooseCards";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const WhyChooseUs = () => {
  return (
    <div id="parents" className="max-w-screen-xl mx-auto">
      <h1
        data-aos="zoom-in"
        className="md:text-5xl text-2xl font-bold border-2 bg-[#2B4F43] text-[#FFF]
        border-[#2B4F43] border-b-0 flex justify-center mt-10 py-3 mb-1"
      >
        Why Choose Us
      </h1>

      <div
        id="parents"
        data-aos="zoom-in"
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1"
      >
        <div
          id="parents"
          className=" py-10 px-4 bg-[#2B4F43] hover:bg-[#296e57] hover:text-[#2B4F43]"
        >
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="flex gap-5 "
          >
            <div className="">
              <h1 className="bg-[#F9B900] text-[#2B4F43] font-semibold rounded-full w-[50px] h-[50px] flex justify-center items-center">
                01
              </h1>
            </div>
            <div className="pt-5 text-[#FFF]">
              <h1 className="pb-5 font-rubik">MULTIPLE EVENTS</h1>
              <p>
                Seamlessly manage and host numerous events under one roof,
                ensuring efficiency and convenience.
              </p>
            </div>
          </div>
        </div>
        <div
          id="parents"
          className=" py-10 px-4 bg-[#2B4F43] hover:bg-[#296e57] hover:text-[#2B4F43]"
        >
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="flex gap-5 "
          >
            <div className="">
              <h1 className="bg-[#F9B900] text-[#2B4F43] font-semibold rounded-full w-[50px] h-[50px] flex justify-center items-center">
                02
              </h1>
            </div>
            <div className="pt-5 text-[#FFF]">
              <h1 className="pb-5 font-rubik">EVENT MANAGEMENT</h1>
              <p>
                Our expert team takes care of every detail, ensuring your event
                runs smoothly from start to finish.
              </p>
            </div>
          </div>
        </div>
        <div
          id="parents"
          className=" py-10 px-4 bg-[#2B4F43] hover:bg-[#296e57] hover:text-[#2B4F43]"
        >
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="flex gap-5 "
          >
            <div className="">
              <h1 className="bg-[#F9B900] text-[#2B4F43] font-semibold rounded-full w-[50px] h-[50px] flex justify-center items-center">
                03
              </h1>
            </div>
            <div className="pt-5 text-[#FFF]">
              <h1 className="pb-5 font-rubik">CREDIT CARD PAYMENT</h1>
              <p>
                Securely accept payments, making event registration and ticket
                purchasing hassle-free for your attendees.
              </p>
            </div>
          </div>
        </div>

        <div
          id="parents"
          className=" py-10 px-4 bg-[#2B4F43] hover:bg-[#296e57] hover:text-[#2B4F43]"
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex gap-5 "
          >
            <div className="">
              <h1 className="bg-[#F9B900] text-[#2B4F43] font-semibold rounded-full w-[50px] h-[50px] flex justify-center items-center">
                04
              </h1>
            </div>
            <div className="pt-5 text-[#FFF]">
              <h1 className="pb-5 font-rubik">VENUE MANAGEMENT</h1>
              <p>
                Let us handle venue logistics, so you can focus on creating
                remarkable event experiences.
              </p>
            </div>
          </div>
        </div>
        <div
          id="parents"
          className=" py-10 px-4 bg-[#2B4F43] hover:bg-[#296e57] hover:text-[#2B4F43]"
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex gap-5 "
          >
            <div className="">
              <h1 className="bg-[#F9B900] text-[#2B4F43] font-semibold rounded-full w-[50px] h-[50px] flex justify-center items-center">
                05
              </h1>
            </div>
            <div className="pt-5 text-[#FFF]">
              <h1 className="pb-5 font-rubik">FREE REGISTERING MANAGEMENT</h1>
              <p>
                We offer cost-effective registration solutions, freeing you from
                registration hassles.
              </p>
            </div>
          </div>
        </div>
        <div
          id="parents"
          className=" py-10 px-4 bg-[#2B4F43] hover:bg-[#296e57] hover:text-[#2B4F43]"
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex gap-5 "
          >
            <div className="">
              <h1 className="bg-[#F9B900] text-[#2B4F43] font-semibold rounded-full w-[50px] h-[50px] flex justify-center items-center">
                06
              </h1>
            </div>
            <div className="pt-5 text-[#FFF]">
              <h1 className="pb-5 font-rubik">EASY TO USE</h1>
              <p>
                Our user-friendly platform simplifies event management, making
                it accessible and efficient for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
