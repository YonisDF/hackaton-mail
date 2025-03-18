import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetWhitelistedDomains = () => {
    const [whitelisteddomains, setDomains] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDomains = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/domain/whitelist/list', {
                    
                    mode: 'cors',
                });
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