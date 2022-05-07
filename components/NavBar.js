import Image from "next/image";
import Link from "next/link";
import {
  CameraIcon,
  HomeIcon,
  MenuIcon,
  PhotographIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";

export default function NavBar() {
  const navEl = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon className=" h-6 text-red-700" />,
    },
    {
      name: "TV",
      link: "/reality-tv",
      icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
    },
    {
      name: "Movies ",
      link: "/movies-and-entertainment",
      icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
    },
    {
      name: "Topics ",
      link: "/hot/topics",
      icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
    },
    {
      name: "Login ",
      link: "/login",
      icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
    },

    // { name: "Food & Recipes" },
  ];
  return (
    <nav className=" sticky top-0 md:flex justify-center space-x-4  z-50 bg-white  border-b  w-full">
      <div className="md:w-16  overflow-hidden">
        <div className=" ">
          <div className=" absolute lg:h-28 h-16 w-20  rounded-lg ">
            <Image
              src="https://res.cloudinary.com/dggjlyw5e/image/upload/v1634447165/THE_HOT_SEAT_1_yubb8j.png"
              className=" p-2"
              objectFit="contain"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div>
        <header className="  bg-white ">
          <div className=" flex justify-center  py-4 md:px-5">
            <div className=" lg:w-2/3  md:flex hidden items-center   md:border-2  rounded-full ">
              <input
                className="ml-4  flex-grow mr-2  text-black focus:outline-none py-1 transparent"
                type="text"
                placeholder="Start your search"
              />
              <SearchIcon className="  hidden md:inline-flex h-7 cursor-pointer rounded-full  bg-red-700 p-1 text-white" />
            </div>
            <div className="flex  md:hidden items-center text-gray-900 justify-star space-x-2">
              <div className=" flex items-center space-x-2 border-2 p-1 rounded-full">
                Menu
                <MenuIcon className="h-6" />
              </div>
            </div>
          </div>
        </header>
        <div className=" md:flex  hidden  ">
          <div className=" flex border-black  justify-center w-full lg:px-5">
            <ul className="md:flex  md:space-x-6 border-t  md:items-center  md:justify-end grid grid-cols-5 md:grid-cols-3">
              {navEl.map((el, index) => (
                <Link key={index} href={`${el.link}`}>
                  <li className="hover:bg-gray-200    py-2   font-semibold cursor-pointer  lg:px-4 items-center justify-center flex">
                    {el.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
