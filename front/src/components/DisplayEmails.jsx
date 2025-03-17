import React from 'react';

const DisplayEmails = ({ emails }) => {
    return (
        <div>
            <h2>Email List</h2>
            <ul>
                {emails.map((email, index) => (
                    <li key={index}>
                        <p><strong>From:</strong> {email.sender}</p>
                        <p><strong>Subject:</strong> {email.title}</p>
                        <p><strong>Body:</strong> {email.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayEmails;