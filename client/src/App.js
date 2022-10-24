import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountHeader from './components/Account/Header'
import Home from './pages/Home';
import SavedSearch from './pages/SavedSearch';
import SavedHomes from './pages/SavedHomes';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/SavedHomes" exact element={<AccountHeader children={<SavedHomes />} />} />
        <Route path="/SavedSearch" exact element={<AccountHeader children={<SavedSearch />} />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
