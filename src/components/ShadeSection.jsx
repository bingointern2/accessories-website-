export default function ShadeSection() {
  return (
    <section className="w-full bg-[#f7f1e8] py-10 px-8">
      
      {/* Banner Container */}
      <div className="relative w-full rounded-[28px] overflow-hidden shadow-lg">
        
        {/* Cover Image */}
        <img
          src="/background img 2.png"
          alt="Luxury Shades Collection"
          className="w-full h-[280px] object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        {/* Text Content */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white">
          
          {/* Decorative Star */}
          <p className="text-5xl font-light leading-none">*</p>

          {/* Main Heading */}
          <h2
            className="text-6xl font-light uppercase leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.03em",
            }}
          >
            SHADES
          </h2>

          {/* Subheading */}
          <p className="text-sm tracking-[0.3em] uppercase mt-3 text-[#d6bfa9]">
            Designed for days that shine
          </p>

          {/* Button */}
          <button className="mt-6 bg-[#e7c79f] text-[#3d2a1a] px-6 py-2 rounded-md text-sm font-semibold uppercase hover:bg-[#d4af37] transition-all duration-300 shadow-md">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

