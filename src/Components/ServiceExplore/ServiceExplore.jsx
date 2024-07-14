// import { useState } from "react";
// import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceExplore = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const _id = parseInt(id);
  console.log(typeof _id);

  const singleData = data.find((data) => data.id === _id);
  console.log(singleData);

  return (
    <div className="px-2 border">
      <div className="flex justify-center mt-5 rounded-xl">
        <img
          className="rounded-xl"
          src={singleData && singleData.image_url}
          alt=""
        />
      </div>
      <div>
        <h1 className="md:text-4xl md:font-bold text-2xl font-medium mt-4 mb-2">
          {singleData && singleData.name}
        </h1>

        <h1 className="my-4 flex gap-4 text-[#FFF]">
          <span className="text-2xl font-semibold bg-[#2B4F43] px-6 py-2 rounded-s-full">
            Price:
          </span>
          <span className="text-2xl font-semibold bg-[#2B4F43] px-6 py-2 rounded-e-full">
            ${singleData.price}
          </span>
        </h1>

        <p className="text-lg font-normal pb-5 text-justify">
          {singleData.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceExplore;
