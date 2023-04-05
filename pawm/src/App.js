import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import AssetListPage from './Components/AssetListPage';
import AssetCard from './Components/AssetCard';
import AssetDetailsPage from './Components/AssetDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/AssetList" element={<AssetListPage />} />
        <Route exact path="/AssetList/AssetCard" element={<AssetCard />} />
        <Route exact path="/AssetDetails" element={<AssetDetailsPage />} />
      </Routes>
    </BrowserRouter>
    // <h1>something is rendering</h1>
  );
}

export default App;
