
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

// import ChatBotArea from "../components/ChatBotArea";
// import Features from "../components/Features";
// import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;


