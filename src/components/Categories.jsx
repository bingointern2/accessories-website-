import categoriesData from "../data/categoriesData";

export default function Categories() {
  return (
    <section className="w-full bg-[#f7f1e8] py-6 px-8 -mt-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categoriesData.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Luxury Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Title */}
            <div className="absolute top-5 w-full text-center px-3">
              <h2
                className="text-white text-2xl font-extrabold uppercase leading-tight drop-shadow-xl"
                style={{
                  fontFamily: "'Anton', sans-serif",
                  letterSpacing: "0.03em",
                }}
              >
                {item.title}
              </h2>
            </div>

            {/* Premium Hover Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37] rounded-3xl group-hover:shadow-[0_0_18px_rgba(212,175,55,0.25)] transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}