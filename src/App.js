import { Route, Routes } from "react-router-dom";
import "antd/dist/antd.min.css";
import "../src/css/main.scss";
import "../src/css/main_t.scss";
import "../src/css/main_m.scss";
import "../src/css/fonts.scss";
import "../src/css/reset.scss";
import "../src/css/dialog.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Value from "./components/pages/Value";
import About from "./components/pages/About";
import Jobs from "./components/pages/Jobs";
import Location from "./components/pages/Location";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>   
     <ScrollToTop />
      <Header />  
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About/*" element={<About />} />
        <Route path="/Value/*" element={<Value />} />
        <Route path="/Jobs/*" element={<Jobs />} />
        <Route path="/Location/*" element={<Location />} />
      </Routes>
      <Footer />    
    </>
  );
}

export default App;
