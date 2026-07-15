import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CableCuttingMachines from './pages/CableCuttingMachines';
import ProductDetail from './pages/ProductDetail';
import AboutCompany from './pages/AboutCompany';
import Contacts from './pages/Contacts';
import DeliveryPayment from './pages/DeliveryPayment';
import Guarantee from './pages/Guarantee';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/cable-cutting-machines" element={<CableCuttingMachines />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<AboutCompany />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/delivery" element={<DeliveryPayment />} />
        <Route path="/guarantee" element={<Guarantee />} />
      </Routes>
      <Footer />
    </Router>
  );
}
