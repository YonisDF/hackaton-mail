import { useState } from "react";
import axios from "axios";

const usePostWhitelistDomain = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const postWhitelistDomain = async (domain) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await axios.post("/api/whitelist-domain", { domain });
            if (response.status === 200) {
                setSuccess(true);
            }
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return { postWhitelistDomain, loading, error, success };
};

export default usePostWhitelistDomain;