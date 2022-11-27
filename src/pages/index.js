import * as React from "react"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/header";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <main>
      <Header />
      {/* Hero Section Start */}
      <section id="home" className="pt-36 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full  self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary">
                Hallo Semua 👋, saya{" "}
                <span className="mt-1 block text-4xl font-bold text-dark dark:text-white md:text-xl">
                  Heri Setiawan
                </span>
              </h1>
              <h2 className="mb-5 text-lg font-medium text-secondary lg:text-2xl">
                Marketing Planner,{" "}
                <span className="text-dark dark:text-white">SCTV</span>
              </h2>
              <p className="mb-10 font-medium leading-relaxed text-secondary">
                I've experience in Marketing Analyst and Marketing Planner with
                a demonstrated history of working in the broadcast media
                industry (GTV and SCTV). Skilled in Data Analysis, VBA Excel,
                Python, and Microsoft Office. Before that I was at Padjadjaran
                University, with degrees from their mathematics department.
              </p>
              <Link to="#">
                <span className="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-90 hover:shadow-lg">
                  Email
                </span>
              </Link>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:right-0 lg:mt-9">
                <StaticImage
                  src="../images/clip.png"
                  alt="Heri Setiawan"
                  className="relative z-10 mx-auto max-w-full"
                />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg
                    width={400}
                    height={400}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#14b8a6"
                      d="M32.5,-42.4C46.4,-34.7,64.8,-30.9,71.9,-20.7C78.9,-10.4,74.6,6.2,65.6,17.5C56.6,28.7,43.1,34.7,31.4,39C19.7,43.4,9.8,46.2,-4.3,52.2C-18.5,58.1,-36.9,67.2,-51.2,63.6C-65.5,60.1,-75.6,44,-77.4,27.7C-79.3,11.3,-72.9,-5.1,-68.4,-23.2C-63.8,-41.2,-61.1,-60.8,-50,-69.5C-39,-78.1,-19.5,-75.8,-5.1,-68.8C9.3,-61.8,18.7,-50.2,32.5,-42.4Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* About Section Start */}
      <section id="about" className="pt-36 pb-32 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full px-4 lg:w-1/2">
              <h4 className="mb-3 text-lg font-bold uppercase text-primary">
                Tentang Saya
              </h4>
              <h2 className="mb-5 max-w-md text-3xl font-bold text-dark dark:text-white lg:text-4xl">
                Marketing Planner, SCTV
              </h2>
              <p className="max-w-xl text-base font-medium text-secondary lg:text-lg">
                Philanthropically I focus on personal privacy. Did you know that
                your digital track record can be known by several parties, and
                take advantage of it? Here are Simple Steps to Protect Your
                Privacy Online. I want to recommend you a safe search engine,
                use DuckDuckGo. BTW, DuckDuckGo has very useful features like
                App Tracking Protection and Email Protection.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white lg:pt-10 lg:text-3xl">
                Follow Me!!!
              </h3>
              <p className="mb-6 text-base font-medium text-secondary lg:text-lg">
                I've experience in Marketing Analyst and Marketing Planner with
                a demonstrated history of working in the broadcast media
                industry (GTV and SCTV). Skilled in Data Analysis, VBA Excel,
                Python, and Microsoft Office. Before that I was at Padjadjaran
                University, with degrees from their mathematics department.
              </p>
              <div className="item-center flex">
                {/* Youtube */}
                <a
                  href="youtube.com"
                  target={"_blank"}
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    className="fill-current"
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="instagram.com"
                  target={"_blank"}
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    className="fill-current"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
                {/* Twitter */}
                <a
                  href="twitter.com"
                  target={"_blank"}
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    className="fill-current"
                  >
                    <title>Twitter</title>
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="facebook.com"
                  target={"_blank"}
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    className="fill-current"
                  >
                    <title>Facebook</title>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* Portfolio Section Start */}
      <section
        id="portfolio"
        className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">
                Portfolio
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Project Terbaru
              </h2>
              <p className="text-md font-medium text-secondary md:text-lg">
                Et officia duis nisi aute et sint excepteur minim reprehenderit
                ea in nisi elit nisi. Lorem sint laboris sint tempor sit aliquip
                deserunt eiusmod do eiusmod mollit commodo. Ut tempor deserunt
                aute incididunt irure reprehenderit ullamco Lorem enim occaecat
                elit. In et et dolore labore ad ex nisi dolor proident aliquip.
                In labore sunt minim occaecat et ut eiusmod velit excepteur.
                Incididunt exercitation et duis dolor cillum aute occaecat
                consequat mollit cupidatat irure ut. Ut aute nostrud elit elit
                proident consectetur esse aliquip do cupidatat.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <StaticImage
                  src="../images/portfolio/1.png"
                  alt="Landing Page Heri Setiawan"
                  className="w-full"
                />
              </div>
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
                Landing Page Heri Setiawan
              </h3>
              <p className="text-base font-medium text-secondary">
                Aliquip exercitation irure non ad dolor proident anim laborum
                occaecat velit eiusmod. Tempor enim non adipisicing occaecat
                irure est culpa. Sint consequat pariatur id eiusmod duis laboris
                irure dolore. Deserunt in esse reprehenderit eiusmod aliquip
                occaecat fugiat aliquip enim mollit do. Occaecat eu cillum sint
                fugiat reprehenderit occaecat eu id cillum irure nostrud. Veniam
                excepteur sit labore Lorem nisi aute esse ut ut qui sit tempor.
                Irure laboris consectetur pariatur magna.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <StaticImage
                  src="../images/portfolio/2.png"
                  alt="E-Commerce"
                  className="w-full"
                />
              </div>
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
                E-Commerce
              </h3>
              <p className="text-base font-medium text-secondary">
                Aliquip exercitation irure non ad dolor proident anim laborum
                occaecat velit eiusmod. Tempor enim non adipisicing occaecat
                irure est culpa. Sint consequat pariatur id eiusmod duis laboris
                irure dolore. Deserunt in esse reprehenderit eiusmod aliquip
                occaecat fugiat aliquip enim mollit do. Occaecat eu cillum sint
                fugiat reprehenderit occaecat eu id cillum irure nostrud. Veniam
                excepteur sit labore Lorem nisi aute esse ut ut qui sit tempor.
                Irure laboris consectetur pariatur magna.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <StaticImage
                  src="../images/portfolio/3.png"
                  alt="document"
                  className="w-full"
                />
              </div>
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
                Document
              </h3>
              <p className="text-base font-medium text-secondary">
                Aliquip exercitation irure non ad dolor proident anim laborum
                occaecat velit eiusmod. Tempor enim non adipisicing occaecat
                irure est culpa. Sint consequat pariatur id eiusmod duis laboris
                irure dolore. Deserunt in esse reprehenderit eiusmod aliquip
                occaecat fugiat aliquip enim mollit do. Occaecat eu cillum sint
                fugiat reprehenderit occaecat eu id cillum irure nostrud. Veniam
                excepteur sit labore Lorem nisi aute esse ut ut qui sit tempor.
                Irure laboris consectetur pariatur magna.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-md">
                <StaticImage
                  src="../images/portfolio/4.png"
                  alt="Tribut Page"
                  className="w-full"
                />
              </div>
              <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
                Tribut Page
              </h3>
              <p className="text-base font-medium text-secondary">
                Aliquip exercitation irure non ad dolor proident anim laborum
                occaecat velit eiusmod. Tempor enim non adipisicing occaecat
                irure est culpa. Sint consequat pariatur id eiusmod duis laboris
                irure dolore. Deserunt in esse reprehenderit eiusmod aliquip
                occaecat fugiat aliquip enim mollit do. Occaecat eu cillum sint
                fugiat reprehenderit occaecat eu id cillum irure nostrud. Veniam
                excepteur sit labore Lorem nisi aute esse ut ut qui sit tempor.
                Irure laboris consectetur pariatur magna.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section End */}

      {/* Clients Section Start */}
      <section
        id="clients"
        className="bg-slate-800 pt-36 pb-32 dark:bg-slate-300"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">
                Clients
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-white dark:text-dark sm:text-4xl lg:text-5xl">
                Experience
              </h2>
              <p className="text-md font-medium text-secondary md:text-lg">
                Duis pariatur incididunt do fugiat pariatur commodo
                reprehenderit occaecat nostrud id ex ex.
              </p>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a
                href="https://herisetiawan.vercel.app"
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <StaticImage src="../images/clients/google.svg" alt="google" />
              </a>
              <a
                href="https://herisetiawan.vercel.app"
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <StaticImage src="../images/clients/gojek.svg" alt="gojek" />
              </a>
              <a
                href="https://herisetiawan.vercel.app"
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <StaticImage src="../images/clients/gtv.svg" alt="gtv" />
              </a>
              <a
                href="https://herisetiawan.vercel.app"
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <StaticImage src="../images/clients/sctv.svg" alt="sctv" />
              </a>
              <a
                href="https://herisetiawan.vercel.app"
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <StaticImage
                  src="../images/clients/tokopedia.svg"
                  alt="tokopedia"
                />
              </a>
              <a
                href="https://herisetiawan.vercel.app"
                className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <StaticImage
                  src="../images/clients/traveloka.svg"
                  alt="traveloka"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Clients Section End */}

      {/* Blog Section Start */}
      <section id="blog" className="bg-slate-100 pt-36 pb-32 dark:bg-dark">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">Blog</h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Blog Terbaru
              </h2>
              <p className="text-md font-medium text-secondary md:text-lg">
                Nostrud est sint officia ea sit deserunt id laboris sint in enim
                ipsum officia.
              </p>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
                  <StaticImage
                    src="../images/portfolio/1.png"
                    alt="programming"
                    className="w-full"
                  />
                  <div className="py-8 px-6">
                    <h3 className="trancate mb-3 text-xl font-semibold text-dark dark:text-white">
                      Tips Coding
                    </h3>
                    <p className="mb-6 text-base font-medium text-secondary">
                      Qui labore duis aute irure adipisicing.
                    </p>
                    <a
                      href="https://herisetiawan.vercel.app"
                      className="rounded-md bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
                  <StaticImage
                    src="../images/portfolio/1.png"
                    alt="keyboard"
                    className="w-full"
                  />
                  <div className="py-8 px-6">
                    <h3 className="trancate mb-3 text-xl font-semibold text-dark dark:text-white">
                      Review Keyboard
                    </h3>
                    <p className="mb-6 text-base font-medium text-secondary">
                      Qui labore duis aute irure adipisicing.
                    </p>
                    <a
                      href="https://herisetiawan.vercel.app"
                      className="rounded-md bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
                  <StaticImage
                    src="../images/portfolio/1.png"
                    alt="cofee"
                    className="w-full"
                  />
                  <div className="py-8 px-6">
                    <h3 className="trancate mb-3 text-xl font-semibold text-dark dark:text-white">
                      Coffee
                    </h3>
                    <p className="mb-6 text-base font-medium text-secondary">
                      Qui labore duis aute irure adipisicing.
                    </p>
                    <a
                      href="https://herisetiawan.vercel.app"
                      className="rounded-md bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End */}

      {/* Contact Section Start */}
      <section id="contact" className="pt-36 pb-32 dark:bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary ">
                Contact
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Email me
              </h2>
              <p className="text-md font-medium text-secondary md:text-lg">
                Amet nulla est nisi dolor esse.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
      <Footer />
    </main>
  );
}

export default IndexPage

export const Head = () => <title>Home Page</title>
