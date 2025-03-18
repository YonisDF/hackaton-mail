import { useState } from "react";
import axios from "axios";

const useDeleteBlacklistDomain = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const deleteBlacklistDomain = async (domain) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // Remove the domain from the blacklist
            const response = await axios.patch("http://127.0.0.1:8000/api/domain/blacklist/delete", { domain });
            if (response.status === 200) {
                setSuccess(true);
            }
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return { deleteBlacklistDomain, loading, error, success };
};

export default useDeleteBlacklistDomain;