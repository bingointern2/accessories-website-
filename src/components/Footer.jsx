export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#2d1f1a] via-[#3d2a22] to-[#2d1f1a] text-white mt-16">
      
      {/* Main Footer */}
      <div className="max-w-[1600px] mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2
            className="text-3xl font-semibold tracking-[0.18em]"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            CROWN & SHINE
          </h2>

          <p className="mt-4 text-sm text-[#d8c2ad] leading-relaxed max-w-[280px]">
            Premium accessories crafted to elevate every look with elegance,
            sophistication, and timeless luxury.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#e7c56f] mb-4 uppercase">
            Shop
          </h3>
          <ul className="space-y-3 text-sm text-[#f5e6d3]">
            <li className="hover:text-[#e7c56f] cursor-pointer transition">
              Hats & Caps
            </li>
            <li className="hover:text-[#e7c56f] cursor-pointer transition">
              Shades
            </li>
            <li className="hover:text-[#e7c56f] cursor-pointer transition">
              Jewellery
            </li>
            <li className="hover:text-[#e7c56f] cursor-pointer transition">
              Passport Sleeves
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-[#e7c56f] mb-4 uppercase">
            Support
          </h3>
          <ul className="space-y-3 text-sm text-[#f5e6d3]">
            <li className="hover:text-[#e7c56f] cursor-pointer transition">
              Contact Us
            </li>
            <li className="hover:text-[#e7c56f] cursor-pointer transition">
              Shipping Policy
            </li>
            <li className="hover:text-[#e7c56f] cursor-pointer transition">
              Returns
            </li>
            <li className="hover:text-[#e7c56f] cursor-pointer transition">
              FAQs
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-[#e7c56f] mb-4 uppercase">
            Stay Connected
          </h3>

          <p className="text-sm text-[#f5e6d3] mb-4">
            Subscribe for exclusive launches, offers & luxury updates.
          </p>

          <div className="flex items-center bg-white rounded-xl overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 w-full text-black outline-none text-sm"
            />
            <button className="bg-[#e7c56f] px-5 py-3 text-black font-semibold hover:bg-[#d4af37] transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#634225] py-5 px-8 text-center text-sm text-[#d8c2ad]">
        © 2026 Crown & Shine. All Rights Reserved | Designed for timeless elegance.
      </div>
    </footer>
  );
}