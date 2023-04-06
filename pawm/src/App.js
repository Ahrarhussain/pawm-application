import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import AssetListPage from './Components/AssetListPage';
import AssetCard from './Components/AssetCard';
import AssetDetailsPage from './Components/AssetDetailsPage';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/AssetList" element={<AssetListPage />} />
        <Route path="/AssetList/AssetCard" element={<AssetCard />} />
        <Route path="/AssetDetails" element={<AssetDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
