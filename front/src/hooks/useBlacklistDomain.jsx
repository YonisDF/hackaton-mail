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
            try {
                // Step 1: Create the domain
                const createResponse = await axios.post("http://127.0.0.1:8000/api/domain/create/", { domain });
                if (createResponse.status === 201) {
                    // Step 2: Add the domain to the blacklist
                    const blacklistResponse = await axios.patch("http://127.0.0.1:8000/api/domain/blacklist/add", { domain });
                    if (blacklistResponse.status === 200) {
                        setSuccess(true);
                    }
                }
            } catch (createError) {
                if (createError.response?.status === 400) {
                    // If the domain already exists, directly add it to the blacklist
                    const blacklistResponse = await axios.patch("http://127.0.0.1:8000/api/domain/blacklist/add", { domain });
                    if (blacklistResponse.status === 200) {
                        setSuccess(true);
                    }
                } else {
                    throw createError; // Re-throw the error if it's not a "domain already exists" error
                }
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