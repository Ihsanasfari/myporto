import ParticleBg from "../components/ParticleBg";
import TypeIntro from "../components/TypeIntro";
import Image from "next/image";
import myprofile from "../../public/images/myprofile.webp";
import test from "../../public/images/3.webp";
import { BsArrowDownShort } from "react-icons/bs";
import ProjectList from "../components/ProjectList";
import ExperienceList from "../components/ExperienceList";

const Home = async () => {
  return (
    <main className="flex min-h-screen flex-col gap-y-28  text-white px-40  p-10">
      <div id="me" className="flex justify-between  w-full items-center px-40">
        <div className="flex flex-col w-1/2 items-center">
          <div className="p-4 text-3xl ">
            <h1 className="w-full font-extrabold">
              <TypeIntro />
            </h1>
            <h3 className="w-full">thank you for visiting my portofolio</h3>
          </div>

          <div
            id="download_button"
            className="flex items-center justify-center mt-16"
          >
            <div className="flex gap-2 w-60 items-center justify-center  rounded-full p-4 mt-5 text-base cursor-pointer group transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              <p>DOWNLOAD MY CV</p>
              <div className="flex items-center border-2 rounded-full">
                <BsArrowDownShort className="text-2xl transform transition-transform group-hover:animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-10 bg-[#1d6291] rounded-full bg-opacity-80">
          <div className="flex items-center justify-center p-8 bg-[#e0ddd8] rounded-full bg-opacity-50 ">
            <Image
              className="object-cover rounded-full w-80 h-80"
              src={myprofile}
              alt="myprofile"
            />
          </div>
        </div>
      </div>

      <div id="about" className="flex flex-col gap-10">
        <h3 className="text-4xl">About me</h3>
        <p className="text-xl">
          I'm a recent Telkom University graduate with a degree in Software
          Engineering, passionate about front-end development. I have experience
          working with React.js, Next.js, and Redux, and I'm dedicated to
          creating engaging web experiences. Check out my portfolio for my
          latest projects.
        </p>
      </div>

      <div id="projects" className="flex flex-col gap-10">
        <h1 className="text-4xl"> My Project</h1>
        <ProjectList />
      </div>

      <div id="experiences" className="flex flex-col gap-10">
        <h3 className="text-4xl">Experience</h3>
        <ExperienceList />
      </div>

      <div className="flex items-center justify-center pt-10">
        <span>Made with:</span>
        <span>Next Js</span>
        <span>Tailwind</span>
      </div>

      <ParticleBg />
    </main>
  );
};

export default Home;
