import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "../views/Home";
import Services from "../views/Services";
import Safeguarding from "../views/Safeguarding";
import Contact from "../views/Contact";
import Join from "../views/Join";
import Notfound from "../views/Notfound";
import Privacy from "../views/Privacy";
import About from "../views/About";

const Routing = () => {
    return ( 
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/our-services" element={<Services/>}></Route>
                    <Route path="/safeguarding" element={<Safeguarding/>}></Route>
                    <Route path="/contact-us" element={<Contact/>}></Route>
                    <Route path="/join-us" element={<Join/>}></Route>
                    <Route path="/privacy-policy" element={<Privacy/>}></Route>
                    <Route path="/about-us" element={<About/>}></Route>
                    <Route path="*" element={<Notfound/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Routing;