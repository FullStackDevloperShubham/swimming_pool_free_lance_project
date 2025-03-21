

const About = () => {
    return (
        <>
            <div class="mt-40 w-full flex items-center justify-center text-white px-4">
                <div class="w-full max-w-none flex flex-col md:flex-row items-center text-center md:text-left px-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-12 md:p-16 border border-white/20">

                    <div class="w-full md:w-2/3 px-6">
                        <h2 class="text-5xl font-bold drop-shadow-lg">SHUBHAM</h2>
                        <p class="text-2xl font-light mt-2">Web Developer & Designer</p>
                        <p class="mt-4 text-lg">
                            Passionate about creating beautiful and functional web experiences. Specialized in modern web technologies. Dedicated to building user-friendly and visually appealing digital solutions.
                        </p>
                        <div class="mt-6">
                            <a href="#" class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Learn More</a>
                        </div>
                    </div>

                    <div class="w-full md:w-1/3 flex justify-center mt-6 md:mt-0">
                        <img class="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-white shadow-xl" src="https://via.placeholder.com/200" alt="Profile Picture" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default About 