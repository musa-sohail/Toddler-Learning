import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/quizes", label: "Quizes" }, 
    { href: "/contact", label: "Contact" },
  ];

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`sticky top-0 sm:px-8 px-4 py-2 z-10 bg-white ${hasShadow ? 'shadow-md' : ''}`}>
        <nav className="flex justify-between items-center max-container bg-transparent">
          <Link to="/" className="text-3xl font-bold text-sky-600">
            Toddler's Learning.
          </Link>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  className="font-montserrat leading-normal text-lg text-dark hover:text-sky-600"
                  activeClassName="text-sky-600"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            <Link to="/login" className="text-dark hover:text-sky-600">
              Connect With Us
            </Link>
          </div>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl text-dark" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-white z-50 flex items-center justify-center">
          <nav className="lg:hidden">
            <div
              className="fixed right-0 px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl text-sky-600" />
            </div>
            <ul className="flex flex-col items-center justify-center h-full">
              {navLinks.map((item) => (
                <li key={item.label} className="mb-4">
                  <NavLink
                    to={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray hover:text-sky-600"
                    activeClassName="text-sky-600"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
