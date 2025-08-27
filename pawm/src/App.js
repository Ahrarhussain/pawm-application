import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {HomePage} from './components/HomePage';
import {AssetListPage} from './components/AssetListPage';
import {AssetCard} from './components/AssetCard';
import {AssetDetailsPage} from './components/AssetDetailsPage';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {Reset} from './components/Reset';
import {Dashboard} from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AssetListPage" element={<AssetListPage />} />
        <Route path="/AssetList/AssetCard" element={<AssetCard />} />
        <Route path="/AssetDetails" element={<AssetDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
