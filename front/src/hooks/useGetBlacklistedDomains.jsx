import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetBlacklistedDomains = () => {
    const [blacklistedDomains, setBlacklistedDomains] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlacklistedDomains = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/domain/blacklist/list'); 
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