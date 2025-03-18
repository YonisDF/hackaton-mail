import React, { useState } from 'react';
import usePostBlacklistDomain from '../hooks/useBlacklistDomain';

const AddToBlacklist = () => {
    const [domain, setDomain] = useState('');
    const { postBlacklistDomain, loading, error, success } = usePostBlacklistDomain();

    const handleAddDomain = async () => {
        if (domain.trim()) {
            await postBlacklistDomain(domain);
            setDomain('');
        } else {
            alert('Please enter a valid domain.');
        }
    };

    return (
        <div>
            <h2>Add to Blacklist</h2>
            <input
                type="text"
                placeholder="Enter domain to blacklist"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                disabled={loading}
            />
            <button onClick={handleAddDomain} disabled={loading}>
                {loading ? "Adding..." : "Add to Blacklist"}
            </button>

            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {success && <p style={{ color: 'green' }}>Domain added successfully!</p>}
        </div>
    );
};

export default AddToBlacklist;
