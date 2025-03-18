import { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../config/api';

const useGetBlacklistedDomains = () => {
    const [blacklistedDomains, setBlacklistedDomains] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlacklistedDomains = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/domain/blacklist/list`); 
                console.log("API Response:", response.data); 
                
                if (Array.isArray(response.data)) {
                    setBlacklistedDomains(response.data);
                } else {
                    setBlacklistedDomains([response.data]); 
                }

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
