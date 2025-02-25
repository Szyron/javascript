

function Main() {
  return (
    <section className="relative  text-white overflow-hidden  ">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className="absolute inset-0 bg-cover bg-center "

      ></div>

      <div className="container mx-auto lg:px-12 px-5 py-24 md:py-32 relative z-10 lg:h-[90vh]">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 relative">
            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight ">
              GSZI
              <br />
              <span className="bg-gradient-to-r from-blue-700 via-green-400 to-indigo-400 inline-block text-transparent bg-clip-text">
                Login/Register Frontend
              </span>
            </h1>
            <p className="text-xl mb-5 text-gray-300 ">
              Harnessing Research for developing Sustainable, Scalable, &
              Impactful Solutions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ">
              <button className="group relative w-full sm:w-auto px-6 py-3 min-w-[160px]">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg lg:blur-md blur-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <span className="text-white font-medium">Get Started</span>
                  <svg
                    className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </button>

              <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-lg text-white/70 hover:bg-white/10 hover:text-white transition-all min-w-[160px]">
                Documentation
              </button>
            </div>
           
          </div>

          <div className="w-full md:w-2/5 md:pl-12 ">
            <div className="bg-white bg-opacity-10 backdrop-filter md:backdrop-blur-lg relative  rounded-xl p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>
              <img
                src="data:image/png;base64,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"
                alt="Logo"
                className="h-16 right-2 top-2 drop_shadow lg:block md:block hidden  absolute"
              />
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                  <span>Data-Driven EarthTech Solutions</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  <span>Human-Centric AI & Analytics</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    ></path>
                  </svg>
                  <span>NextGen Technology for a Sustainable Future</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>

  )
}

export default Main;