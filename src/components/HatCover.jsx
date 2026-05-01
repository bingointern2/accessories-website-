export default function HatsCover() {
  return (
    <section className="w-full bg-[#f7f1e8] px-8 pt-8 pb-6">
      <div className="relative w-full h-[295px] rounded-[2.8rem] overflow-hidden shadow-xl">

        {/* Background Image */}
        <img
          src="/hats-cover.png"
          alt="Luxury Hats Collection"
          className="w-full h-full object-cover object-right-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent"></div>

        {/* Left Content */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 z-10">

          {/* Decorative Symbol */}
          
<p className="text-white text-3xl mb-3 leading-none">*</p>

          {/* Heading */}
          <h1
            className="text-white text-5xl font-semibold uppercase leading-[0.9]"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.04em",
            }}
          >
            HATS
          </h1>

          {/* Subtitle */}
          <p
            className="text-[#e7c56f] text-base uppercase mt-6 tracking-[0.38em]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            TIMELESS STYLE FOREVER
          </p>

          {/* Button */}
          <button className="mt-7 bg-[#e0b96d] text-[#2d1b0f] px-7 py-3 rounded-lg text-sm font-semibold uppercase hover:bg-[#d4a94d] transition-all duration-300 shadow-md">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}