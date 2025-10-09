"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Contact", path: "#contact" },
];

function Navbar() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  return (
    <div className="fixed z-50 flex w-full justify-center font-bold text-white mix-blend-difference">
      <div className="mx-auto mt-2 hidden max-w-[400px] items-center justify-center rounded-3xl border border-white/20 p-2 md:flex">
        <ul className="flex flex-row space-x-8 p-2">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="inline-block transform transition-all duration-300 ease-in-out hover:skew-x-12 hover:text-white/50"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={toggleNav}
        className="absolute top-5 right-4.5 z-50 cursor-pointer rounded p-2 text-white/70 md:hidden"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>
      <div
        className={`fixed inset-0 z-40 h-full w-full transform bg-black/90 transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex h-full flex-col items-center justify-center space-y-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} onClick={closeNav} className="text-5xl">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
