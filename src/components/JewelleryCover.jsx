export default function JewelleryCover() {
  return (
    <section className="w-full bg-[#f7f1e8] px-8 py-8">
      
      {/* Banner Container */}
      <div className="relative w-full rounded-[28px] overflow-hidden shadow-lg">
        
        {/* Cover Image */}
        <img
          src="/jewellery-cover.png"
          alt="Luxury Jewellery Collection"
          className="w-full h-[280px] object-cover"
          style={{
            objectPosition: "center center",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/45 to-transparent"></div>

        {/* Left Content */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white">
          
          {/* Decorative Star */}
          <p className="text-4xl font-light leading-none mb-3">*</p>

          {/* Main Heading */}
          <h2
            className="text-6xl font-semibold uppercase leading-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.04em",
            }}
          >
            JEWELLERY
          </h2>

          {/* Subheading */}
          <p className="text-sm tracking-[0.35em] uppercase mt-5 text-[#e0c27d]">
            Crafted to shine forever
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
