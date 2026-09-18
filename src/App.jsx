import "./App.css";
import Container from "./components/container.jsx";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="layout h-[100vh] bg-gradient-to-t from-blue-200 to-white">
      <Container>
        <Navbar />
      </Container>
    </div>
  );
}

export default App;
