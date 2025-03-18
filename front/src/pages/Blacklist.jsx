import React, { useEffect, useState } from 'react';
import useGetBlacklistedDomains from '../hooks/useGetBlacklistedDomains';
import useDeleteBlacklistDomain from '../hooks/useDeleteBlacklistDomain';
import DisplayDomains from '../components/DisplayDomains';
import Header from '../components/Header';
import AddToBlacklist from '../components/AddToBlacklist';

const Blacklist = () => {
    const { blacklistedDomains, loading, error } = useGetBlacklistedDomains();
    const { deleteBlacklistDomain } = useDeleteBlacklistDomain();
    const [domains, setDomains] = useState([]);
    const [showModal, setShowModal] = useState(false); // ✅ Control modal visibility

    useEffect(() => {
        setDomains(blacklistedDomains);
    }, [blacklistedDomains]);

    const handleDeleteDomain = async (domain) => {
        await deleteBlacklistDomain(domain);
        setDomains(domains.filter(d => d.name !== domain)); 
    };

    return (
        <main>
            <Header />
            <h1>Blacklisted Domains</h1>
            {domains.length > 0 ? (
                <DisplayDomains domains={domains} deleteDomain={handleDeleteDomain} />
            ) : (
                <p>No blacklisted domains.</p>
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
                    <AddToBlacklist />
                    <button onClick={() => setShowModal(false)} style={{ marginTop: '10px' }}>Close</button>
                </div>
            )}

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <button onClick={() => setShowModal(true)}>Add to Blacklist</button>
            </div>
        </main>
    );
};

export default Blacklist;
