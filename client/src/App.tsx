import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {HomePage, MenuPage, HistoryPage, Dishes, GaleryDishesPage, СhefsPage, AboutPage, MenuPage2} from './App/pages'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/menu2' element={<MenuPage2/>}/>
        <Route path='/history' element={<HistoryPage/>}/>
        <Route path='/dishes' element={<Dishes/>}/>
        <Route path='/galerydishes' element={<GaleryDishesPage/>}/>
        <Route path='/chefs' element={<СhefsPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;