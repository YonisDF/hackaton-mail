import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetWhitelistedDomains = () => {
    const [whitelisteddomains, setDomains] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDomains = async () => {
            try {
                const response = await axios.get('/api/whitelisted-domains');
                setDomains(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchDomains();
    }, []);

    return { whitelisteddomains, loading, error };
};

export default useGetWhitelistedDomains;