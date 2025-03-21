

const Contact = () => {
  return (
    <>
      <div class=" flex items-start justify-center min-h-screen w-full p-6">
        <div
          class="w-full max-w-full min-h-[400px] rounded-lg shadow-2xl overflow-hidden cursor-pointer bg-white/30 backdrop-blur-lg flex flex-col md:flex-row items-center transition-all duration-300 p-8 border border-white/50 mt-10"
        >
          <div class="w-full md:w-[40%] flex justify-center p-6">
            <img
              src="/pr.uthviraj96k_14021107_135029699.jpg"
              alt="Profile Image"
              class="size-56 border-4 border-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            />
          </div>
          <div class="w-full md:w-[60%] flex flex-col gap-6 text-black text-center md:text-left">
            <div class="headings">
              <p class="text-4xl font-serif font-semibold drop-shadow-lg">Pruthviraj Mohan Kachare</p>
              <p class="text-xl font-semibold drop-shadow">Swimming Pool Owner</p>
            </div>
            <div class="w-full">
              <ul class="space-y-4 text-lg">
                <li class="flex justify-center md:justify-start items-center gap-4">
                  📞 <span class="hover:text-yellow-300 transition">+91 9623059948</span>
                </li>
                <li class="flex justify-center md:justify-start items-center gap-4">
                  📧 <span class="hover:text-yellow-300 transition">swimming@gmail.com</span>
                </li>
                <li class="flex justify-center md:justify-start items-center gap-4">
                  🌐 <a href="https://www.swimmingpool.com" class="text-yellow-300 hover:underline" target="_blank">www.swimming.com</a>
                </li>
                <li class="flex justify-center md:justify-start items-center gap-4">
                  📍 <span class="hover:text-yellow-300 transition">Kurdukadi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
