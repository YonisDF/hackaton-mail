import { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../config/api';

const useGetWhitelistedDomains = () => {
    const [whitelisteddomains, setDomains] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDomains = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/domain/whitelist/list/`, {
                    
                    
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