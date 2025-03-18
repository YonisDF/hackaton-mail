import React, { useState } from 'react';
import  useWhitelistDomain  from '../hooks/useWhitelistDomain';

const AddToWhitelist = () => {
    const [domain, setDomain] = useState('');
    const WhitelistDomain = useWhitelistDomain();

    const handleAddDomain = () => {
        if (domain.trim()) {
            WhitelistDomain(domain)
                .then(() => {
                    alert('Domain added to whitelist successfully!');
                    setDomain('');
                })
                .catch((error) => {
                    console.error('Error adding domain to whitelist:', error);
                    alert('Failed to add domain to whitelist.');
                });
        } else {
            alert('Please enter a valid domain.');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter domain to whitelist"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
            />
            <button onClick={handleAddDomain}>Add to Whitelist</button>
        </div>
    );
};

export default AddToWhitelist;