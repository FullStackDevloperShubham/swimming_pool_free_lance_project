const Contact = () => {
    return (
      <>
        <div className="mt-10 w-full flex items-center justify-center text-white px-4">
          <div className="w-full max-w-none flex flex-col md:flex-row items-center text-center md:text-left px-4 sm:px-8 bg-gray-900 text-white backdrop-blur-lg rounded-xl shadow-2xl p-8 sm:p-12 md:p-16 border border-white/20">
            {/* <!-- Image on the Left --> */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start mt-6 mx-auto md:ml-0 lg:ml-20 md:mt-0">
              <img
                className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:w-96 h-auto md:h-72 shadow-xl rounded-2xl"
                src="https://images.unsplash.com/photo-1557459325-b6733cbeae9c?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Swimming Pool"
              />
            </div>
  
            {/* <!-- Content on the Right --> */}
            <div className="w-full md:w-2/3 px-0 sm:px-6 mt-8 md:mt-0 md:ml-4 lg:ml-16 xl:ml-60">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg text-cyan-200">AQUA ELITE</h2>
              <p className="text-xl sm:text-2xl font-light mt-2 text-white/80">Luxury Swimming Pool Experts</p>
              <p className="mt-4 text-base lg:text-lg text-white/70">
                Experience crystal-clear waters and premium pool designs. We specialize in building, maintaining, and
                enhancing pools to create the ultimate aquatic escape.
              </p>
  
              <div className="mt-6 flex flex-col items-center md:items-start gap-4 text-white/80">
                {/* Contact Information */}
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10v6a2 2 0 002 2h14a2 2 0 002-2v-6m-4-4l-4-4m0 0L7 6m4-4v12"
                    ></path>
                  </svg>
                  <span className="text-sm sm:text-base">+91 98765 43210</span>
                </div>
  
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12H3m13.5 0H21m-4.5 0a4.5 4.5 0 00-9 0"
                    ></path>
                  </svg>
                  <span className="text-sm sm:text-base">contact@aquaelite.com</span>
                </div>
  
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L12 22m0 0L6.343 16.657M12 22V9m0 13a5 5 0 100-10 5 5 0 000 10z"
                    ></path>
                  </svg>
                  <span className="text-sm sm:text-base">Kurduwadi, Maharashtra</span>
                </div>
              </div>
  
              <div className="mt-6 mb-4 md:mb-0">
                <a
                  href="#"
                  className="inline-block bg-cyan-400 text-blue-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-cyan-300 transition text-sm sm:text-base"
                >
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Contact
  
  