// Hero.jsx with bottom curved border restored

export default function Hero() {
  return (
    <section className="relative w-full rounded-b-[10px] overflow-hidden">
      <img
        src="/background img.png"
        alt="Summer Collection"
        loading="lazy"
        className="w-full h-[700px] object-cover object-center"
      />

      <div className="absolute inset-0 flex items-center justify-between px-10">

        {/* Left Heading */}
        <div className="max-w-[40%] mt-14">
          <h1 className="text-[#422b16] font-extrabold uppercase leading-[0.9] text-[6rem] drop-shadow-lg">
            CHASING THE <br />
            SUN
          </h1>
        </div>

        {/* Right Side Text */}
        <div className="max-w-[380px] text-right mt-10">
          <h2
            className="text-[#3e2415] text-2xl font-extrabold uppercase leading-snug"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              textShadow: "2px 2px 8px rgba(255,255,255,0.22)",
              letterSpacing: "0.04em",
            }}
          >
            Elevate Your
            <br />
            Everyday
            <br />
            Elegance
          </h2>

          <button className="mt-6 px-8 py-3 bg-[#d4af37] text-black text-lg font-medium rounded-full hover:bg-[#c49b2e] transition-all duration-300 shadow-lg">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}
