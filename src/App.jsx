import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShadeSection from "./components/ShadeSection";
import ShadesProducts from "./components/ShadesProducts";
import JewelleryCover from "./components/JewelleryCover";
import JewelleryProducts from "./components/JewelleryProducts";
import HatsCover from "./components/HatCover";
import HatsProducts from "./components/HatProducts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#f7f1e8] min-h-screen overflow-x-hidden">
      <Navbar />
      <Home />
      <ShadeSection />
      <ShadesProducts />
      <JewelleryCover />
      <JewelleryProducts />
      <HatsCover />
      <HatsProducts />
      <Footer />
    </div>
  );
}

export default App;