

const Contact = () =>{
    return (
        <>
         <div class="h-screen flex items-center justify-center bg-gray-100">
            <div
              class="profile-card w-full min-h-[350px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer bg-white flex flex-row items-center transition-all duration-300 p-5 group"
            >
              <div class="w-[45%] flex justify-center">
                <img 
                  src="/pr.uthviraj96k_14021107_135029699.jpg" 
                  alt="Profile Image" 
                  class="size-56 z-40 border-4 border-white rounded-full group-hover:border-8 transition-all duration-300"
                />
              </div>
              <div class="w-[50%] flex flex-col gap-3">
                <div class="headings text-left">
                  <p class="text-3xl font-serif font-semibold text-[#434955]">Pruthviraj Mohan Kachare</p>
                  <p class="text-lg font-semibold text-[#434955]">Swimming-Pool Owner</p>
                </div>
          
                <div class="w-full">
                  <ul class="space-y-2 text-left text-[#434955] text-lg">
                    <li class="flex items-center gap-2">
                      📞 <span>+91 9623059948</span>
                    </li>
                    <li class="flex items-center gap-2">
                      📧 <span>swimming@gmail.com</span>
                    </li>
                    <li class="flex items-center gap-2">
                      🌐 <a href="www.swimmingpool.com" class="text-blue-500" target="_blank">www.swimming.com</a>
                    </li>
                    <li class="flex items-center gap-2">
                      📍 <span>Kurdukadi</span>
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
