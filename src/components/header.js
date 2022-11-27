import { Link } from "gatsby";
import React, {useEffect} from "react";

const Header = () => {
  useEffect(()=>{
    // Back to top
    // window.onscroll = function () {
    //   const toTop = document.querySelector("#to-top");
    //   const fixedNav = toTop.offsetTop;

    //   if (window.pageYOffset > fixedNav) {
    //     toTop.classList.remove("hidden");
    //     toTop.classList.add("flex");
    //   } else {
    //     toTop.classList.remove("flex");
    //     toTop.classList.add("hidden");
    //   }
    // };

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
      <header className="fixed top-0 left-0 z-[9999] flex w-full items-center bg-transparent bg-white bg-opacity-70 backdrop-blur dark:bg-dark dark:bg-opacity-50 border-b border-slate-900/10 dark:border-slate-50/[0.6]">
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="px-4">
              <Link to="/">
                <span className="block py-6 text-lg font-bold text-primary">
                  Heri Setiawan
                </span>
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="absolute right-4 block lg:hidden"
              >
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              </button>

              <nav
                id="nav-menu"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      About
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#clients"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      Clients
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#blog"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mt-3 flex items-center pl-8 lg:mt-0">
                    <div className="flex">
                      <span className="text=sm mr-2 text-slate-500">light</span>
                      <input
                        type={"checkbox"}
                        className="hidden"
                        id="dark-toggle"
                      />
                      <label htmlFor={"dark-toggle"}>
                        <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                          <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out" />
                        </div>
                      </label>
                      <span className="text=sm ml-2 text-slate-500">dark</span>
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
