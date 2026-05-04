import jwelProduct from "../data/jewelleryData";

export default function JewelleryProducts() {
  return (
    <section className="w-full bg-[#f7f1e8] px-8 py-8 -mt-2">

      {/* Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div
            key={index}
            className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-xl bg-[#f9f7f4]">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Wishlist */}
              <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-sm hover:scale-110 transition">
                ♡
              </button>

              {/* Cart */}
              <button className="absolute bottom-3 right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-2.5 shadow-md hover:scale-110 transition">
                🛍
              </button>
            </div>

            {/* Product Details */}
            <div className="mt-3">
              <h3 className="text-sm font-semibold text-[#2d1f1a] truncate">
                {item.name}
              </h3>

              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-bold text-black">
                  {item.price}
                </span>

                <span className="text-sm text-purple-600 font-semibold">
                  ★ 4.8
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}