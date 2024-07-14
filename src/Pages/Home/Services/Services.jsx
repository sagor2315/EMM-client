import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCards from "./ServiceCards/ServiceCards";
import PropTypes from "prop-types";

AOS.init();

const Services = ({ data }) => {
  const services = data;
  return (
    <div id="parent" className="mt-10 max-w-screen-xl mx-auto">
      <div className="bg-[#2B4F43] ">
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          // data-aos-duration="1000"
          // data-aos-anchor="#parent"
        >
          <h1 className="md:text-5xl text-2xl font-semibold text-[#FFF] pt-3 pb-3 flex justify-center">
            Our Corporate Services
          </h1>
        </div>

        <div
          className="mb-1"
          data-aos="fade-right"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          data-aos-anchor="#parent"
        >
          <p className="flex justify-center pb-5 font-normal text-center text-base text-[#FFF] px-2">
            Explore Our Services for creative event solutions. Elevate your
            business gatherings with our precision and creativity. We bring your
            vision to life.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1 lg:px-0 md:px-1 px-2">
        {services.map((data) => (
          <ServiceCards key={data.id} data={data}>
            {data}
          </ServiceCards>
        ))}
      </div>
    </div>
  );
};

Services.propTypes = {
  data: PropTypes.array,
};

export default Services;
