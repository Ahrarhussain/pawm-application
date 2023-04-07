import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import AssetListPage from './Components/AssetListPage';
import AssetCard from './Components/AssetCard';
import AssetDetailsPage from './Components/AssetDetailsPage';
import Login from './Components/Login';
import Register from './Components/Register';
import Reset from './Components/Reset';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AssetList" element={<AssetListPage />} />
        <Route path="/AssetList/AssetCard" element={<AssetCard />} />
        <Route path="/AssetDetails" element={<AssetDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
