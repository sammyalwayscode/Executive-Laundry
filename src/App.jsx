import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Order from "./Components/Order/Order";
import Pricing from "./Components/Pricing/Pricing";
import Thanks from "./Components/Thanks/Thanks";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order_sent" element={<Thanks />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
