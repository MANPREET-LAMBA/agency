import { useState } from "react";
import "../index.css";

function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-20 flex items-center justify-between px-6 md:justify-between relative z-50">

      <h1 className="logo font-Merriweather font-extrabold md:text-4xl">Manpreet <span className="text-orange-500">Dev</span></h1>

      {/* Desktop Navbar */}
      <div className="hidden md:flex  px-11 py-4 rounded-3xl font-Merriweather text-black items-center gap-8 text-xl md:text-2xl font-bold">
        <a className="hover:text-orange-500 transition" href="#">Home</a>
        <a className="hover:text-orange-500  transition" href="#project">Projects</a>
        <a className="hover:text-orange-500  transition" href="#services">Our Services</a>
        {/* <a className="hover:text-orange-500 transition" href="#">About us</a> */}
        <a className="hover:text-orange-500  transition" href="https://wa.me/918699555961">Contact us</a>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1 z-50 ml-auto"
      >
        <span className={`w-7 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`w-7 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`w-7 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* Background Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Right Side Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl flex flex-col gap-10 pt-28 pl-10 text-xl font-bold font-mono transform transition-transform duration-500 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a className="hover:translate-x-2 transition" href="#">Home</a>
        <a className="hover:translate-x-2 transition" href="#project">Projects</a>
        <a className="hover:translate-x-2 transition" href="#">Our Services</a>
        <a className="hover:translate-x-2 transition" href="#">About us</a>
        <a className="hover:translate-x-2 transition" href="#">Contact us</a>
      </div>

    </div>
  );
}

export default Nav;