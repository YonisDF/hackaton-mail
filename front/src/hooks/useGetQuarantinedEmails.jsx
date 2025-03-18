import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetQuarantinedEmails = () => {
    const [quarantinedEmails, setQuarantinedEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuarantinedEmails = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/mail/quarantine/list');
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