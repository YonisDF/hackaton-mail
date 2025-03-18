import React from 'react';
import useGetBlacklistedDomains from '../hooks/useGetBlacklistedDomains';
import DisplayDomains from '../components/DisplayDomains';
import Header from '../components/Header';

const Blacklist = () => {
    const { data: blacklistedDomains, isLoading, error } = useGetBlacklistedDomains();

    if (isLoading) {
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

    if (!Array.isArray(blacklistedDomains) || blacklistedDomains.length === 0) {
        return (
            <>
                <Header />
                <p>Aucun domaine</p>
            </>
        );
    }

    return (
        <main>
        <Header />
            <h1>Blacklisted Domains</h1>
            <DisplayDomains domains={blacklistedDomains} />
        
        </main>
    );
};

export default Blacklist;