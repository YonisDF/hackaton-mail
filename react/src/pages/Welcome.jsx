import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header';
import Header from '../components/Header';

const Welcome = () => {
    return (
        <main>
            <Header />
            <h1>Bonjour</h1>
            <p>Outil de gestion de mail</p>
            <div>
                <Link to="/blacklist">
                    <button>Blacklist</button>
                </Link>
                <Link to="/whitelist">
                    <button>Whitelist</button>
                </Link>
                <Link to="/quarantine">
                    <button>Quarantaine</button>
                </Link>
            </div>
        </main>
    );
};

export default Welcome;