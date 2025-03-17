import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetQuarantinedEmails = () => {
    const [quarantinedEmails, setQuarantinedEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuarantinedEmails = async () => {
            try {
                const response = await axios.get('/api/quarantined-emails');
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