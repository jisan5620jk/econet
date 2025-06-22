import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="bg-[#042012] py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center pb-5">
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <TestimonialCard
            quote="Partnering with this team helped us make our business more sustainable without into compromising ecological"
            name="David John"
            role="UI Designer at — Dreami IT"
            avatar="https://randomuser.me/api/portraits/women/44.jpg"
            rating={5}
            isActive={true}
          />
          <TestimonialCard
            quote="Partnering with this team helped us make our business more sustainable without into compromising ecological"
            name="David John"
            role="UI Designer at — Dreami IT"
            avatar="https://randomuser.me/api/portraits/women/44.jpg"
            rating={4}
            isActive={false}
          />
        </div>

        {/* Right Side */}
        <div className="relative">
          <div className="rounded-[30px] overflow-hidden">
            <img
              src="https://via.placeholder.com/600x400" // Replace with actual image
              alt="Happy customer"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Green Card */}
          <div className="absolute bottom-6 left-6 bg-[#3DD98E] text-[#042012] rounded-2xl p-4 flex items-center gap-4 shadow-lg w-fit">
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/women/43.jpg"
                alt="person 1"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="person 2"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-white flex items-center justify-center text-xs font-bold text-[#3DD98E]">
                +5K
              </div>
            </div>
            <p className="text-sm font-semibold">Trusted Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
