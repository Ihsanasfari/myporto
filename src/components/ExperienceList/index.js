import React from "react";
import Image from "next/image";
import experienceData from "/public/data/experienceData.json";
const ExperienceList = () => {
  return (
    <div className="grid grid-cols-1 gap-y-10 px-32 content-center">
      {experienceData.map((data) => {
        return (
          <div
            key={data.id}
            className="flex  w-full h-44 bg-white text-black  rounded-xl "
          >
            <Image
              width={200}
              height={200}
              className="object-contain h-full w-56 rounded-s-xl"
              src={`/${data.image}`}
              alt="..."
            />
            <div className="flex flex-col gap-1 p-5">
              <h1 className="font-bold text-xl">{data.experienceName}</h1>
              <h2 className="font-bold text-2xl">{data.role}</h2>
              <p>{data.description}</p>
              <span className="text-sm">{data.year}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceList;
