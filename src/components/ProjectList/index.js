import React from "react";
import Link from "next/link";

import projectData from "/public/data/projectData.json";
const ProjectList = async () => {
  return (
    <div className="grid grid-cols-3 content-center gap-y-5">
      {projectData.map((project) => {
        return (
          <div
            className="flex flex-col gap-2 items-center ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            key={project.id}
          >
            <h1 className="text-xl font-bold">{project.projectName}</h1>
            <Link
              href={{
                pathname: `/project/${project.id}`,
                query: {
                  id: project.id,
                  description: project.description,
                  projectName: project.projectName,
                  buildWith: project.buildWith,
                  year: project.year,
                  githubLink: project.githubLink,
                  demoLink: project.demoLink,
                  images: project.images
                }
              }}
              style={{ backgroundImage: `url(${project.images[0]})` }}
              id={project.id}
              className="flex border w-96 h-52 items-center justify-center cursor-pointer  bg-cover bg-center    rounded-lg"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
