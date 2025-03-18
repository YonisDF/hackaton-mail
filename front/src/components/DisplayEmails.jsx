import React from 'react';

const DisplayEmails = ({ emails, deleteEmail, unquarantineEmail }) => {
    if (!emails || emails.length === 0) {
        return <p>No emails in quarantine.</p>;
    }

    return (
        <div>
            <h2>Quarantined Emails</h2>
            <ul>
                {emails.map((email) => (
                    <li key={email.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <span style={{ marginRight: '10px' }}>{email.title} - {email.sender}</span>
                        <span style={{ marginRight: '10px' }}>{email.date}</span>
                        <span style={{ marginRight: '10px' }}>{email.content}</span>
                        <div>
                            <button 
                                onClick={() => unquarantineEmail(email.id)}
                                style={{ marginRight: '5px', backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                            >
                                Allow
                            </button>
                            <button 
                                onClick={() => deleteEmail(email.id)}
                                style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayEmails;
