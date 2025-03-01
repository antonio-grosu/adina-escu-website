"use client";
import { useState, useEffect } from "react";
const { default: Link } = require("next/link");

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menu]);

  return (
    <>
      <nav className="fixed z-10 top-0 w-full px-8 py-4 shadow-sm bg-gray-50 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Adina Escu
        </Link>
        <div className="hidden  md:flex items-center justify-between text-sm gap-4 ">
          <Link
            href="/"
            className="hover:text-color-primary hover:cursor-pointer"
          >
            Acasa
          </Link>
          <Link
            href="/despre-mine"
            className="hover:text-color-primary hover:cursor-pointer"
          >
            Despre Mine
          </Link>
          <Link
            href="/servicii"
            className="hover:text-color-primary hover:cursor-pointer"
          >
            Servicii
          </Link>
          <Link
            href="/neurofeedback"
            className="hover:text-color-primary hover:cursor-pointer"
          >
            Neurofeedback
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 border-2 font-medium border-color-primary  flex items-center justify-start  hover:rounded-2xl bg-color-primary/10 hover:bg-color-primary/10 rounded-md transition-all"
          >
            Sedinta
          </Link>
        </div>
        <svg
          onClick={() => setMenu(!menu)}
          className="w-6 h-6 text-black md:hidden "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </nav>
      {menu && (
        <div
          className="h-screen z-20 w-full bg-black/50 flex justify-end  fixed top-0"
          onClick={() => setMenu(!menu)}
        >
          <div className="w-2/3 gap-12 bg-color-primary flex slide-right flex-col p-4">
            <div className="slide-in flex items-center justify-between w-full">
              <h3 className="font-semibold text-white">Adina Escu</h3>
            </div>
            <div className="slide-in flex flex-col items-left">
              <h3 className=" text-white font-semibold">Pagini</h3>
              <div className="pt-1 w-full bg-white/10 mt-1"></div>
              <div className="flex flex-col gap-4 text-white text-sm">
                <Link href="/" className="mt-4">
                  Acasă
                </Link>
                <Link href="/despre-mine">Despre Mine</Link>
                <Link href="/servicii">Servicii</Link>
                <Link href="/neurofeedback">Neurofeedback</Link>
              </div>
            </div>

            <div className="slide-in flex flex-col items-left">
              <h3 className=" text-white font-semibold">Sedinta</h3>
              <div className="pt-1 w-full bg-white/10 mt-1"></div>
              <div className="flex flex-col gap-4 text-white text-sm">
                <Link href="/" className="mt-4 py-2">
                  contact@adina-escu.ro
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 w-full border-2 font-semibold border-black  flex items-center justify-center  hover:rounded-2xl bg-white text-black rounded-md transition-all"
                >
                  Sedinta
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
