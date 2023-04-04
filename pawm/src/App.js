import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import AssetListPage from './Components/AssetListPage';
import AssetDetailsPage from './Components/AssetDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"><HomePage/></Route>
        <Route exact path="/AssetList"><AssetListPage/></Route>
        <Route exact path="/AssetDetails"><AssetDetailsPage/></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
