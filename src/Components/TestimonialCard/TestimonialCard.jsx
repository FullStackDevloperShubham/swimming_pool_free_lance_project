
const TestimonialCard = () => {

    // cards for testimonials
    // Testimonial Data
    const testimonials = [
        {
            name: "John Doe",
            image: "https://via.placeholder.com/80",
            review: "Aqua Elite transformed our backyard into a luxurious paradise! Their team was professional, and the pool design exceeded our expectations.",
        },
        {
            name: "Sarah Smith",
            image: "https://via.placeholder.com/80",
            review: "Exceptional service! The pool maintenance team is always on time and keeps our pool sparkling clean.",
        },
        {
            name: "Michael Johnson",
            image: "https://via.placeholder.com/80",
            review: "Their custom pool designs are top-notch! We got exactly what we envisioned.",
        },
        {
            name: "Emily Davis",
            image: "https://via.placeholder.com/80",
            review: "Amazing customer support and attention to detail. Highly recommended!",
        }
    ];
    
    return (
        <div className="px-6 py-12 bg-gray-900 text-white mt-10">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-300">
                What Our Clients Say
            </h2>

            {/* Testimonial Cards */}
            <div className="flex flex-wrap justify-center gap-6">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-80 md:w-96 bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl">
                        {/* Client Info */}
                        <div className="flex items-center gap-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full border-4 border-cyan-300 shadow-lg"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                <p className="text-sm text-white/70">Verified Client</p>
                                {/* Star Ratings */}
                                <div className="flex mt-1 text-yellow-400">
                                    {Array(5).fill().map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Testimonial */}
                        <p className="mt-4 text-sm md:text-base text-white/80">
                            {testimonial.review}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default TestimonialCard 