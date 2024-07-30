import React from 'react'
import './App.css'
import HomePage from './components/HomePage'
import PricingPage from './components/PricingPage';
import ContactUs from './components/ContactUs/Contact';

import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  )
}

export default App
