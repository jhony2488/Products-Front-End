import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importando Link para navegação

export const NavigationBar: React.FC = () => {
    return (
        <Navbar bg="dark" expand="lg" id="navbarid" style={{ position: "fixed", width: "100%", top: 0 }}>
            <Navbar.Brand style={{ color: "white" }} as={Link} to="/">Meu App de Produtos</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
                <Nav className="me-auto">
                    <Nav.Link style={{ color: "white", marginRight:8 }} as={Link} to="/">Home</Nav.Link>
                    <Nav.Link style={{ color: "white" }} as={Link} to="/create-product">Criar Produto</Nav.Link>
                </Nav>
        </Navbar>
    );
};