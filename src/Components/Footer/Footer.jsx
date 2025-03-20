

const Footer = () =>{
    return (
       <>
        <div class="flex flex-col min-h-screen">
    <main class="flex-grow p-6 text-center text-yellow-300">
        <h1 class="text-3xl font-bold">Welcome to Swimming-Pool</h1>
    </main>

    <footer class="bg-gradient-to-r from-blue-600 to-purple-500 text-white py-2 w-full">
        <div class="flex flex-col md:flex-row items-center justify-between w-full mx-0 my-0">
            <div class="md:w-auto text-center mx-auto">
                <nav class="flex space-x-6">
                    <a href="#" class="hover:underline">Home</a>
                    <a href="#" class="hover:underline">About</a>
                    <a href="#" class="hover:underline">Contact</a>
                </nav>
                <p class="text-xs mt-1 block">&copy; 2025 Swimming-Pool. All Rights Reserved.</p>
            </div>
            <div class="w-full md:w-2/3 h-28 md:h-36">
                <iframe 
                    class="w-full h-full rounded-lg shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.768719643042!2d75.4172845!3d18.0974835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc45c8d622b365d%3A0x313d9e9c894bc0ba!2sKurduwadi,%20Maharashtra%20413208!5e0!3m2!1sen!2sin!4v1614774785217!5m2!1sen!2sin" 
                    allowfullscreen="" loading="lazy" title="Swimming Pool Location">
                </iframe>
            </div>

        </div>
    </footer>
</div>

       </>
    )
}

export default Footer