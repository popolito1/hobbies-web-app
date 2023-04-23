import React from 'react';
import './App.css';
import {
  Routes,
  Route,
  Router,
} from "react-router-dom";
import Home from './pages/Home';
import LanaDelRey from './pages/LanaDelRey';
import Bugatti from './pages/Bugatti';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
     
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/lana-del-rey' element={<LanaDelRey/>}></Route>
      <Route path='/bugatti' element={<Bugatti/>}></Route>
      <Route path='/recipes' element={<Recipes/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
