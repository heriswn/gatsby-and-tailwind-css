import { Link } from "gatsby";
import React, {useEffect} from "react";

const Header = () => {
  useEffect(()=>{
    // Navbar Fixed
    window.onscroll = function() {
        const header = document.querySelector('header');
        const fixedNav = header.offsetTop;

        if(window.pageYOffset > fixedNav) {
            header.classList.add('navbar-fixed');
        } else {
            header.classList.remove('navbar-fixed');
        }
    }

    // hamburger
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector('#nav-menu');

    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle('hidden');
    });
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
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Clients
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Contact
                    </a>
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
