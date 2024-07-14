import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const ServiceCards = ({ data }) => {
  const { id, name, image_url, price, description } = data;

  return (
    <div
      id="parents"
      className="bg-[#FEFBF9] flex flex-col max-w-screen-xl mx-auto"
    >
      <img
        data-aos="zoom-in-down"
        data-aos-delay="50"
        // data-aos-duration="1000"
        src={image_url}
        alt=""
      />
      <div
        data-aos="zoom-in-down"
        data-aos-delay="50"
        // data-aos-duration="1000"
        className="p-3 flex-grow border-l-2 border-r-2"
      >
        <div className="flex flex-col">
          <div className="flex-grow">
            <h1 className="font-semibold text-lg text-[#2B4F43] flex-grow">
              {name}
            </h1>
          </div>
        </div>
        <div className="font-semibold text-base text-[#2B4F43] flex justify-evenly py-3">
          <p className="bg-[#2B4F43] px-4 py-1 text-[#FFF] rounded-s-lg">
            Price:
          </p>
          <p className="bg-[#2B4F43] px-4 py-1 text-[#FFF] rounded-e-lg">
            ${price}
          </p>
        </div>
        <div className="">
          <p className="font-normal text-base text-[#2B4F43]">
            {description.slice(0, 83)}...
          </p>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        // data-aos-duration="1000"
        className="flex justify-center pb-3"
      >
        <Link className="w-full" to={`/service/${id}`}>
          <Button className="bg-[#2B4F43] w-full text-[#FFF] text-base hover:text-[#FFF] font-bold  hover:bg-[#296e57]">
            Explore
          </Button>
        </Link>
      </div>
    </div>
  );
};

ServiceCards.propTypes = {
  data: PropTypes.object,
};

export default ServiceCards;
