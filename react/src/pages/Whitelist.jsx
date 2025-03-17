import React from 'react';
import useGetWhitelistedDomains from '../hooks/useGetWhitelistedDomains';
import DisplayDomains from '../components/DisplayDomains';
import Header from '../components/Header';

const Whitelist = () => {
    const { whitelisteddomains, isLoading, error } = useGetWhitelistedDomains();

    if (isLoading) {
        <main>
        <Header />
        return <p>Loading...</p>
        </main>;
    }

    if (error) {
        <main>
        <Header />
        return <p>Error: {error.message}</p>
        </main>;
    }

    if (!Array.isArray(whitelisteddomains) || whitelisteddomains.length === 0) {
        return (
        <main>
        <Header />
        <p>Aucun domaine</p>
        </main>
        );
    }

    return (
        <main>
            <Header />
            <h1>Whitelisted Domains</h1>
            <DisplayDomains domains={whitelisteddomains} />
        </main>
    );
};

export default Whitelist;