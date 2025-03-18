import React, { useEffect, useState } from 'react';
import useGetWhitelistedDomains from '../hooks/useGetWhitelistedDomains';
import useDeleteWhitelistDomain from '../hooks/useDeleteWhitelistDomain';
import DisplayDomains from '../components/DisplayDomains';
import Header from '../components/Header';
import AddToWhitelist from '../components/AddToWhitelist';

const Whitelist = () => {
    const { whitelisteddomains, loading, error } = useGetWhitelistedDomains();
    const { deleteWhitelistDomain } = useDeleteWhitelistDomain();
    const [domains, setDomains] = useState([]);
    const [showModal, setShowModal] = useState(false); 

    useEffect(() => {
        setDomains(whitelisteddomains);
    }, [whitelisteddomains]);

    const handleDeleteDomain = async (domain) => {
        await deleteWhitelistDomain(domain);
        setDomains(domains.filter(d => d.name !== domain)); // Update UI immediately
    };

    return (
        <main>
            <Header />
            <h1>Whitelisted Domains</h1>
            {domains.length > 0 ? (
                <DisplayDomains domains={domains} deleteDomain={handleDeleteDomain} />
            ) : (
                <p>No whitelisted domains.</p>
            )}

            
            {showModal && (
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
                    <button onClick={() => setShowModal(false)} style={{ marginTop: '10px' }}>Close</button>
                </div>
            )}

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <button onClick={() => setShowModal(true)}>Add to Whitelist</button>
            </div>
        </main>
    );
};

export default Whitelist;
