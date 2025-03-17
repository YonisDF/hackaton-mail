import { useState } from 'react';
import axios from 'axios';

const usePutAllowEmail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const unquarantineEmail = async (emailId) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await axios.put(`/api/emails/${emailId}/unquarantine`);
            if (response.status === 200) {
                setSuccess(true);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return { unquarantineEmail, loading, error, success };
};

export default usePutAllowEmail;