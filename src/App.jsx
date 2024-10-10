import React from 'react'
import './App.css'
import HomePage from './components/HomePage'
import PricingPage from './components/PricingPage'
import Signup from "./components/Signup/Signup"
import Login from "./components/Signup/Login";

import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App
