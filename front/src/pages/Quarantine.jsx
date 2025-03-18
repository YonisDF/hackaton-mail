import React from 'react';
import useGetQuarantinedEmails from '../hooks/useGetQuarantinedEmails.jsx';
import DisplayEmails from '../components/DisplayEmails';
import Header from '../components/Header';

const Quarantine = () => {
    const { emails, isLoading, error } = useGetQuarantinedEmails();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!emails || emails.length === 0) {
        return( 
        <main>
        <Header />
        <p>Aucun email en quarantaine</p>
        </main>
        );
    }

    return (
        <main>
        <Header />
            <h1>Quarantined Emails</h1>
            <DisplayEmails emails={emails} />
        </main>
    );
};

export default Quarantine;