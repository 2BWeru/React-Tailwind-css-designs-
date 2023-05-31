import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Testimonials from "./components/testimonials";
import Card from "./components/card";

function App() {
  return (
   <div>
   <Navbar />
   <Hero />
   <Features />
   <Testimonials />
   <Card />
   <Footer />
   </div>
  );
}

export default App;
