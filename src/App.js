import "./styles.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.js";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import History from "./routes/History";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className="App">
      <ScrollToTop />
      
        <Routes>
          <Route exact path = "/jxe-website" element={<Home />} />
          <Route path= "/about" element={<About />} />
          <Route path= "/service" element={<Service />} />
          <Route path= "/history" element={<History />} />
          <Route path= "/contact" element={<Contact />} />
        </Routes>
      
    </div>
  );
}
