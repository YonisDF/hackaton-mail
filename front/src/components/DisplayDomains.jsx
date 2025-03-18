import React from 'react';

const DisplayDomains = ({ domains, deleteDomain }) => {
    if (!domains || domains.length === 0) {
        return <p>No domains to display.</p>;
    }

    return (
        <div>
            <h2>Domain List</h2>
            <ul>
                {domains.map((domain) => (
                    <li key={domain.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span>{domain.name}</span>
                        <button onClick={() => deleteDomain(domain.name)} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayDomains;
