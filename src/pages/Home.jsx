import Hero from "../components/Hero";


export default function Home() {
  return (
    <>
      <Hero />

      {/* DISCOVER YOUR STYLE Heading */}
      <div className="w-full bg-[#f7f1e8] text-center py-6">
        <h2
          className="text-5xl font-bold uppercase text-[#5c3b1e] tracking-[0.18em]"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Discover Your Style
        </h2>

        <p className="mt-3 text-sm uppercase tracking-[0.35em] text-[#8b6f47]">
          Curated luxury for every statement
        </p>
      </div>

      
    </>
  );
}