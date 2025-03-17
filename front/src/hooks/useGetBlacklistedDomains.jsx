import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetBlacklistedDomains = () => {
    const [blacklistedDomains, setBlacklistedDomains] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlacklistedDomains = async () => {
            try {
                const response = await axios.get('/api/blacklisted-domains'); // Replace with your API endpoint
                setBlacklistedDomains(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlacklistedDomains();
    }, []);

    return { blacklistedDomains, loading, error };
};

export default useGetBlacklistedDomains;