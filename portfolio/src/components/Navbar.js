import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { name: "Home", route: "/" },
    { name: "Portfolio", route: "/about" },
    { name: "About Me", route: "/about" },
    { name: "Contact Me", route: "/my-app" },
  ];

  return (
    <header className="shadow-md w-full fixed top-0 left-0">
      <div className="flex items-center justify-between bg-white py-4 md:px-20 px-7">
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {menuItems.map((menu) => {
            return (
              <li
                key={menu.name}
                className="cursor-pointer select-none text-black font-bold  md:ml-8 text-base hover:text-primary duration-500 items-center flex md:my-0 my-7"
              >
                <h1>{menu.name}</h1>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center cursor-pointer select-none">
          <Image src="/KD.jpg" alt="logo" width={84} height={84} />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="h-7 w-7 flex justify-center items-center cursor-pointer md:hidden"
        >
          {open ? (
            <FontAwesomeIcon icon={faXmark} size="2x" className="text-black" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" className="text-black" />
          )}
        </div>

        <div className="md:flex md:flex-row hidden">
          <div className="mx-6 border-solid border-2 border-black w-12 h-12 rounded-full md:justify-center md:items-center md:flex sm:hidden">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              className="text-black"
            />
          </div>
          <div className="mx-6 border-solid border-2 border-black w-12 h-12 rounded-full justify-center items-center flex">
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              className="text-black"
            />
          </div>
          <div className="mx-6 border-solid border-2 border-black w-12 h-12 rounded-full justify-center items-center flex">
            <FontAwesomeIcon
              icon={faTwitter}
              size="xl"
              className="text-black"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

{
  /* <FontAwesomeIcon
              icon={faIndustry}
              style={{ fontSize: 15, color: "blue" }}
            /> */
}
