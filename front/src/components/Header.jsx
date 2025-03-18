import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const headerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#f8f9fa',
        padding: '10px 0',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
    };

    const ulStyle = {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        margin: 0,
        padding: 0,
    };

    const liStyle = {
        margin: '0 10px',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#007bff',
        fontWeight: 'bold',
    };

    return (
        <header style={headerStyle}>
            <ul style={ulStyle}>
                <li style={liStyle}>
                    <Link to="/" style={linkStyle}>Acceuil</Link>
                </li>
                <li style={liStyle}>
                    <Link to="/whitelist" style={linkStyle}>Whitelist</Link>
                </li>
                <li style={liStyle}>
                    <Link to="/blacklist" style={linkStyle}>Blacklist</Link>
                </li>
                <li style={liStyle}>
                    <Link to="/quarantine" style={linkStyle}>Quarantaine</Link>
                </li>
            </ul>
        </header>
    );
};



export default Header;