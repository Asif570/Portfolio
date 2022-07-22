import "./App.css";
import Contactme from "./Components/Contactme/Contactme";
import Exprience from "./Components/Exrience/Exprience";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Testiomonial from "./Components/Testmonial/Testiomonial";
import Works from "./Components/Works/Works";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.darkMood);
  return (
    <div
      className="App"
      style={{
        background: theme ? "black" : "",
        color: theme ? "#ffffff" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Exprience />
      <Works />
      <Portfolio />
      <Testiomonial />
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
