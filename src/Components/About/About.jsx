
const About = () => {
    return (
        <>
            <div class="mt-10 w-full flex items-center justify-center text-white px-4">
                <div class="w-full max-w-none flex flex-col md:flex-row items-center text-center md:text-left px-8 bg-gray-900 text-white backdrop-blur-lg rounded-xl shadow-2xl p-12 md:p-16 border border-white/20">
                    <div class="w-full md:w-2/3 px-6">
                        <h2 class="text-5xl font-bold drop-shadow-lg text-cyan-200">AQUA ELITE</h2>
                        <p class="text-2xl font-light mt-2 text-white/80">Luxury Swimming Pool Experts</p>
                        <p class="mt-4 text-lg text-white/70">
                            Experience crystal-clear waters and premium pool designs. We specialize in building, maintaining, and enhancing pools to create the ultimate aquatic escape.
                        </p>
                        <div class="mt-6">
                            <a href="#" class="bg-cyan-400 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 transition">Explore Our Services</a>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 flex justify-center mt-6 md:mt-0">
                        <img class="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-cyan-300 shadow-xl" src="https://via.placeholder.com/200" alt="Swimming Pool" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default About 