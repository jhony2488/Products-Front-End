// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from "../Components/NavBar/NavBar"
import Home from '../Pages/Home';
import CreateProduct from '../Pages/CreateProduct';
import ProductView from '../Pages/Produtct';
import UpdatedProduct from '../Pages/UpdatedProduct';
import NotFound from '../Pages/NotFound';

const RoutesComponente: React.FC = () => {
    return (
        <Router>
               <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-product" element={<CreateProduct />} />
                <Route path="/product" element={<ProductView />} />
                <Route path="/edit-product" element={<UpdatedProduct />} />
                <Route path="*" element={<NotFound />} /> {/* Rota para a página 404 */}
            </Routes>
        </Router>
    );
};

export default RoutesComponente;