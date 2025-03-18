import { useState } from "react";
import axios from "axios";
import API_URL from "../config/api";

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
            const response = await axios.patch(`${API_URL}/api/domain/blacklist/delete/`, { name : domain });
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