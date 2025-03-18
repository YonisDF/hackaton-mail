import { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../config/api';

const useGetQuarantinedEmails = () => {
    const [quarantinedEmails, setQuarantinedEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuarantinedEmails = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/mail/quarantine/list`);
                setQuarantinedEmails(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchQuarantinedEmails();
    }, []);

    return { quarantinedEmails, loading, error };
};

export default useGetQuarantinedEmails;