import React from 'react'
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import { StoreProvider } from './context-reducer/StoreContext';
import { Basket } from './pages/Basket';
import { Home } from './pages/Home';
function App() {
  return (
    <StoreProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/basket" element = {<Basket/>}/>
      </Routes>
    </BrowserRouter>
    </StoreProvider>
  )
}

export default App;
