import { Link } from "gatsby";
import React, {useEffect} from "react";

const Header = () => {
  useEffect(()=>{
    // Navbar Fixed & Back to top
    window.onscroll = function () {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;
      const toTop = document.querySelector("#to-top");

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
        toTop.classList.remove("hidden");
        toTop.classList.add("flex");
      } else {
        header.classList.remove("navbar-fixed");
        toTop.classList.remove("flex");
        toTop.classList.add("hidden");
      }
    };

    // hamburger
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    });

    // Click out hamburger
    window.addEventListener("click", function (e) {
      if (e.target !== hamburger && e.target !== navMenu) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
      }
    });

    // Dark mode toggle
    const darkToggle = document.querySelector("#dark-toggle");
    const html = document.querySelector("html");

    darkToggle.addEventListener("click", function () {
      if (darkToggle.checked) {
        html.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        html.classList.remove("dark");
        localStorage.theme = "light";
      }
    });

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      darkToggle.checked = true;
    } else {
      darkToggle.checked = false;
    }
  })

  return (
    <>
      {/* Header Section Start */}
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link to="/">
                <span className="font-bold text-lg text-primary block py-6">
                  Heri Setiawan
                </span>
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              </button>

              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark lg:dark:bg-transparent dark:shadow-slate-500"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                    >
                      About
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#clients"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                    >
                      Clients
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#blog"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mt-3 lg:mt-0 flex items-center pl-8">
                    <div className="flex">
                      <span className="mr-2 text=sm text-slate-500">light</span>
                      <input type={"checkbox"} className="hidden" id="dark-toggle" />
                      <label htmlFor={"dark-toggle"}>
                        <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                          <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out" />
                        </div>
                      </label>
                      <span className="ml-2 text=sm text-slate-500">dark</span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Header Section End */}
    </>
  );
};

export default Header;
