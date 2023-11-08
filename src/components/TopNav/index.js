"use client";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillLinkedin } from "react-icons/ai";
import { IoArrowBackOutline } from "react-icons/io5";
function TopNav() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <nav className="flex justify-center sticky top-2 z-10 p-4 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:flex-nowrap w-11/12 bg-white border-b border-neutral-50 rounded-full p-4">
        {isHomePage ? (
          <div className="flex items-center gap-4  mx-10 flex-wrap">
            {" "}
            <Scroll
              className="cursor-pointer hover:text-cyan-500 font-bold "
              to="me"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
            >
              Me
            </Scroll>
            <Scroll
              className="cursor-pointer hover:text-cyan-500 font-bold"
              to="about"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
            >
              About me
            </Scroll>
            <Scroll
              className="cursor-pointer hover:text-cyan-500 font-bold"
              to="projects"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              My projects
            </Scroll>
            <Scroll
              className="cursor-pointer hover:text-cyan-500 font-bold"
              to="experiences"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              MyExperiences
            </Scroll>
          </div>
        ) : (
          <div className="flex items-center gap-4  mx-10 flex-wrap">
            <Link
              className="flex  items-center gap-2 cursor-pointer hover:text-cyan-500 font-bold"
              href="/"
            >
              <IoArrowBackOutline />
              <p>Back</p>
            </Link>
          </div>
        )}

        <div className="flex items-center gap-4  mx-10 flex-wrap ">
          <Link
            className="flex gap-1 items-center hover:underline"
            target="_blank"
            href={`https://www.linkedin.com/in/ihsan-asfari-hanifan/`}
          >
            <span>Linkedin</span>
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default TopNav;
