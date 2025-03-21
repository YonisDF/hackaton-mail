import React, { useState } from 'react';
import useWhitelistDomain from '../hooks/useWhitelistDomain';

const AddToWhitelist = () => {
    const [domain, setDomain] = useState('');
    const { WhitelistDomain, loading, error, success } = useWhitelistDomain();

    const handleAddDomain = async () => {
        if (domain.trim()) {
            await WhitelistDomain(domain);
            setDomain('');
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
                disabled={loading}
            />
            <button onClick={handleAddDomain} disabled={loading}>
                {loading ? "Adding..." : "Add to Whitelist"}
            </button>

            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {success && <p style={{ color: 'green' }}>Domain added successfully!</p>}
        </div>
    );
};

export default AddToWhitelist;
