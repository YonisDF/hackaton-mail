import { useState } from "react";
import axios from "axios";

const usePostBlacklistDomain = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const postBlacklistDomain = async (domain) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await axios.post("/api/blacklist", { domain });
            if (response.status === 200) {
                setSuccess(true);
            }
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return { postBlacklistDomain, loading, error, success };
};

export default usePostBlacklistDomain;