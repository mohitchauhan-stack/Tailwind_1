import "./App.css";
import heroImg from "./assets/hero_img.png";
import Container from "./components/container.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="layout h-screen bg-linear-to-t from-blue-300/80 to-white">
      <Container>
        <div className="left_line h-screen w-px opacity-30  left-0 absolute  bg-[#64748b]"></div>
        <div className="right_line h-screen w-px opacity-30 right-0 absolute  bg-[#64748b]"></div>
        <Navbar />
        <Hero />
        <div className="hero_image_container w-full relative flex justify-center pt-4">
          <div className="horizontal_line w-screen h-px opacity-30  top-0 absolute  bg-[#64748b]"></div>
          <img
            src={heroImg}
            alt=""
            className="w-6xl h-162.5 absolute rounded-md shadow-[0_7px_13px_5px_rgba(0,0,0,0.3)]"
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
