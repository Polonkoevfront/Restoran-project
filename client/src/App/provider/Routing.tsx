import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { AboutPage, Dishes, GaleryDishesPage, СhefsPage, HistoryPage, HomePage, MenuPage, MenuPage2 } from '../pages';

export const Routing = () => {
    return (
        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/menu' element={<MenuPage />} />
            <Route path='/menu2' element={<MenuPage2 />} />
            <Route path='/history' element={<HistoryPage />} />
            <Route path='/dishes' element={<Dishes />} />
            <Route path='/galerydishes' element={<GaleryDishesPage />} />
            <Route path='/chefs' element={<СhefsPage />} />
            <Route path='/about' element={<AboutPage />} />

        </Routes>
    )
};