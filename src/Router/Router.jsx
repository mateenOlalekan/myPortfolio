import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Portfolio from "../Components/PortFolio/PortFolio";
import Contact from "../Components/Contact/Contact";

import Nav from "../Components/Nav/Nav";
import Theme from "../Components/Theme/Theme";


function Router() {
  return (
    <BrowserRouter>
      <Nav/>
      <Theme/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;