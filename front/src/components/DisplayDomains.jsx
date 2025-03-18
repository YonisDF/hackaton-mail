import React from 'react';

const DisplayDomains = ({ domains }) => {
    if (!domains || domains.length === 0) {
        return <p>No domains to display.</p>;
    }

    return (
        <div>
            <h2>Domain List</h2>
            <ul>
                {domains.map((domain, index) => (
                    <li key={index}>{domain}</li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayDomains;