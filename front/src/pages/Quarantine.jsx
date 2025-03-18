import React, { useEffect, useState } from 'react';
import useGetQuarantinedEmails from '../hooks/useGetQuarantinedEmails';
import useDeleteEmail from '../hooks/useDeleteEmail';
import usePutAllowEmail from '../hooks/useAllowEmail';
import DisplayEmails from '../components/DisplayEmails';
import Header from '../components/Header';

const Quarantine = () => {
    const { quarantinedEmails, loading, error } = useGetQuarantinedEmails();
    const { deleteEmail } = useDeleteEmail();
    const { unquarantineEmail } = usePutAllowEmail();
    const [emails, setEmails] = useState([]);

    
    useEffect(() => {
        setEmails(quarantinedEmails);
    }, [quarantinedEmails]);

    const handleDeleteEmail = async (emailId) => {
        await deleteEmail(emailId);
        setEmails(emails.filter(email => email.id !== emailId)); // Remove from UI immediately
    };

    const handleUnquarantineEmail = async (emailId) => {
        await unquarantineEmail(emailId);
        setEmails(emails.filter(email => email.id !== emailId)); // Remove from UI immediately
    };

    if (loading) {
        return (
            <>
                <Header />
                <p>Loading...</p>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Header />
                <p>Error: {error.message}</p>
            </>
        );
    }

    return (
        <main>
            <Header />
            <h1>Quarantined Emails</h1>
            {emails.length > 0 ? (
                <DisplayEmails emails={emails} deleteEmail={handleDeleteEmail} unquarantineEmail={handleUnquarantineEmail} />
            ) : (
                <p>No emails in quarantine.</p>
            )}
        </main>
    );
};

export default Quarantine;
