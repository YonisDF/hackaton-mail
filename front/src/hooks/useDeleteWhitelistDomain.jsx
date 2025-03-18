import { useState } from "react";
import axios from "axios";
import API_URL from "../config/api";

const useDeleteWhitelistDomain = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const deleteWhitelistDomain = async (domain) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // Remove the domain from the whitelist
            const response = await axios.patch(`${API_URL}/api/domain/whitelist/delete/`, { name: domain  });
            if (response.status === 200) {
                setSuccess(true);
            }
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return { deleteWhitelistDomain, loading, error, success };
};

export default useDeleteWhitelistDomain;
