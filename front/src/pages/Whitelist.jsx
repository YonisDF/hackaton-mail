import React from 'react';
import useGetWhitelistedDomains from '../hooks/useGetWhitelistedDomains';
import DisplayDomains from '../components/DisplayDomains';
import Header from '../components/Header';
import AddToWhitelist from '../components/AddToWhitelist';

const Whitelist = () => {
    const { whitelisteddomains, isLoading, error } = useGetWhitelistedDomains();
    const handleAddToWhitelist = () => {
        const addToWhitelistContainer = document.createElement('div');
        document.body.appendChild(addToWhitelistContainer);

        const closeModal = () => {
            document.body.removeChild(addToWhitelistContainer);
        };

        const AddToWhitelistModal = () => (
            <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'white',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                zIndex: 1000
            }}>
                <AddToWhitelist />
                <button onClick={closeModal} style={{ marginTop: '10px' }}>Close</button>
            </div>
        );

        ReactDOM.render(<AddToWhitelistModal />, addToWhitelistContainer);
    };

    if (isLoading) {
        return (
            <main>
                <Header />
                <p>Loading...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main>
                <Header />
                <p>Error: {error.message}</p>
            </main>
        );
    }

    if (!Array.isArray(whitelisteddomains) || whitelisteddomains.length === 0) {
        return (
            <main>
                <Header />
                <button onClick={handleAddToWhitelist} style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    Add to Whitelist
                </button>
                <p>Aucun domaine</p>
            </main>
        );
    }

    return (
        <main>
            <Header />
            <button onClick={handleAddToWhitelist} style={{ position: 'absolute', top: '10px', left: '10px' }}>
                Add to Whitelist
            </button>
            <h1>Whitelisted Domains</h1>
            <DisplayDomains domains={whitelisteddomains} />
        </main>
    );
};

export default Whitelist;