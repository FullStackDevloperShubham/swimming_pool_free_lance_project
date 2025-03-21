

const About = () =>{
  return (
     <>
     <div class=" mt-40 w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div class="max-w-5xl w-full flex flex-col md:flex-row items-center text-center md:text-left px-8">
            
            <div class="md:w-2/3 px-6">
                <h2 class="text-5xl font-bold">SHUBHAM</h2>
                <p class="text-2xl font-light mt-2">Web Developer & Designer</p>
                <p class="mt-4 text-lg">
                    Passionate about creating beautiful and functional web experiences. Specialized in modern web technologies. Dedicated to building user-friendly and visually appealing digital solutions.
                </p>
                <div class="mt-6">
                    <a href="#" class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Learn More</a>
                </div>
            </div>

            <div class="md:w-1/3 flex justify-center mt-6 md:mt-0">
                <img class="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-white shadow-xl" src="https://via.placeholder.com/200" alt="Profile Picture"/>
            </div>

        </div>
    </div>

    
     </>
  )    
}

export default About 