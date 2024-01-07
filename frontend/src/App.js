import "./App.css";
import Navbar from "./components/Navbar";
// import Carousel from "./components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./components/Carousel";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import FullRecipe from "./components/FullRecipe";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Carousel /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="/recipe/:id" element={<FullRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
