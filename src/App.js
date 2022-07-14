// import logo from './logo.svg';
import React from 'react';
// import "./App.css";
import Navigatn from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Whyus from './components/Whyus';
import PhotoGallery from './components/PhotoGallery';
import Contact from './components/Contact';
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Tenders from './components/Tenders';

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/whyus" element={<Whyus/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/tenders" element={<Tenders/>}></Route>

    </Routes>

   </>
  );
}
export default App;
