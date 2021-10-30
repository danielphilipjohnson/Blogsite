import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Search from "../../search";

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const menuRef = useRef();
  const navRef = useRef();
  const menuNavRef = useRef();

  const openMenu = () => {
    const htmlMenuNodes = menuNavRef.current.children[0].children;
    var menuItems = Array.from(htmlMenuNodes);

    if (!openNav) {
      setOpenNav(true);
      menuRef.current.classList.add("closed");
      navRef.current.classList.add("show");
      menuNavRef.current.classList.add("show");
      menuItems.forEach((item) => item.classList.add("show"));
    } else {
      setOpenNav(false);
      menuRef.current.classList.remove("closed");
      navRef.current.classList.remove("show");
      menuNavRef.current.classList.remove("show");
      menuItems.forEach((item) => item.classList.remove("show"));
    }
  };
  return (
    <>
      <nav
        className="sticky top-0 z-20 w-full max-w-8xl mx-auto bg-white border-b border-gray-200 px-4 py-5 text-gray-700 flex items-center justify-between"
        role="navigation"
        aria-labelledby="nav1"
      >
        <ul className="flex w-full md:w-auto">
          <li className="w-full block">
            <Link className="w-full block flex flex justify-end" to="/">
              <StaticImage
                className="w-full"
                src="../../../images/icon.png"
                alt="showcase"
                placeholder="none"
                layout="fixed"
                height={42}
                formats={["auto", "avif", "webp", "png"]}
              />
            </Link>
          </li>
        </ul>
        <ul className="hidden md:flex justify-between text-md">
          <li className="px-2 py-1 mx-2 rounded nav-link">
            <Link className="font-black" to="/latest">
              Latest
            </Link>
          </li>
          <li className="px-2 py-1 mx-2 rounded nav-link">
            <Link className="font-black" to="/tutorials">
              Tutorials
            </Link>
          </li>
          <li className="px-2 py-1 mx-2 rounded nav-link">
            <Link className="font-black" to="/series">
              Series
            </Link>
          </li>
        </ul>
      </nav>
      <nav
        className="bg-primary-alt menu w-full overflow-hidden fixed top-0 z-30"
        ref={navRef}
      >
        <div className="menu-nav show " ref={menuNavRef}>
          <ul className="fixed top-20 left-6 flex w-3/4 h-3/4 flex-col ">
            <li className="nav-item pb-12">
              <Search />
            </li>
            <li className="nav-item pb-12">
              <Link to="/latest" className="nav-link text-3xl">
                Latest
              </Link>
            </li>
            <li className="nav-item text-3xl pb-12">
              <Link to="/tutorials" className="nav-item text-3xl">
                Tutorials
              </Link>
              {/* <ul className="pl-8  text-xl space-y-6 mt-6 mb-12">
                <li>React</li>
                <li>Vue</li>
                <li>Django</li>
              </ul> */}
            </li>
            <li className="nav-item text-3xl pb-12">
              <Link
                to="/series/"
                className="nav-link"
                activeClassName="current"
              >
                Series
              </Link>
              {/* <ul className="pl-8  text-xl space-y-6 mt-6 mb-12">
                <li>Junior to senior</li>
                <li>Better programming</li>
              </ul> */}
            </li>
          </ul>
        </div>
      </nav>
      <button
        ref={menuRef}
        className="menu-btn sm:hidden fixed top-4 right-0 w-full z-50 pointer p-4"
        onClick={openMenu}
        role="menu"
      >
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </button>
    </>
  );
}

export default Nav;
