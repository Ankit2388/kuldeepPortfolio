import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Learn", route: "/learn" },
    { name: "My App", route: "/my-app" },
  ];

  return (
    <header className="shadow-md w-full fixed top-0 left-0">
      <div className="flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {menuItems.map((menu) => {
            return (
              <li
                key={menu.name}
                className="cursor-pointer select-none text-black  md:ml-8 text-xl hover:text-coral duration-500 items-center flex md:my-0 my-7"
              >
                <h1>{menu.name}</h1>
              </li>
            );
          })}
        </ul>
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
        <div className="flex items-center cursor-pointer select-none">
          <Image src="/KD.jpg" alt="logo" width={84} height={84} />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
{
  /* <FontAwesomeIcon
              icon={faIndustry}
              style={{ fontSize: 15, color: "blue" }}
            /> */
}
